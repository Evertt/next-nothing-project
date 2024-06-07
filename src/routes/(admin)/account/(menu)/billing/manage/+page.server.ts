import { error, redirect } from "@sveltejs/kit"
import Stripe from "stripe"
import { PRIVATE_STRIPE_API_KEY } from "$env/static/private"
import { getOrCreateCustomerId } from "$routes/(admin)/account/subscription_helpers.server"
import type { PageServerLoad } from "./$types"

const stripe = new Stripe(PRIVATE_STRIPE_API_KEY, { apiVersion: "2023-08-16" })

export const load: PageServerLoad = async ({
	url,
	locals: { safeGetSession, supabaseServiceRole },
}) => {
	const { session } = await safeGetSession()
	if (!session) {
		redirect(303, "/login")
	}

	const { error: idError, customerId } = await getOrCreateCustomerId({
		supabaseServiceRole,
		session,
	})
	if (idError || !customerId) {
		error(500, {
			message: "Unknown error (PCID). If issue persists, please contact us.",
		})
	}

	let portalLink
	try {
		const portalSession = await stripe.billingPortal.sessions.create({
			customer: customerId,
			return_url: `${url.origin}/account/billing`,
		})
		portalLink = portalSession?.url
	} catch (e) {
		error(500, "Unknown error (PSE). If issue persists, please contact us.")
	}

	redirect(303, portalLink ?? "/account/billing")
}

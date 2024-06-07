<script lang="ts">
	import { Auth } from "@supabase/auth-ui-svelte"
	import { oauthProviders, sharedAppearance } from "../login_config"

	export let data
</script>

<svelte:head>
	<title>Forgot Password</title>
</svelte:head>

<h1 class="mb-6 text-2xl font-bold">Forgot Password</h1>
<Auth
	supabaseClient={data.supabase}
	view="forgotten_password"
	redirectTo={`${data.url}/auth/callback?next=%2Faccount%2Fsettings%2Freset_password`}
	providers={oauthProviders}
	socialLayout="horizontal"
	showLinks={false}
	appearance={sharedAppearance}
	additionalData={undefined}
/>
<div class="text-l mt-4 text-slate-800">
	Remember your password? <a class="underline" href="/login/sign_in">Sign in</a
	>.
</div>

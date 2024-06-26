import { Session, SupabaseClient } from "@supabase/supabase-js"

import { Database } from "./DatabaseDefinitions"
import "unplugin-icons/types/svelte"
import "unplugin-fonts/client"

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		interface Locals {
			supabase: SupabaseClient<Database>
			supabaseServiceRole: SupabaseClient<Database>
			safeGetSession(): Promise<{ session: Session | null; user: User | null }>
		}
		interface PageData {
			session: Session | null
		}
		// interface Error {}
		// interface Platform {}
	}
}

export {}

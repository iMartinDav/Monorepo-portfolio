import "next-auth";
import { SupabaseClient } from "@supabase/supabase-js";

declare module "next-auth" {
    interface Session {
        accessToken?: string;
        user: {
            id: string;
        } & DefaultSession["user"];
    }

    interface SessionContextValue {
        supabase: SupabaseClient<any, "public", any>;
        session?: Session | null;
    }
}

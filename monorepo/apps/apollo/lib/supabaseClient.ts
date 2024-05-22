import { createClient } from '@supabase/supabase-js'
import { Session, SessionContextValue } from 'next-auth'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const getSupabaseClient = ({
  session,
}: {
  session?: Session | null
}): SessionContextValue => {
  const supabase = createClient(supabaseUrl, supabaseKey, {
    global: {
      headers: {
        Authorization: session?.accessToken
          ? `Bearer ${session.accessToken}`
          : '',
      },
    },
  })

  return {
    supabase,
    session,
  }
}

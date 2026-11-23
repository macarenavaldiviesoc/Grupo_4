import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Cliente de Supabase exclusivo para el backend (Next.js Route Handlers).
 * Nunca usar prefijo NEXT_PUBLIC_ para evitar exponer claves en el navegador.
 */
export function getSupabaseServerClient(): SupabaseClient {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseServiceRoleKey) {
    throw new Error(
      "Faltan variables de entorno de Supabase (SUPABASE_URL o SUPABASE_SERVICE_ROLE_KEY)."
    );
  }

  return createClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

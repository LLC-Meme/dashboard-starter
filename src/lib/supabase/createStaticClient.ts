import { createClient } from "@supabase/supabase-js";

/**
 * cookieなしでSupabaseクライアントを作成する関数
 * generateStaticParamsなどで使用
 * @returns Supabaseクライアント
*/
export const createStaticClient = () => {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
};

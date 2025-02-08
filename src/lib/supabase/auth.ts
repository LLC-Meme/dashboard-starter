"server-only";

import { createServerClient } from "./createServerClient";

export const isSignedIn = async () => {
  const supabase = await createServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  return !!user;
};

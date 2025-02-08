import { redirect } from "next/navigation";
import { isSignedIn } from "@/lib/supabase/auth";

export default async function Page() {
  const signedIn = await isSignedIn();
  if (signedIn) {
    redirect("/dashboard");
  } else {
    redirect("/signin");
  }
}

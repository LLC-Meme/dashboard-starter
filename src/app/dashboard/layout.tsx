import { redirect } from "next/navigation";
import { isSignedIn } from "@/lib/supabase/auth";
import DashboardLayout from "@/components/layouts/dashboard-layout";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const signedIn = await isSignedIn();
  // if (!signedIn) {
  //   redirect("/signin");
  // }
  return <DashboardLayout>{children}</DashboardLayout>;
}
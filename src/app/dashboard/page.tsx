import { Metadata } from "next";
import { PageTitle } from "meme-system-ui/components";
import Breadcrumb from "@/components/UI/breadcrumb";

export const metadata: Metadata = {
  title: "ホーム"
};

export default function Page() {
  return (
    <>
      <Breadcrumb links={[]} />
      <PageTitle>
        Acme管理画面
      </PageTitle>
    </>
  );
}
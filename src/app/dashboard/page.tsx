import { Metadata } from "next";
import { PageTitle } from "meme-system-ui";

export const metadata: Metadata = {
  title: "ホーム"
};

export default function Page() {
  return (
    <>
      <PageTitle>
        Acme管理画面
      </PageTitle>
    </>
  );
}
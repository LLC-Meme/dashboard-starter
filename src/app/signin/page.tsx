import { Metadata } from "next";
import Form from "next/form";
import {
  Input,
  Button,
  VStack,
  PageTitle,
  ErrorMessage,
  Label,
  LabelText
} from "meme-system-ui/components";
import { signin } from "@/actions/auth";

export const metadata: Metadata = {
  title: "ログイン"
};

export default function Page() {
  return (
    <main className="w-full h-screen min-h-[640px] bg-surface flex justify-center items-center">
      <div className="fixed w-screen h-screen inset-0 -z-10 bg-surface" />
      <VStack className="gap-16 pb-16">
        <VStack className="items-center">
          <span className="font-medium text-foreground-muted">
            {/* TODO: 実際のものに変更 */}
            Acme Inc.管理ダッシュボード
          </span>
          <PageTitle>
            ログイン
          </PageTitle>
        </VStack>
        <Form action={signin} className="flex flex-col gap-4 items-center">
          <VStack className="w-[400px] gap-8">
            <VStack className="gap-4">
              <Label>
                <LabelText>メールアドレス</LabelText>
                <Input
                  placeholder="email@example.com"
                  type="email"
                />
              </Label>
              <Label>
                <LabelText>パスワード</LabelText>
                <Input
                  placeholder="XXXXXXXXXXXXX"
                  type="password"
                />
              </Label>
            </VStack>
            <Button>
              ログイン
            </Button>
          </VStack>
          <ErrorMessage message={""} />
        </Form>
      </VStack>
    </main>
  );
}
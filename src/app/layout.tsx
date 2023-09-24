import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "input masking",
  description: "인풋 비밀번호 보여주기 말기",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}

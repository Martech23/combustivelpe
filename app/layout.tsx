import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Combustível PE | Antes de abastecer, compare.",
  description: "Compare preços de combustíveis e encontre postos em Pernambuco.",
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}

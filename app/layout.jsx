import { JetBrains_Mono } from 'next/font/google';
import "./globals.css";

// COMPONENTS
import { Header } from '@/components/Header';
import { PageTransition } from '@/components/PageTransition';
import { StairTransition } from '@/components/ui/StairTransition';


const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
})
export const metadata = {
  title: ". : BetaSolution : .",
  description: "Portifólio da Beta Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={jetBrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition> {children} </PageTransition>
      </body>
    </html>
  );
}

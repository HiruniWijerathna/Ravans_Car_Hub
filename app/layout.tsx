import "./globals.css";

import { Footer, NavBar } from "@components";

export const metadata = {
  title: "Ravans Car Hub",
  description: "Discover world's best car showcase application",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='relative dark:bg-gray-800 '>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

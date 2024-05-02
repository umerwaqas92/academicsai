import { Inter } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";

import SessionProvider from "./SessionProvider";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Academics.ai",
  description: "Assist with academic papers",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession();

  return (
    
    <html data-theme="mytheme" lang="en">
            <SessionProvider session={session}>
       
      

      <body className={inter.className}>{children}</body>
      </SessionProvider>
    </html>
  );
}

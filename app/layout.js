import { Inter } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";

import SessionProvider from "./SessionProvider";
import { AuthContextProvider } from "./context/AuthContext";
import { Toaster } from "sonner";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Academics.ai",
  description: "Assist with academic papers",
};

export default async function RootLayout({ children }) {


  return (
    
    <html data-theme="mytheme" lang="en">
            
       
      

      <body className={inter.className}>
      <AuthContextProvider>
        {children}
        </AuthContextProvider>
        </body>
      <Toaster/>

    </html>
  );
}

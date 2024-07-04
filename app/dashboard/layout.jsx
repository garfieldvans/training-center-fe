import { Inter } from "next/font/google";
import Header from "./components/header/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Welcome To Training Dashboard",
  description: "Training dashboard",
};

export default function PagesLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <main className="md:pl-20 md:mt-16 mt-10 p-4 bg-gray-300">
        {children}
        </main>
        
        </body>
    </html>
  );
}

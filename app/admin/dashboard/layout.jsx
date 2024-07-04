import { Inter } from "next/font/google";
import Header from "./components/header/page";
import AuthProvider from "../../utils/AuthProvider/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Welcome To Training Dashboard",
  description: "Training dashboard",
};

export default function PagesLayout({ children, session }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <AuthProvider session={session}>
          <Header />
          <main className="md:pl-20 pl-0 mt-16 p-4 bg-gray-300">
            {children}
          </main>
        </AuthProvider>
        
        </body>
    </html>
  );
}

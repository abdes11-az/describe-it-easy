import { ReactNode } from "react";
import Header from "./Header";
import BottomNav from "./BottomNav";
import InstallPrompt from "../InstallPrompt";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container max-w-md mx-auto px-4 pt-4 pb-20">
        {children}
      </main>
      <BottomNav />
      <InstallPrompt />
    </div>
  );
};

export default Layout;
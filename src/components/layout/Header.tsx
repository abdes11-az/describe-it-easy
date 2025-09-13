import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-md items-center justify-between px-4">
        <Button variant="ghost" size="sm" className="h-10 w-10 p-0">
          <Globe className="h-5 w-5 text-muted" />
          <span className="sr-only">تغيير اللغة</span>
        </Button>
        
        <h1 className="text-xl font-bold text-foreground">أوصاف</h1>
      </div>
    </header>
  );
};

export default Header;
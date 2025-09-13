import { ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  title: string;
  icon: ReactNode;
  onClick?: () => void;
  className?: string;
}

const CategoryCard = ({ 
  title, 
  icon, 
  onClick, 
  className 
}: CategoryCardProps) => {
  return (
    <Card 
      className={cn(
        "p-6 cursor-pointer transition-all duration-200 hover:shadow-md active:scale-95 border border-border/50 text-center",
        className
      )}
      onClick={onClick}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="text-4xl">{icon}</div>
        <h3 className="text-lg font-semibold text-foreground">
          {title}
        </h3>
      </div>
    </Card>
  );
};

export default CategoryCard;
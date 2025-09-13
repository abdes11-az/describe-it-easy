import { ReactNode } from "react";
import { ChevronLeft } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  onClick?: () => void;
  className?: string;
}

const ServiceCard = ({ 
  title, 
  description, 
  icon, 
  onClick, 
  className 
}: ServiceCardProps) => {
  return (
    <Card 
      className={cn(
        "p-5 cursor-pointer transition-all duration-200 hover:shadow-md active:scale-95 border border-border/50",
        className
      )}
      onClick={onClick}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1 text-right">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            {title}
          </h3>
          <p className="text-sm text-muted leading-relaxed">
            {description}
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="text-3xl">{icon}</div>
          <ChevronLeft className="h-5 w-5 text-muted" />
        </div>
      </div>
    </Card>
  );
};

export default ServiceCard;
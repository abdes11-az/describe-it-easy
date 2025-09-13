import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import CategoryCard from "@/components/ui/category-card";

const CreateDescription = () => {
  const navigate = useNavigate();
  
  const categories = [
    { id: "cars", title: "سيارات", icon: "🚗" },
    { id: "real-estate", title: "عقارات", icon: "🏠" },
    { id: "phones", title: "هواتف", icon: "📱" },
    { id: "tablets", title: "التابلت", icon: "📱" },
    { id: "computers", title: "حواسب", icon: "💻" },
    { id: "clothes", title: "ملابس", icon: "👗" },
    { id: "motorcycles", title: "دراجات نارية", icon: "🏍️" },
    { id: "bicycles", title: "دراجات هوائية", icon: "🚴‍♂️" },
    { id: "tenant", title: "ملف المستأجر", icon: "📋" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => navigate("/")}
          className="h-10 w-10 p-0"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
        
        <div className="flex-1 text-right">
          <h2 className="text-xl font-bold text-foreground">
            اختر التصنيف
          </h2>
          <p className="text-sm text-muted">
            حدد نوع المنتج لإنشاء الوصف المناسب
          </p>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 gap-4">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            title={category.title}
            icon={category.icon}
            onClick={() => navigate(`/create/${category.id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default CreateDescription;
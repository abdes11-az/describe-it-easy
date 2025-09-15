import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CarForm from "./CarForm";
import PhoneForm from "./PhoneForm";
import RealEstateForm from "./RealEstateForm";
import TenantForm from "./TenantForm";
import TabletForm from "./TabletForm";
import ComputerForm from "./ComputerForm";
import ClothesForm from "./ClothesForm";
import MotorcycleForm from "./MotorcycleForm";
import BicycleForm from "./BicycleForm";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

const ProductForm = () => {
  const { category } = useParams();

  // If it's cars category, use the specialized car form
  if (category === "cars") {
    return <CarForm />;
  }

  // If it's phones category, use the specialized phone form
  if (category === "phones") {
    return <PhoneForm />;
  }

  // If it's real-estate category, use the specialized real estate form
  if (category === "real-estate") {
    return <RealEstateForm />;
  }

  // If it's tenant category, use the specialized tenant form
  if (category === "tenant") {
    return <TenantForm />;
  }

  // If it's tablets category, use the specialized tablet form
  if (category === "tablets") {
    return <TabletForm />;
  }

  // If it's computers category, use the specialized computer form
  if (category === "computers") {
    return <ComputerForm />;
  }

  // If it's clothes category, use the specialized clothes form
  if (category === "clothes") {
    return <ClothesForm />;
  }

  // If it's motorcycles category, use the specialized motorcycle form
  if (category === "motorcycles") {
    return <MotorcycleForm />;
  }

  // If it's bicycles category, use the specialized bicycle form
  if (category === "bicycles") {
    return <BicycleForm />;
  }

  // Default form for other categories
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: ""
  });

  const categoryNames: Record<string, string> = {
    "cars": "سيارات",
    "real-estate": "عقارات", 
    "phones": "هواتف",
    "tablets": "التابلت",
    "computers": "حواسب",
    "clothes": "ملابس",
    "motorcycles": "دراجات نارية",
    "bicycles": "دراجات هوائية",
    "tenant": "ملف المستأجر"
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to description result page with form data
    navigate("/result", { state: { formData, category } });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => navigate("/create")}
          className="h-10 w-10 p-0"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
        
        <div className="flex-1 text-right">
          <h2 className="text-xl font-bold text-foreground">
            {categoryNames[category || ""] || "بيانات المنتج"}
          </h2>
          <p className="text-sm text-muted">
            أدخل بيانات المنتج لإنشاء الوصف
          </p>
        </div>
      </div>

      {/* Form */}
      <Card className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium">
              🏷️ اسم المنتج
            </Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              placeholder="أدخل اسم المنتج"
              className="text-right"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="price" className="text-sm font-medium">
              💵 السعر
            </Label>
            <Input
              id="price"
              value={formData.price}
              onChange={(e) => handleInputChange("price", e.target.value)}
              placeholder="أدخل السعر"
              className="text-right"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="text-sm font-medium">
              📝 الوصف الأساسي
            </Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              placeholder="أدخل وصف مختصر للمنتج"
              rows={4}
              className="text-right resize-none"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full h-12 text-base font-medium"
          >
            إنشاء الوصف
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default ProductForm;
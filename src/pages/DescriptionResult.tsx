import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ChevronRight, Copy, Star, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const DescriptionResult = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  
  const { formData, category } = location.state || {};
  const [description, setDescription] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  // Mock description generation
  const generateDescription = () => {
    setIsGenerating(true);
    
    // Simulate API call
    setTimeout(() => {
      const mockDescription = `${formData?.name || "المنتج"} المميز بمواصفات عالية الجودة. 

${formData?.description || "وصف رائع للمنتج"} يتميز بالأداء المتفوق والتصميم الأنيق. 

📌 المواصفات الرئيسية:
• جودة عالية ومواد متينة
• تصميم عصري وأنيق
• سهولة في الاستخدام
• ضمان شامل

💰 السعر: ${formData?.price || "غير محدد"}

⭐ منتج موصى به للحصول على أفضل تجربة وقيمة مقابل السعر.

للاستفسار والطلب، تواصل معنا مباشرة.`;

      setDescription(mockDescription);
      setIsGenerating(false);
    }, 2000);
  };

  // Generate description on component mount
  useState(() => {
    if (formData && !description) {
      generateDescription();
    }
  });

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(description);
      toast({
        title: "تم النسخ",
        description: "تم نسخ الوصف بنجاح",
      });
    } catch (error) {
      toast({
        title: "خطأ",
        description: "فشل في نسخ الوصف",
        variant: "destructive",
      });
    }
  };

  const saveDescription = () => {
    // Mock save functionality
    toast({
      title: "تم الحفظ",
      description: "تم حفظ الوصف في المحفوظات",
    });
  };

  if (!formData) {
    return (
      <div className="text-center py-12">
        <p className="text-muted">لا توجد بيانات للمنتج</p>
        <Button 
          variant="outline" 
          onClick={() => navigate("/")}
          className="mt-4"
        >
          العودة للرئيسية
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => navigate(-1)}
          className="h-10 w-10 p-0"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
        
        <div className="flex-1 text-right">
          <h2 className="text-xl font-bold text-foreground">
            الوصف المُولد
          </h2>
          <p className="text-sm text-muted">
            {formData.name}
          </p>
        </div>
      </div>

      {/* Description Card */}
      <Card className="p-6">
        {isGenerating ? (
          <div className="flex items-center justify-center py-12">
            <div className="text-center">
              <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-muted">جاري إنشاء الوصف...</p>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="prose prose-sm max-w-none text-right">
              <div className="whitespace-pre-wrap text-foreground leading-relaxed">
                {description}
              </div>
            </div>
          </div>
        )}
      </Card>

      {/* Action Buttons */}
      {description && !isGenerating && (
        <div className="grid grid-cols-3 gap-3">
          <Button
            variant="outline"
            onClick={saveDescription}
            className="flex flex-col items-center gap-2 h-16"
          >
            <Star className="h-5 w-5" />
            <span className="text-xs">حفظ</span>
          </Button>
          
          <Button
            variant="outline"
            onClick={copyToClipboard}
            className="flex flex-col items-center gap-2 h-16"
          >
            <Copy className="h-5 w-5" />
            <span className="text-xs">نسخ</span>
          </Button>
          
          <Button
            variant="outline"
            onClick={generateDescription}
            className="flex flex-col items-center gap-2 h-16"
          >
            <RotateCcw className="h-5 w-5" />
            <span className="text-xs">وصف جديد</span>
          </Button>
        </div>
      )}
    </div>
  );
};

export default DescriptionResult;
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
    if (isGenerating) return; // Prevent multiple calls
    
    setIsGenerating(true);
    
    // Simulate faster API call
    setTimeout(() => {
      let mockDescription = "";
      
      // Generate description based on category
      if (category === "cars") {
        mockDescription = `🚗 ${formData?.carType || "سيارة"} ${formData?.model || ""} للبيع

📍 الموقع: ${formData?.city || "غير محدد"}
📅 سنة الصنع: ${formData?.manufacturingYear || "غير محدد"}
⛽ نوع الوقود: ${formData?.fuelType || "غير محدد"}
🔧 ناقل الحركة: ${formData?.transmission || "غير محدد"}
🚪 عدد الأبواب: ${formData?.doors || "غير محدد"}

💰 السعر: ${formData?.price || "للاستفسار"}
${formData?.negotiable ? `💬 قابل للتفاوض: ${formData.negotiable}` : ""}

🛞 الكيلومترات: ${formData?.kilometers || "غير محدد"}
🎨 اللون: ${formData?.color || "غير محدد"}
🔧 الحالة العامة: ${formData?.condition || "جيدة"}

${formData?.firstUse === "yes" ? "✅ الاستخدام الأول" : ""}
${formData?.accident === "no" ? "✅ لم تتعرض لحوادث" : formData?.accident === "minor" ? "⚠️ حادث بسيط" : ""}
${formData?.originalPaint === "original" ? "✅ صباغة أصلية بالكامل" : ""}

${formData?.features && formData.features.length > 0 ? `🛠️ التجهيزات:\n${formData.features.map(f => `• ${f}`).join('\n')}` : ""}

📞 للتواصل: ${formData?.phone || "انظر البيانات"}
${formData?.viewingTimes ? `⏰ أوقات المعاينة: ${formData.viewingTimes}` : ""}
${formData?.reasonForSale ? `📝 سبب البيع: ${formData.reasonForSale}` : ""}

${formData?.additionalNotes ? `📋 ملاحظات إضافية:\n${formData.additionalNotes}` : ""}`;
      } else if (category === "phones") {
        mockDescription = `📱 ${formData?.phoneName || "هاتف"} للبيع

📍 الموقع: ${formData?.city || "غير محدد"}
🎨 اللون: ${formData?.color || "غير محدد"}
⭐ الحالة: ${formData?.condition || "غير محدد"}
⏱️ مدة الاستخدام: ${formData?.usageDuration || "غير محدد"}

💾 التخزين: ${formData?.storage || "غير محدد"}
🧠 الذاكرة العشوائية: ${formData?.ram || "غير محدد"}
📺 نوع الشاشة: ${formData?.screenType || "غير محدد"}
🔋 سعة البطارية: ${formData?.batteryCapacity || "غير محدد"}
${formData?.batteryHealth ? `🔋 صحة البطارية: ${formData.batteryHealth}%` : ""}

${formData?.fingerprint === "yes" ? "✅ بصمة الإصبع تعمل" : ""}
${formData?.waterproof === "yes" ? "💧 مقاوم للماء" : ""}
📶 حالة الشبكة: ${formData?.networkStatus || "ممتازة"}

📦 الملحقات:
${formData?.originalBox === "available" ? "✅ العلبة الأصلية متوفرة" : "❌ العلبة غير متوفرة"}
${formData?.originalCharger === "available" ? "✅ الشاحن الأصلي متوفر" : "❌ الشاحن غير متوفر"}
${formData?.additionalAccessories && formData.additionalAccessories.length > 0 ? `🎁 ملحقات إضافية:\n${formData.additionalAccessories.map(a => `• ${a}`).join('\n')}` : ""}

💰 السعر: ${formData?.price || "للاستفسار"}
${formData?.negotiable ? `💬 قابل للتفاوض: ${formData.negotiable}` : ""}
${formData?.warranty === "available" ? `🛡️ الضمان: متوفر${formData?.warrantyDuration ? ` - ${formData.warrantyDuration}` : ""}` : ""}

📞 للتواصل: ${formData?.contactMethod || "انظر البيانات"}
🚚 التوصيل: ${formData?.deliveryMethod || "حسب الاتفاق"}

${formData?.reasonForSale ? `📝 سبب البيع: ${formData.reasonForSale}` : ""}
${formData?.additionalNotes ? `📋 ملاحظات إضافية:\n${formData.additionalNotes}` : ""}`;
      } else if (category === "real-estate") {
        mockDescription = `🏠 ${formData?.propertyType || "عقار"} ${formData?.purpose || "للبيع"}

📍 الموقع: ${formData?.city || "غير محدد"} - ${formData?.neighborhood || ""}
📐 المساحة: ${formData?.area || "غير محدد"}
🏢 الطوابق: ${formData?.floors || "غير محدد"}
${formData?.currentFloor ? `📍 الطابق الحالي: ${formData.currentFloor}` : ""}

🏠 توزيع الغرف:
${formData?.bedrooms ? `🛏️ غرف النوم: ${formData.bedrooms}` : ""}
${formData?.livingRooms ? `🛋️ غرف المعيشة: ${formData.livingRooms}` : ""}
${formData?.bathrooms ? `🚿 دورات المياه: ${formData.bathrooms}` : ""}
${formData?.kitchens ? `🍳 المطابخ: ${formData.kitchens}` : ""}

🏗️ المرافق:
${formData?.hasElevator === "نعم" ? "✅ مصعد متوفر" : "❌ لا يوجد مصعد"}
${formData?.hasParking === "نعم" ? "✅ موقف سيارات" : "❌ لا يوجد موقف"}
${formData?.hasBalcony === "نعم" ? "✅ شرفة متوفرة" : ""}
${formData?.hasRoof === "نعم" ? "✅ سطح متوفر" : ""}
${formData?.furnished ? `🪑 الأثاث: ${formData.furnished}` : ""}

${formData?.nearbyServices && formData.nearbyServices.length > 0 ? `🏪 الخدمات القريبة:\n${formData.nearbyServices.map(s => `• ${s}`).join('\n')}` : ""}

💰 السعر: ${formData?.price || "للاستفسار"}
${formData?.negotiable ? `💬 قابل للتفاوض: ${formData.negotiable}` : ""}
${formData?.readyToMove ? `🏃‍♂️ جاهز للانتقال: ${formData.readyToMove}` : ""}

📞 للتواصل: ${formData?.contactMethod || "انظر البيانات"}
${formData?.viewingTimes ? `⏰ أوقات المعاينة: ${formData.viewingTimes}` : ""}

${formData?.neighborhoodType ? `🏘️ نوع الحي: ${formData.neighborhoodType}` : ""}
${formData?.securityLevel ? `🔒 مستوى الأمان: ${formData.securityLevel}` : ""}

${formData?.additionalNotes ? `📋 ملاحظات إضافية:\n${formData.additionalNotes}` : ""}`;
      } else if (category === "tenant") {
        mockDescription = `📋 ملف المستأجر المطلوب

🏢 نوع الاستخدام: ${formData?.usageType || "غير محدد"}
👥 نوع المستأجر: ${formData?.tenantType || "غير محدد"}  
📅 مدة الإيجار: ${formData?.rentalDuration || "غير محدد"}

${formData?.usageType === "سكني" || formData?.usageType === "مختلط" ? `
🏠 القسم السكني:
${formData?.numberOfResidents ? `👥 عدد السكان: ${formData.numberOfResidents}` : ""}
${formData?.hasChildren === "نعم" ? `👶 وجود أطفال: نعم ${formData?.numberOfChildren ? `(${formData.numberOfChildren} أطفال)` : ""}` : formData?.hasChildren === "لا" ? "👶 لا يوجد أطفال" : ""}
${formData?.hasFurniture ? `🪑 الأثاث: ${formData.hasFurniture}` : ""}
${formData?.hasPets ? `🐕 الحيوانات الأليفة: ${formData.hasPets}` : ""}
${formData?.contractSigning ? `📄 توقيع العقد: ${formData.contractSigning}` : ""}
${formData?.paymentMethod ? `💳 طريقة الدفع: ${formData.paymentMethod}` : ""}` : ""}

${formData?.usageType === "تجاري" || formData?.usageType === "مكتبي" || formData?.usageType === "مختلط" ? `
🏢 القسم التجاري:
${formData?.businessType ? `🏪 نوع النشاط: ${formData.businessType}` : ""}
${formData?.numberOfEmployees ? `👨‍💼 عدد الموظفين: ${formData.numberOfEmployees}` : ""}
${formData?.businessContractSigning ? `📄 العقد التجاري: ${formData.businessContractSigning}` : ""}` : ""}

📞 للتواصل: ${formData?.contactMethod || "حسب الاتفاق"}

${formData?.additionalNotes ? `📝 ملاحظات إضافية:\n${formData.additionalNotes}` : ""}

✅ ملف مستأجر موثوق ومناسب لمتطلباتكم`;
      } else {
        // Default description for other categories
        mockDescription = `${formData?.name || "المنتج"} المميز

📝 ${formData?.description || "منتج عالي الجودة يلبي احتياجاتكم"}

💰 السعر: ${formData?.price || "للاستفسار"}

📞 للتواصل والاستفسار

⭐ منتج موصى به للحصول على أفضل تجربة وقيمة مقابل السعر.`;
      }

      setDescription(mockDescription);
      setIsGenerating(false);
    }, 800); // Reduced from 2000ms to 800ms
  };

  // Generate description on component mount
  useState(() => {
    if (formData && !description && !isGenerating) {
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
              <div className="whitespace-pre-wrap text-foreground leading-relaxed bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border">
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
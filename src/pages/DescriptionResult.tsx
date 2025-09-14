import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ChevronRight, Copy, Star, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const DescriptionResult = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  
  const { formData, category, savedDescription } = location.state || {};
  const [description, setDescription] = useState(savedDescription || "");
  const [isGenerating, setIsGenerating] = useState(false);

  // Mock description generation
  const generateDescription = () => {
    if (isGenerating) return; // Prevent multiple calls
    
    setIsGenerating(true);
      let mockDescription = "";
      
      // Generate description based on category
      if (category === "cars") {
        mockDescription = `🚗 ${formData?.brand || "سيارة"} ${formData?.model || ""} للبيع

📍 الموقع: ${formData?.city || "غير محدد"}
📅 سنة الصنع: ${formData?.year || "غير محدد"}
⛽ نوع الوقود: ${formData?.fuelType || "غير محدد"}
🔧 ناقل الحركة: ${formData?.transmission || "غير محدد"}
🚪 عدد الأبواب: ${formData?.doors || "غير محدد"}
⚡ قوة المحرك: ${formData?.enginePower || "غير محدد"}
${formData?.fuelConsumption ? `⛽ استهلاك الوقود: ${formData.fuelConsumption}` : ""}

💰 السعر: ${formData?.price || "للاستفسار"}
${formData?.negotiable ? `💬 قابل للتفاوض: ${formData.negotiable}` : ""}

🛞 الكيلومترات: ${formData?.kilometers || "غير محدد"}
🎨 اللون: ${formData?.color || "غير محدد"}
🔧 الحالة العامة: ${formData?.condition || "جيدة"}

${formData?.firstUse === "yes" ? "✅ الاستخدام الأول" : formData?.firstUse === "no" ? "❌ ليس الاستخدام الأول" : ""}
${formData?.allServicesAvailable === "yes" ? "✅ جميع الخدمات متوفرة" : formData?.allServicesAvailable === "no" ? "❌ الخدمات غير متوفرة" : ""}
${formData?.firstUseInCountry ? `📅 تاريخ الاستخدام الأول في البلد: ${formData.firstUseInCountry}` : ""}
${formData?.accident === "no" ? "✅ لم تتعرض لحوادث" : formData?.accident === "yes" ? "⚠️ تعرضت لحادث" : formData?.accident === "minor" ? "⚠️ حادث بسيط" : ""}
${formData?.painting === "original" ? "✅ صباغة أصلية بالكامل" : formData?.painting === "partial" ? "🎨 صباغة جزئية" : formData?.painting === "full" ? "🎨 صباغة كاملة" : ""}

${formData?.modifications ? `🔧 التعديلات: ${formData.modifications}` : ""}

🔧 التفاصيل التقنية:
${formData?.engineType ? `• نوع المحرك: ${formData.engineType}` : ""}
${formData?.steering ? `• المقود: ${formData.steering}` : ""}
${formData?.airbags ? `• الوسائد الهوائية: ${formData.airbags}` : ""}
${formData?.airConditioning ? `• التكييف: ${formData.airConditioning}` : ""}

🛠️ حالة القطع:
${formData?.wheelsType ? `• الإطارات: ${formData.wheelsType}` : ""}
${formData?.glassType ? `• الزجاج: ${formData.glassType}` : ""}
${formData?.interiorType ? `• الداخلية: ${formData.interiorType}` : ""}
${formData?.speakersType ? `• السماعات: ${formData.speakersType}` : ""}

${formData?.features && formData.features.length > 0 ? `✨ التجهيزات الإضافية:\n${formData.features.map(f => `• ${f}`).join('\n')}` : ""}

👤 معلومات المالك:
${formData?.ownerType ? `• نوع المالك: ${formData.ownerType}` : ""}
${formData?.usageDuration ? `• مدة الاستخدام: ${formData.usageDuration}` : ""}
${formData?.ownershipType ? `• نوع الملكية: ${formData.ownershipType}` : ""}
${formData?.papersReady ? `• الأوراق: ${formData.papersReady}` : ""}
${formData?.taxAmount ? `• مبلغ الضريبة: ${formData.taxAmount}` : ""}
${formData?.insuranceAmount ? `• مبلغ التأمين: ${formData.insuranceAmount}` : ""}

📞 للتواصل: ${formData?.phone || "انظر البيانات"}
${formData?.viewingTimes ? `⏰ أوقات المعاينة: ${formData.viewingTimes}` : ""}
${formData?.reasonForSale ? `📝 سبب البيع: ${formData.reasonForSale}` : ""}
${formData?.unwantedCustomers ? `⚠️ العملاء غير المرغوبين: ${formData.unwantedCustomers}` : ""}

${formData?.additionalNotes ? `📋 ملاحظات إضافية:\n${formData.additionalNotes}` : ""}`;
      } else if (category === "phones") {
        mockDescription = `📱 ${formData?.phoneName || "هاتف"} للبيع

📍 الموقع: ${formData?.city || "غير محدد"}
🎨 اللون: ${formData?.color || "غير محدد"}
⭐ الحالة: ${formData?.condition || "غير محدد"}
⏱️ مدة الاستخدام: ${formData?.usageDuration || "غير محدد"}

💾 المواصفات التقنية:
${formData?.storage ? `• التخزين: ${formData.storage}` : ""}
${formData?.ram ? `• الذاكرة العشوائية: ${formData.ram}` : ""}
${formData?.screenType ? `• نوع الشاشة: ${formData.screenType}` : ""}
${formData?.operatingSystem ? `• نظام التشغيل: ${formData.operatingSystem}` : ""}
${formData?.batteryCapacity ? `• سعة البطارية: ${formData.batteryCapacity}` : ""}
${formData?.normalBatteryLife ? `• عمر البطارية العادي: ${formData.normalBatteryLife}` : ""}
${formData?.gamingBatteryLife ? `• عمر البطارية في الألعاب: ${formData.gamingBatteryLife}` : ""}
${formData?.iphoneBatteryPercentage ? `• نسبة البطارية للآيفون: ${formData.iphoneBatteryPercentage}` : ""}

🔧 حالة الهاتف:
${formData?.fingerprintWorks === "yes" ? "✅ بصمة الإصبع تعمل" : formData?.fingerprintWorks === "no" ? "❌ بصمة الإصبع لا تعمل" : formData?.fingerprintWorks === "none" ? "⚪ لا يوجد بصمة" : ""}
${formData?.waterResistant === "yes" ? "✅ مقاوم للماء" : formData?.waterResistant === "no" ? "❌ غير مقاوم للماء" : formData?.waterResistant === "partial" ? "🔸 مقاوم للماء جزئياً" : ""}
${formData?.networkCondition ? `📶 حالة الشبكة: ${formData.networkCondition}` : ""}

${formData?.modifications ? `🔧 التعديلات: ${formData.modifications}` : ""}

📦 الملحقات:
${formData?.originalBox === "available" ? "✅ العلبة الأصلية متوفرة" : formData?.originalBox === "not-available" ? "❌ العلبة غير متوفرة" : formData?.originalBox === "damaged" ? "⚠️ العلبة تالفة" : ""}
${formData?.originalCharger === "available" ? "✅ الشاحن الأصلي متوفر" : formData?.originalCharger === "not-available" ? "❌ الشاحن غير متوفر" : formData?.originalCharger === "damaged" ? "⚠️ الشاحن تالف" : ""}
${formData?.additionalAccessories && formData.additionalAccessories.length > 0 ? `🎁 ملحقات إضافية:\n${formData.additionalAccessories.map(a => `• ${a}`).join('\n')}` : ""}

💰 السعر: ${formData?.price || "للاستفسار"}
${formData?.negotiable ? `💬 قابل للتفاوض: ${formData.negotiable}` : ""}
${formData?.warranty === "available" ? `🛡️ الضمان: متوفر${formData?.warrantyDuration ? ` - ${formData.warrantyDuration}` : ""}` : ""}
${formData?.acceptExchange ? `🔄 يقبل المبادلة: ${formData.acceptExchange}` : ""}

👤 معلومات البائع:
${formData?.sellerType ? `• نوع البائع: ${formData.sellerType}` : ""}
${formData?.deliveryMethod ? `• طريقة التوصيل: ${formData.deliveryMethod}` : ""}
${formData?.contactMethod ? `• طريقة التواصل: ${formData.contactMethod}` : ""}
${formData?.inspectionTimes ? `• أوقات المعاينة: ${formData.inspectionTimes}` : ""}
${formData?.unwantedCustomers && formData.unwantedCustomers.length > 0 ? `⚠️ شروط خاصة:\n${formData.unwantedCustomers.map(c => `• ${c}`).join('\n')}` : ""}

${formData?.reasonForSale ? `📝 سبب البيع: ${formData.reasonForSale}` : ""}
${formData?.additionalNotes ? `📋 ملاحظات إضافية:\n${formData.additionalNotes}` : ""}`;
      } else if (category === "real-estate") {
        mockDescription = `🏠 ${formData?.propertyType || "عقار"} ${formData?.purpose || "للبيع"}

📍 الموقع: ${formData?.city || "غير محدد"}${formData?.neighborhood ? ` - ${formData.neighborhood}` : ""}
📐 المساحة: ${formData?.area || "غير محدد"}
🏢 الطوابق: ${formData?.floors || "غير محدد"}
${formData?.currentFloor ? `📍 الطابق الحالي: ${formData.currentFloor}` : ""}
${formData?.clientType ? `👥 نوع الزبون: ${formData.clientType}` : ""}

🏠 توزيع الغرف:
${formData?.bedrooms ? `🛏️ غرف النوم: ${formData.bedrooms}` : ""}
${formData?.livingRooms ? `🛋️ غرف المعيشة: ${formData.livingRooms}` : ""}
${formData?.bathrooms ? `🚿 دورات المياه: ${formData.bathrooms}` : ""}
${formData?.kitchens ? `🍳 المطابخ: ${formData.kitchens}` : ""}
${formData?.hasBalcony === "نعم" ? "✅ شرفة متوفرة" : formData?.hasBalcony === "لا" ? "❌ لا يوجد شرفة" : ""}
${formData?.hasRoof === "نعم" ? "✅ سطح متوفر" : formData?.hasRoof === "لا" ? "❌ لا يوجد سطح" : ""}

🏗️ المرافق:
${formData?.hasElevator === "نعم" ? "✅ مصعد متوفر" : formData?.hasElevator === "لا" ? "❌ لا يوجد مصعد" : ""}
${formData?.hasParking === "نعم" ? "✅ موقف سيارات" : formData?.hasParking === "لا" ? "❌ لا يوجد موقف" : ""}
${formData?.furnished === "نعم" ? "🪑 مفروش بالكامل" : formData?.furnished === "لا" ? "🪑 غير مفروش" : formData?.furnished === "جزئياً" ? "🪑 مفروش جزئياً" : ""}

${formData?.nearbyServices && formData.nearbyServices.length > 0 ? `🏪 الخدمات القريبة:\n${formData.nearbyServices.map(s => `• ${s}`).join('\n')}` : ""}

💰 السعر: ${formData?.price || "للاستفسار"}
${formData?.negotiable === "نعم" ? "💬 قابل للتفاوض" : formData?.negotiable === "لا" ? "💬 السعر ثابت" : ""}
${formData?.readyToMove === "نعم" ? "🏃‍♂️ جاهز للانتقال فوراً" : formData?.readyToMove === "لا" ? "🏃‍♂️ غير جاهز للانتقال" : formData?.readyToMove === "بعد فترة" ? "🏃‍♂️ جاهز للانتقال بعد فترة" : ""}

📞 للتواصل: ${formData?.contactMethod || "انظر البيانات"}
${formData?.viewingTimes ? `⏰ أوقات المعاينة: ${formData.viewingTimes}` : ""}
${formData?.unwantedClients && formData.unwantedClients.length > 0 ? `⚠️ شروط خاصة:\n${formData.unwantedClients.map(c => `• ${c}`).join('\n')}` : ""}
${formData?.sellReason ? `📝 سبب البيع: ${formData.sellReason}` : ""}

🏘️ معلومات المنطقة:
${formData?.neighborhoodType ? `• نوع الحي: ${formData.neighborhoodType}` : ""}
${formData?.neighborsNature ? `• طبيعة الجيران: ${formData.neighborsNature}` : ""}
${formData?.noiseLevel ? `• مستوى الضوضاء: ${formData.noiseLevel}` : ""}
${formData?.securityLevel ? `• مستوى الأمان: ${formData.securityLevel}` : ""}

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
${formData?.hasFurniture === "نعم" ? "🪑 يحتاج أثاث" : formData?.hasFurniture === "لا" ? "🪑 لا يحتاج أثاث" : formData?.hasFurniture === "جزئياً" ? "🪑 يحتاج أثاث جزئي" : ""}
${formData?.hasPets === "نعم" ? "🐕 يملك حيوانات أليفة" : formData?.hasPets === "لا" ? "🐕 لا يملك حيوانات أليفة" : ""}
${formData?.contractSigning === "نعم" ? "📄 موافق على توقيع العقد" : formData?.contractSigning === "لا" ? "📄 غير موافق على العقد" : formData?.contractSigning === "حسب رغبة صاحب الملك" ? "📄 حسب رغبة صاحب الملك" : ""}
${formData?.paymentMethod ? `💳 طريقة الدفع المفضلة: ${formData.paymentMethod}` : ""}` : ""}

${formData?.usageType === "تجاري" || formData?.usageType === "مكتبي" || formData?.usageType === "مختلط" ? `
🏢 القسم التجاري:
${formData?.businessType ? `🏪 نوع النشاط التجاري: ${formData.businessType}` : ""}
${formData?.numberOfEmployees ? `👨‍💼 عدد الموظفين: ${formData.numberOfEmployees}` : ""}
${formData?.businessContractSigning === "نعم" ? "📄 موافق على العقد التجاري" : formData?.businessContractSigning === "لا" ? "📄 غير موافق على العقد التجاري" : formData?.businessContractSigning === "حسب رغبة صاحب الملك" ? "📄 حسب رغبة صاحب الملك" : ""}` : ""}

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
  };

  // Generate description on component mount
  useEffect(() => {
    // Only generate if we don't have a saved description and formData exists
    if (formData && !savedDescription && !description && !isGenerating) {
      generateDescription();
    }
  }, [formData, savedDescription]);

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
    try {
      // Get existing saved items from localStorage
      const existingSavedItems = JSON.parse(localStorage.getItem('savedDescriptions') || '[]');
      
      // Create new saved item
      const newSavedItem = {
        id: Date.now().toString(),
        name: formData?.name || formData?.phoneName || formData?.brand || formData?.propertyType || 'وصف محفوظ',
        category: category === 'cars' ? 'سيارات' : 
                 category === 'phones' ? 'هواتف' : 
                 category === 'real-estate' ? 'عقارات' : 
                 category === 'tenant' ? 'مستأجرين' : 'عام',
        date: new Date().toLocaleDateString('ar-SA'),
        description: description,
        formData: formData,
        categoryType: category,
        savedAt: new Date().toISOString()
      };
      
      // Add new item to the beginning of the array
      const updatedSavedItems = [newSavedItem, ...existingSavedItems];
      
      // Save back to localStorage
      localStorage.setItem('savedDescriptions', JSON.stringify(updatedSavedItems));
      
      toast({
        title: "تم الحفظ",
        description: "تم حفظ الوصف في المحفوظات بنجاح",
      });
    } catch (error) {
      toast({
        title: "خطأ",
        description: "فشل في حفظ الوصف",
        variant: "destructive",
      });
    }
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
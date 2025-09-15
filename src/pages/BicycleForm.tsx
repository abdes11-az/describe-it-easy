import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

const BicycleForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    // القسم الأول: المعلومات الأساسية
    city: "",
    brand: "",
    model: "",
    type: "",
    frameSize: "",
    frameMaterial: "",
    wheelSize: "",
    condition: "",
    
    // القسم الثاني: المواصفات التقنية
    gears: "",
    brakeType: "",
    suspension: "",
    weight: "",
    color: "",
    
    // القسم الثالث: الأجزاء والمكونات
    components: [],
    
    // القسم الرابع: الملحقات
    accessories: [],
    
    // القسم الخامس: تفاصيل إضافية
    usagePeriod: "",
    reason: "",
    price: "",
    unwantedCustomers: "",
    notes: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCheckboxChange = (field: string, value: string, checked: boolean) => {
    setFormData(prev => {
      const currentArray = prev[field as keyof typeof prev] as string[] || [];
      if (checked) {
        return {
          ...prev,
          [field]: [...currentArray, value]
        };
      } else {
        return {
          ...prev,
          [field]: currentArray.filter(item => item !== value)
        };
      }
    });
  };

  const handleSubmit = () => {
    const description = `دراجة هوائية ${formData.brand} ${formData.model} - ${formData.type}
المدينة: ${formData.city}
الماركة: ${formData.brand}
الموديل: ${formData.model}
النوع: ${formData.type}
مقاس الإطار: ${formData.frameSize}
مادة الإطار: ${formData.frameMaterial}
مقاس العجلات: ${formData.wheelSize}
الحالة: ${formData.condition}
عدد السرعات: ${formData.gears}
نوع الفرامل: ${formData.brakeType}
نظام التعليق: ${formData.suspension}
الوزن: ${formData.weight}
اللون: ${formData.color}
المكونات: ${formData.components.join(", ")}
الملحقات: ${formData.accessories.join(", ")}
فترة الاستخدام: ${formData.usagePeriod}
سبب البيع: ${formData.reason}
السعر: ${formData.price}
ملاحظات إضافية: ${formData.notes}`;

    navigate("/result", { 
      state: { 
        description,
        category: "دراجات هوائية"
      } 
    });
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
            بيانات الدراجة الهوائية
          </h2>
          <p className="text-sm text-muted">
            أدخل تفاصيل الدراجة الهوائية لإنشاء وصف شامل
          </p>
        </div>
      </div>

      {/* القسم الأول: المعلومات الأساسية */}
      <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/20 border-blue-200 dark:border-blue-800">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
          <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-300">المعلومات الأساسية</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="city">المدينة</Label>
            <Input
              id="city"
              placeholder="اختر المدينة"
              value={formData.city}
              onChange={(e) => handleInputChange("city", e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="brand">الماركة</Label>
            <Select onValueChange={(value) => handleInputChange("brand", value)}>
              <SelectTrigger>
                <SelectValue placeholder="اختر الماركة" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="trek">Trek</SelectItem>
                <SelectItem value="giant">Giant</SelectItem>
                <SelectItem value="specialized">Specialized</SelectItem>
                <SelectItem value="cannondale">Cannondale</SelectItem>
                <SelectItem value="scott">Scott</SelectItem>
                <SelectItem value="bianchi">Bianchi</SelectItem>
                <SelectItem value="merida">Merida</SelectItem>
                <SelectItem value="cube">Cube</SelectItem>
                <SelectItem value="other">أخرى</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="model">الموديل</Label>
            <Input
              id="model"
              placeholder="اكتب الموديل"
              value={formData.model}
              onChange={(e) => handleInputChange("model", e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="type">نوع الدراجة</Label>
            <Select onValueChange={(value) => handleInputChange("type", value)}>
              <SelectTrigger>
                <SelectValue placeholder="اختر نوع الدراجة" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mountain">جبلية</SelectItem>
                <SelectItem value="road">طريق</SelectItem>
                <SelectItem value="hybrid">هجين</SelectItem>
                <SelectItem value="city">مدينة</SelectItem>
                <SelectItem value="bmx">BMX</SelectItem>
                <SelectItem value="electric">كهربائية</SelectItem>
                <SelectItem value="folding">قابلة للطي</SelectItem>
                <SelectItem value="kids">أطفال</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="frameSize">مقاس الإطار</Label>
            <Select onValueChange={(value) => handleInputChange("frameSize", value)}>
              <SelectTrigger>
                <SelectValue placeholder="اختر مقاس الإطار" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="xs">XS (14-15 بوصة)</SelectItem>
                <SelectItem value="s">S (16-17 بوصة)</SelectItem>
                <SelectItem value="m">M (18-19 بوصة)</SelectItem>
                <SelectItem value="l">L (20-21 بوصة)</SelectItem>
                <SelectItem value="xl">XL (22-23 بوصة)</SelectItem>
                <SelectItem value="xxl">XXL (24+ بوصة)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="frameMaterial">مادة الإطار</Label>
            <Select onValueChange={(value) => handleInputChange("frameMaterial", value)}>
              <SelectTrigger>
                <SelectValue placeholder="اختر مادة الإطار" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="aluminum">ألومنيوم</SelectItem>
                <SelectItem value="steel">حديد</SelectItem>
                <SelectItem value="carbon">ألياف كربون</SelectItem>
                <SelectItem value="titanium">تيتانيوم</SelectItem>
                <SelectItem value="alloy">سبائك</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="wheelSize">مقاس العجلات</Label>
            <Select onValueChange={(value) => handleInputChange("wheelSize", value)}>
              <SelectTrigger>
                <SelectValue placeholder="اختر مقاس العجلات" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="12">12 بوصة</SelectItem>
                <SelectItem value="16">16 بوصة</SelectItem>
                <SelectItem value="20">20 بوصة</SelectItem>
                <SelectItem value="24">24 بوصة</SelectItem>
                <SelectItem value="26">26 بوصة</SelectItem>
                <SelectItem value="27.5">27.5 بوصة</SelectItem>
                <SelectItem value="29">29 بوصة</SelectItem>
                <SelectItem value="700c">700C</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="condition">الحالة</Label>
            <Select onValueChange={(value) => handleInputChange("condition", value)}>
              <SelectTrigger>
                <SelectValue placeholder="اختر حالة الدراجة" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="new">جديد</SelectItem>
                <SelectItem value="excellent">ممتاز</SelectItem>
                <SelectItem value="very-good">جيد جداً</SelectItem>
                <SelectItem value="good">جيد</SelectItem>
                <SelectItem value="fair">مقبول</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </Card>

      {/* القسم الثاني: المواصفات التقنية */}
      <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/20 border-green-200 dark:border-green-800">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
          <h3 className="text-lg font-semibold text-green-700 dark:text-green-300">المواصفات التقنية</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="gears">عدد السرعات</Label>
            <Select onValueChange={(value) => handleInputChange("gears", value)}>
              <SelectTrigger>
                <SelectValue placeholder="اختر عدد السرعات" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="single">سرعة واحدة</SelectItem>
                <SelectItem value="3">3 سرعات</SelectItem>
                <SelectItem value="6">6 سرعات</SelectItem>
                <SelectItem value="7">7 سرعات</SelectItem>
                <SelectItem value="8">8 سرعات</SelectItem>
                <SelectItem value="9">9 سرعات</SelectItem>
                <SelectItem value="10">10 سرعات</SelectItem>
                <SelectItem value="11">11 سرعة</SelectItem>
                <SelectItem value="12">12 سرعة</SelectItem>
                <SelectItem value="18">18 سرعة</SelectItem>
                <SelectItem value="21">21 سرعة</SelectItem>
                <SelectItem value="24">24 سرعة</SelectItem>
                <SelectItem value="27">27 سرعة</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="brakeType">نوع الفرامل</Label>
            <Select onValueChange={(value) => handleInputChange("brakeType", value)}>
              <SelectTrigger>
                <SelectValue placeholder="اختر نوع الفرامل" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rim">فرامل حافة</SelectItem>
                <SelectItem value="disc-mechanical">فرامل قرصية ميكانيكية</SelectItem>
                <SelectItem value="disc-hydraulic">فرامل قرصية هيدروليكية</SelectItem>
                <SelectItem value="coaster">فرامل خلفية</SelectItem>
                <SelectItem value="mixed">مختلطة</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="suspension">نظام التعليق</Label>
            <Select onValueChange={(value) => handleInputChange("suspension", value)}>
              <SelectTrigger>
                <SelectValue placeholder="اختر نظام التعليق" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">بدون تعليق</SelectItem>
                <SelectItem value="front">تعليق أمامي</SelectItem>
                <SelectItem value="full">تعليق كامل</SelectItem>
                <SelectItem value="rear">تعليق خلفي</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="weight">الوزن</Label>
            <Input
              id="weight"
              placeholder="وزن الدراجة بالكيلوجرام"
              value={formData.weight}
              onChange={(e) => handleInputChange("weight", e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="color">اللون</Label>
            <Input
              id="color"
              placeholder="لون الدراجة"
              value={formData.color}
              onChange={(e) => handleInputChange("color", e.target.value)}
            />
          </div>
        </div>
      </Card>

      {/* القسم الثالث: الأجزاء والمكونات */}
      <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/20 border-purple-200 dark:border-purple-800">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
          <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-300">الأجزاء والمكونات</h3>
        </div>
        
        <div className="space-y-4">
          <Label>المكونات المحدثة (اختر ما ينطبق):</Label>
          <div className="grid grid-cols-2 gap-4">
            {[
              "سلسلة جديدة",
              "إطارات جديدة",
              "فرامل محدثة",
              "ناقل حركة محدث",
              "مقعد جديد",
              "مقود جديد",
              "بدالات جديدة",
              "عجلات جديدة",
              "تروس محدثة",
              "كشافات LED",
              "عدادات رقمية",
              "نظام تتبع GPS"
            ].map((component) => (
              <div key={component} className="flex items-center space-x-2 space-x-reverse">
                <Checkbox
                  id={component}
                  onCheckedChange={(checked) => 
                    handleCheckboxChange("components", component, checked as boolean)
                  }
                />
                <Label htmlFor={component} className="text-sm">{component}</Label>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* القسم الرابع: الملحقات */}
      <Card className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/30 dark:to-orange-900/20 border-orange-200 dark:border-orange-800">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
          <h3 className="text-lg font-semibold text-orange-700 dark:text-orange-300">الملحقات</h3>
        </div>
        
        <div className="space-y-4">
          <Label>الملحقات المتوفرة (اختر ما ينطبق):</Label>
          <div className="grid grid-cols-2 gap-4">
            {[
              "خوذة أمان",
              "قفل الدراجة",
              "جرس الدراجة",
              "مرايا جانبية",
              "سلة أمامية",
              "حقيبة خلفية",
              "قارورة مياه",
              "مضخة هواء",
              "أدوات إصلاح",
              "واقي الطين",
              "إضاءة أمامية",
              "إضاءة خلفية"
            ].map((accessory) => (
              <div key={accessory} className="flex items-center space-x-2 space-x-reverse">
                <Checkbox
                  id={accessory}
                  onCheckedChange={(checked) => 
                    handleCheckboxChange("accessories", accessory, checked as boolean)
                  }
                />
                <Label htmlFor={accessory} className="text-sm">{accessory}</Label>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* القسم الخامس: تفاصيل إضافية */}
      <Card className="p-6 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950/30 dark:to-red-900/20 border-red-200 dark:border-red-800">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">5</div>
          <h3 className="text-lg font-semibold text-red-700 dark:text-red-300">تفاصيل إضافية</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="usagePeriod">فترة الاستخدام</Label>
            <Input
              id="usagePeriod"
              placeholder="كم فترة استخدمت الدراجة"
              value={formData.usagePeriod}
              onChange={(e) => handleInputChange("usagePeriod", e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="reason">سبب البيع</Label>
            <Input
              id="reason"
              placeholder="سبب بيع الدراجة الهوائية"
              value={formData.reason}
              onChange={(e) => handleInputChange("reason", e.target.value)}
            />
          </div>
          
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="price">السعر</Label>
            <Input
              id="price"
              placeholder="السعر المطلوب"
              value={formData.price}
              onChange={(e) => handleInputChange("price", e.target.value)}
            />
          </div>
          
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="unwantedCustomers">العملاء غير المرغوبين</Label>
            <Textarea
              id="unwantedCustomers"
              placeholder="حدد نوع العملاء غير المرغوب فيهم (مثال: بدون وسطاء، السعر نهائي، جادين فقط)"
              value={formData.unwantedCustomers}
              onChange={(e) => handleInputChange("unwantedCustomers", e.target.value)}
              rows={2}
              className="resize-none"
            />
          </div>
          
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="notes">ملاحظات إضافية</Label>
            <Textarea
              id="notes"
              placeholder="أي تفاصيل إضافية تريد إضافتها"
              value={formData.notes}
              onChange={(e) => handleInputChange("notes", e.target.value)}
              rows={4}
            />
          </div>
        </div>
      </Card>

      {/* Submit Button */}
      <Button 
        onClick={handleSubmit}
        className="w-full h-12 text-lg font-semibold"
      >
        إنشاء الوصف
      </Button>
    </div>
  );
};

export default BicycleForm;
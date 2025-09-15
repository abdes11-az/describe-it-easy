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

const TabletForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    // القسم الأول: المعلومات الأساسية
    city: "",
    brand: "",
    model: "",
    screenSize: "",
    resolution: "",
    storage: "",
    ram: "",
    operatingSystem: "",
    condition: "",
    
    // القسم الثاني: المواصفات التقنية
    processor: "",
    batteryLife: "",
    cameraResolution: "",
    connectivity: "",
    weight: "",
    color: "",
    
    // القسم الثالث: الملحقات والإضافات
    accessories: [],
    
    // القسم الرابع: تفاصيل إضافية
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/result", { state: { formData, category: "tablets" } });
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
            بيانات التابلت
          </h2>
          <p className="text-sm text-muted">
            أدخل تفاصيل التابلت لإنشاء وصف شامل
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
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
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="samsung">Samsung</SelectItem>
                <SelectItem value="huawei">Huawei</SelectItem>
                <SelectItem value="lenovo">Lenovo</SelectItem>
                <SelectItem value="xiaomi">Xiaomi</SelectItem>
                <SelectItem value="microsoft">Microsoft</SelectItem>
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
            <Label htmlFor="screenSize">حجم الشاشة</Label>
            <Select onValueChange={(value) => handleInputChange("screenSize", value)}>
              <SelectTrigger>
                <SelectValue placeholder="اختر حجم الشاشة" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7-8">7-8 بوصة</SelectItem>
                <SelectItem value="8-9">8-9 بوصة</SelectItem>
                <SelectItem value="9-10">9-10 بوصة</SelectItem>
                <SelectItem value="10-11">10-11 بوصة</SelectItem>
                <SelectItem value="11-12">11-12 بوصة</SelectItem>
                <SelectItem value="12+">أكثر من 12 بوصة</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="resolution">دقة الشاشة</Label>
            <Select onValueChange={(value) => handleInputChange("resolution", value)}>
              <SelectTrigger>
                <SelectValue placeholder="اختر دقة الشاشة" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="hd">HD (1280x720)</SelectItem>
                <SelectItem value="fhd">Full HD (1920x1080)</SelectItem>
                <SelectItem value="2k">2K (2560x1440)</SelectItem>
                <SelectItem value="4k">4K (3840x2160)</SelectItem>
                <SelectItem value="retina">Retina Display</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="storage">التخزين</Label>
            <Select onValueChange={(value) => handleInputChange("storage", value)}>
              <SelectTrigger>
                <SelectValue placeholder="اختر مساحة التخزين" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="32gb">32 جيجا</SelectItem>
                <SelectItem value="64gb">64 جيجا</SelectItem>
                <SelectItem value="128gb">128 جيجا</SelectItem>
                <SelectItem value="256gb">256 جيجا</SelectItem>
                <SelectItem value="512gb">512 جيجا</SelectItem>
                <SelectItem value="1tb">1 تيرا</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="ram">الذاكرة العشوائية</Label>
            <Select onValueChange={(value) => handleInputChange("ram", value)}>
              <SelectTrigger>
                <SelectValue placeholder="اختر حجم الذاكرة" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2gb">2 جيجا</SelectItem>
                <SelectItem value="3gb">3 جيجا</SelectItem>
                <SelectItem value="4gb">4 جيجا</SelectItem>
                <SelectItem value="6gb">6 جيجا</SelectItem>
                <SelectItem value="8gb">8 جيجا</SelectItem>
                <SelectItem value="12gb">12 جيجا</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="operatingSystem">نظام التشغيل</Label>
            <Select onValueChange={(value) => handleInputChange("operatingSystem", value)}>
              <SelectTrigger>
                <SelectValue placeholder="اختر نظام التشغيل" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="android">Android</SelectItem>
                <SelectItem value="ios">iOS</SelectItem>
                <SelectItem value="windows">Windows</SelectItem>
                <SelectItem value="other">آخر</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="condition">الحالة</Label>
            <Select onValueChange={(value) => handleInputChange("condition", value)}>
              <SelectTrigger>
                <SelectValue placeholder="اختر حالة التابلت" />
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
            <Label htmlFor="processor">المعالج</Label>
            <Input
              id="processor"
              placeholder="نوع المعالج"
              value={formData.processor}
              onChange={(e) => handleInputChange("processor", e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="batteryLife">عمر البطارية</Label>
            <Input
              id="batteryLife"
              placeholder="مدة عمل البطارية"
              value={formData.batteryLife}
              onChange={(e) => handleInputChange("batteryLife", e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="cameraResolution">دقة الكاميرا</Label>
            <Input
              id="cameraResolution"
              placeholder="دقة الكاميرا الخلفية والأمامية"
              value={formData.cameraResolution}
              onChange={(e) => handleInputChange("cameraResolution", e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="connectivity">الاتصال</Label>
            <Select onValueChange={(value) => handleInputChange("connectivity", value)}>
              <SelectTrigger>
                <SelectValue placeholder="نوع الاتصال" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="wifi">WiFi فقط</SelectItem>
                <SelectItem value="wifi-cellular">WiFi + Cellular</SelectItem>
                <SelectItem value="5g">5G</SelectItem>
                <SelectItem value="4g">4G LTE</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="weight">الوزن</Label>
            <Input
              id="weight"
              placeholder="وزن التابلت بالجرام"
              value={formData.weight}
              onChange={(e) => handleInputChange("weight", e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="color">اللون</Label>
            <Input
              id="color"
              placeholder="لون التابلت"
              value={formData.color}
              onChange={(e) => handleInputChange("color", e.target.value)}
            />
          </div>
        </div>
      </Card>

      {/* القسم الثالث: الملحقات والإضافات */}
      <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/20 border-purple-200 dark:border-purple-800">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
          <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-300">الملحقات والإضافات</h3>
        </div>
        
        <div className="space-y-4">
          <Label>الملحقات المتوفرة (اختر ما ينطبق):</Label>
          <div className="grid grid-cols-2 gap-4">
            {[
              "الشاحن الأصلي",
              "الكفر الواقي",
              "لوحة المفاتيح",
              "القلم الذكي",
              "سماعات",
              "حامل التابلت",
              "واقي الشاشة",
              "العلبة الأصلية"
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

      {/* القسم الرابع: تفاصيل إضافية */}
      <Card className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/30 dark:to-orange-900/20 border-orange-200 dark:border-orange-800">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
          <h3 className="text-lg font-semibold text-orange-700 dark:text-orange-300">تفاصيل إضافية</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="usagePeriod">فترة الاستخدام</Label>
            <Input
              id="usagePeriod"
              placeholder="كم فترة استخدمت التابلت"
              value={formData.usagePeriod}
              onChange={(e) => handleInputChange("usagePeriod", e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="reason">سبب البيع</Label>
            <Input
              id="reason"
              placeholder="سبب بيع التابلت"
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
          type="submit"
          className="w-full h-12 text-lg font-semibold"
        >
          إنشاء الوصف
        </Button>
      </form>
    </div>
  );
};

export default TabletForm;
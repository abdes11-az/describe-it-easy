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

const ComputerForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    // القسم الأول: المعلومات الأساسية
    city: "",
    type: "",
    brand: "",
    model: "",
    processor: "",
    ram: "",
    storage: "",
    operatingSystem: "",
    condition: "",
    
    // القسم الثاني: مواصفات الشاشة والرسوميات
    screenSize: "",
    screenResolution: "",
    graphicsCard: "",
    graphicsMemory: "",
    
    // القسم الثالث: المنافذ والاتصال
    ports: [],
    connectivity: [],
    
    // القسم الرابع: الملحقات
    accessories: [],
    
    // القسم الخامس: تفاصيل إضافية
    usagePeriod: "",
    reason: "",
    price: "",
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
    const description = `${formData.type} ${formData.brand} ${formData.model}
المدينة: ${formData.city}
النوع: ${formData.type}
الماركة: ${formData.brand}
الموديل: ${formData.model}
المعالج: ${formData.processor}
الذاكرة العشوائية: ${formData.ram}
التخزين: ${formData.storage}
نظام التشغيل: ${formData.operatingSystem}
الحالة: ${formData.condition}
حجم الشاشة: ${formData.screenSize}
دقة الشاشة: ${formData.screenResolution}
كرت الرسوميات: ${formData.graphicsCard}
ذاكرة الرسوميات: ${formData.graphicsMemory}
المنافذ: ${formData.ports.join(", ")}
الاتصال: ${formData.connectivity.join(", ")}
الملحقات: ${formData.accessories.join(", ")}
فترة الاستخدام: ${formData.usagePeriod}
سبب البيع: ${formData.reason}
السعر: ${formData.price}
ملاحظات إضافية: ${formData.notes}`;

    navigate("/result", { 
      state: { 
        description,
        category: "حواسب"
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
            بيانات الحاسوب
          </h2>
          <p className="text-sm text-muted">
            أدخل تفاصيل الحاسوب لإنشاء وصف شامل
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
            <Label htmlFor="type">نوع الحاسوب</Label>
            <Select onValueChange={(value) => handleInputChange("type", value)}>
              <SelectTrigger>
                <SelectValue placeholder="اختر النوع" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="desktop">حاسوب مكتبي</SelectItem>
                <SelectItem value="laptop">لابتوب</SelectItem>
                <SelectItem value="all-in-one">الكل في واحد</SelectItem>
                <SelectItem value="mini-pc">حاسوب صغير</SelectItem>
                <SelectItem value="workstation">محطة عمل</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="brand">الماركة</Label>
            <Select onValueChange={(value) => handleInputChange("brand", value)}>
              <SelectTrigger>
                <SelectValue placeholder="اختر الماركة" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dell">Dell</SelectItem>
                <SelectItem value="hp">HP</SelectItem>
                <SelectItem value="lenovo">Lenovo</SelectItem>
                <SelectItem value="asus">ASUS</SelectItem>
                <SelectItem value="acer">Acer</SelectItem>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="msi">MSI</SelectItem>
                <SelectItem value="custom">مجمع</SelectItem>
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
            <Label htmlFor="processor">المعالج</Label>
            <Input
              id="processor"
              placeholder="نوع المعالج مثل Intel Core i7"
              value={formData.processor}
              onChange={(e) => handleInputChange("processor", e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="ram">الذاكرة العشوائية</Label>
            <Select onValueChange={(value) => handleInputChange("ram", value)}>
              <SelectTrigger>
                <SelectValue placeholder="اختر حجم الذاكرة" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="4gb">4 جيجا</SelectItem>
                <SelectItem value="8gb">8 جيجا</SelectItem>
                <SelectItem value="16gb">16 جيجا</SelectItem>
                <SelectItem value="32gb">32 جيجا</SelectItem>
                <SelectItem value="64gb">64 جيجا</SelectItem>
                <SelectItem value="other">أخرى</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="storage">التخزين</Label>
            <Input
              id="storage"
              placeholder="مثل SSD 512GB أو HDD 1TB"
              value={formData.storage}
              onChange={(e) => handleInputChange("storage", e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="operatingSystem">نظام التشغيل</Label>
            <Select onValueChange={(value) => handleInputChange("operatingSystem", value)}>
              <SelectTrigger>
                <SelectValue placeholder="اختر نظام التشغيل" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="windows11">Windows 11</SelectItem>
                <SelectItem value="windows10">Windows 10</SelectItem>
                <SelectItem value="macos">macOS</SelectItem>
                <SelectItem value="linux">Linux</SelectItem>
                <SelectItem value="none">بدون نظام</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="condition">الحالة</Label>
            <Select onValueChange={(value) => handleInputChange("condition", value)}>
              <SelectTrigger>
                <SelectValue placeholder="اختر حالة الحاسوب" />
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

      {/* القسم الثاني: مواصفات الشاشة والرسوميات */}
      <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/20 border-green-200 dark:border-green-800">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
          <h3 className="text-lg font-semibold text-green-700 dark:text-green-300">مواصفات الشاشة والرسوميات</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="screenSize">حجم الشاشة</Label>
            <Input
              id="screenSize"
              placeholder="حجم الشاشة بالبوصة"
              value={formData.screenSize}
              onChange={(e) => handleInputChange("screenSize", e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="screenResolution">دقة الشاشة</Label>
            <Select onValueChange={(value) => handleInputChange("screenResolution", value)}>
              <SelectTrigger>
                <SelectValue placeholder="اختر دقة الشاشة" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="hd">HD (1366x768)</SelectItem>
                <SelectItem value="fhd">Full HD (1920x1080)</SelectItem>
                <SelectItem value="2k">2K (2560x1440)</SelectItem>
                <SelectItem value="4k">4K (3840x2160)</SelectItem>
                <SelectItem value="other">أخرى</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="graphicsCard">كرت الرسوميات</Label>
            <Input
              id="graphicsCard"
              placeholder="نوع كرت الرسوميات"
              value={formData.graphicsCard}
              onChange={(e) => handleInputChange("graphicsCard", e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="graphicsMemory">ذاكرة الرسوميات</Label>
            <Input
              id="graphicsMemory"
              placeholder="حجم ذاكرة كرت الرسوميات"
              value={formData.graphicsMemory}
              onChange={(e) => handleInputChange("graphicsMemory", e.target.value)}
            />
          </div>
        </div>
      </Card>

      {/* القسم الثالث: المنافذ والاتصال */}
      <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/20 border-purple-200 dark:border-purple-800">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
          <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-300">المنافذ والاتصال</h3>
        </div>
        
        <div className="space-y-4">
          <div>
            <Label>المنافذ المتوفرة (اختر ما ينطبق):</Label>
            <div className="grid grid-cols-2 gap-4 mt-2">
              {[
                "USB 3.0",
                "USB 2.0",
                "USB-C",
                "HDMI",
                "VGA",
                "DisplayPort",
                "Ethernet",
                "Audio Jack"
              ].map((port) => (
                <div key={port} className="flex items-center space-x-2 space-x-reverse">
                  <Checkbox
                    id={port}
                    onCheckedChange={(checked) => 
                      handleCheckboxChange("ports", port, checked as boolean)
                    }
                  />
                  <Label htmlFor={port} className="text-sm">{port}</Label>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <Label>خيارات الاتصال (اختر ما ينطبق):</Label>
            <div className="grid grid-cols-2 gap-4 mt-2">
              {[
                "WiFi",
                "Bluetooth",
                "Ethernet",
                "5G",
                "4G LTE",
                "NFC"
              ].map((connectivity) => (
                <div key={connectivity} className="flex items-center space-x-2 space-x-reverse">
                  <Checkbox
                    id={connectivity}
                    onCheckedChange={(checked) => 
                      handleCheckboxChange("connectivity", connectivity, checked as boolean)
                    }
                  />
                  <Label htmlFor={connectivity} className="text-sm">{connectivity}</Label>
                </div>
              ))}
            </div>
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
              "الشاحن",
              "الفأرة",
              "لوحة المفاتيح",
              "الشاشة",
              "السماعات",
              "كاميرا ويب",
              "الحقيبة",
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
              placeholder="كم فترة استخدمت الحاسوب"
              value={formData.usagePeriod}
              onChange={(e) => handleInputChange("usagePeriod", e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="reason">سبب البيع</Label>
            <Input
              id="reason"
              placeholder="سبب بيع الحاسوب"
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

export default ComputerForm;
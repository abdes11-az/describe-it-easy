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

const PhoneForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    // القسم الأول: المعلومات الأساسية
    phoneName: "",
    color: "",
    condition: "",
    usageDuration: "",
    
    // القسم الثاني: التفاصيل التقنية
    storage: "",
    ram: "",
    screenType: "",
    operatingSystem: "",
    batteryCapacity: "",
    normalBatteryLife: "",
    gamingBatteryLife: "",
    iphoneBatteryPercentage: "",
    fingerprintWorks: "",
    waterResistant: "",
    networkCondition: "",
    
    // القسم الثالث: التعديلات
    modifications: "",
    
    // القسم الرابع: الملحقات
    originalBox: "",
    originalCharger: "",
    additionalAccessories: [] as string[],
    
    // القسم الخامس: معلومات البائع
    city: "",
    sellerType: "",
    deliveryMethod: "",
    price: "",
    negotiable: "",
    contactMethod: "",
    warranty: "",
    warrantyDuration: "",
    acceptExchange: "",
    reasonForSale: "",
    inspectionTimes: "",
    unwantedCustomers: [] as string[],
    additionalNotes: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/result", { state: { formData, category: "phones" } });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleMultiSelectChange = (field: string, value: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: checked 
        ? [...(prev[field as keyof typeof prev] as string[]), value]
        : (prev[field as keyof typeof prev] as string[]).filter(item => item !== value)
    }));
  };

  const accessoriesOptions = [
    "جراب", "واقي الشاشة", "سماعات", "كابل الشحن", "رأس الشاحن", 
    "شاحن لاسلكي", "باور بانك", "شاحن سيارة", "حامل هاتف", 
    "سماعة بلوتوث", "كارت ذاكرة", "أدوات تنظيف"
  ];

  const unwantedCustomersOptions = [
    "بدون وسطاء", "السعر نهائي", "جادين فقط", "لا للمبادلة", "استفسار واحد فقط"
  ];

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
            📱 هواتف
          </h2>
          <p className="text-sm text-muted">
            أدخل بيانات الهاتف لإنشاء الوصف
          </p>
        </div>
      </div>

      {/* Form */}
      <Card className="p-6">
        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* المعلومات الأساسية */}
          <Card className="p-6 border-l-4 border-l-primary/50 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-sm">1</span>
              </div>
              <h3 className="text-lg font-bold text-foreground">المعلومات الأساسية</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phoneName">اسم الهاتف</Label>
                <Input
                  id="phoneName"
                  value={formData.phoneName}
                  onChange={(e) => handleInputChange("phoneName", e.target.value)}
                  placeholder="مثال: iPhone 15 Pro Max"
                  className="text-right"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="color">اللون</Label>
                <Input
                  id="color"
                  value={formData.color}
                  onChange={(e) => handleInputChange("color", e.target.value)}
                  placeholder="مثال: أزرق، أسود، ذهبي"
                  className="text-right"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="condition">الحالة</Label>
                <Select value={formData.condition} onValueChange={(value) => handleInputChange("condition", value)}>
                  <SelectTrigger className="text-right">
                    <SelectValue placeholder="اختر الحالة" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="new">جديد</SelectItem>
                    <SelectItem value="used">مستعمل</SelectItem>
                    <SelectItem value="refurbished">مجدد</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="usageDuration">مدة الاستخدام</Label>
                <Input
                  id="usageDuration"
                  value={formData.usageDuration}
                  onChange={(e) => handleInputChange("usageDuration", e.target.value)}
                  placeholder="مثال: 6 أشهر، سنة واحدة"
                  className="text-right"
                />
              </div>
            </div>
          </Card>

          {/* التفاصيل التقنية */}
          <Card className="p-6 border-l-4 border-l-secondary/50 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center">
                <span className="text-secondary font-bold text-sm">2</span>
              </div>
              <h3 className="text-lg font-bold text-foreground">التفاصيل التقنية</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="storage">التخزين</Label>
                <Input
                  id="storage"
                  value={formData.storage}
                  onChange={(e) => handleInputChange("storage", e.target.value)}
                  placeholder="مثال: 128GB، 256GB، 512GB"
                  className="text-right"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="ram">الذاكرة العشوائية RAM</Label>
                <Input
                  id="ram"
                  value={formData.ram}
                  onChange={(e) => handleInputChange("ram", e.target.value)}
                  placeholder="مثال: 6GB، 8GB، 12GB"
                  className="text-right"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="screenType">نوع الشاشة</Label>
                <Select value={formData.screenType} onValueChange={(value) => handleInputChange("screenType", value)}>
                  <SelectTrigger className="text-right">
                    <SelectValue placeholder="اختر نوع الشاشة" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="oled">OLED</SelectItem>
                    <SelectItem value="amoled">AMOLED</SelectItem>
                    <SelectItem value="super-amoled">Super AMOLED</SelectItem>
                    <SelectItem value="lcd">LCD</SelectItem>
                    <SelectItem value="ips">IPS</SelectItem>
                    <SelectItem value="retina">Retina</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="operatingSystem">نظام التشغيل</Label>
                <Input
                  id="operatingSystem"
                  value={formData.operatingSystem}
                  onChange={(e) => handleInputChange("operatingSystem", e.target.value)}
                  placeholder="مثال: iOS 17، Android 14"
                  className="text-right"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="batteryCapacity">سعة البطارية</Label>
                <Input
                  id="batteryCapacity"
                  value={formData.batteryCapacity}
                  onChange={(e) => handleInputChange("batteryCapacity", e.target.value)}
                  placeholder="مثال: 4000mAh، 5000mAh"
                  className="text-right"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="normalBatteryLife">عمر البطارية العادي</Label>
                <Input
                  id="normalBatteryLife"
                  value={formData.normalBatteryLife}
                  onChange={(e) => handleInputChange("normalBatteryLife", e.target.value)}
                  placeholder="مثال: يوم كامل، 8 ساعات"
                  className="text-right"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="gamingBatteryLife">عمر البطارية في الألعاب</Label>
                <Input
                  id="gamingBatteryLife"
                  value={formData.gamingBatteryLife}
                  onChange={(e) => handleInputChange("gamingBatteryLife", e.target.value)}
                  placeholder="مثال: 4 ساعات، 6 ساعات"
                  className="text-right"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="iphoneBatteryPercentage">نسبة البطارية للآيفون</Label>
                <Input
                  id="iphoneBatteryPercentage"
                  value={formData.iphoneBatteryPercentage}
                  onChange={(e) => handleInputChange("iphoneBatteryPercentage", e.target.value)}
                  placeholder="مثال: 95%، 88%"
                  className="text-right"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="fingerprintWorks">بصمة الإصبع تعمل</Label>
                <Select value={formData.fingerprintWorks} onValueChange={(value) => handleInputChange("fingerprintWorks", value)}>
                  <SelectTrigger className="text-right">
                    <SelectValue placeholder="اختر الحالة" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">نعم</SelectItem>
                    <SelectItem value="no">لا</SelectItem>
                    <SelectItem value="none">لا يوجد</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="waterResistant">مقاوم للماء</Label>
                <Select value={formData.waterResistant} onValueChange={(value) => handleInputChange("waterResistant", value)}>
                  <SelectTrigger className="text-right">
                    <SelectValue placeholder="اختر الحالة" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">نعم</SelectItem>
                    <SelectItem value="no">لا</SelectItem>
                    <SelectItem value="partial">جزئياً</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="networkCondition">حالة الشبكة</Label>
                <Select value={formData.networkCondition} onValueChange={(value) => handleInputChange("networkCondition", value)}>
                  <SelectTrigger className="text-right">
                    <SelectValue placeholder="اختر حالة الشبكة" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="excellent">ممتازة</SelectItem>
                    <SelectItem value="good">جيدة</SelectItem>
                    <SelectItem value="weak">ضعيفة</SelectItem>
                    <SelectItem value="not-working">لا تعمل</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </Card>

          {/* التعديلات */}
          <Card className="p-6 border-l-4 border-l-accent/50 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                <span className="text-accent font-bold text-sm">3</span>
              </div>
              <h3 className="text-lg font-bold text-foreground">التعديلات</h3>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="modifications">التعديلات</Label>
              <Textarea
                id="modifications"
                value={formData.modifications}
                onChange={(e) => handleInputChange("modifications", e.target.value)}
                placeholder="اذكر أي تعديلات تم إجراؤها على الهاتف"
                rows={3}
                className="text-right resize-none"
              />
            </div>
          </Card>

          {/* الملحقات */}
          <Card className="p-6 border-l-4 border-l-destructive/50 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-destructive/10 rounded-full flex items-center justify-center">
                <span className="text-destructive font-bold text-sm">4</span>
              </div>
              <h3 className="text-lg font-bold text-foreground">الملحقات</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="originalBox">العلبة الأصلية</Label>
                <Select value={formData.originalBox} onValueChange={(value) => handleInputChange("originalBox", value)}>
                  <SelectTrigger className="text-right">
                    <SelectValue placeholder="اختر الحالة" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="available">متوفرة</SelectItem>
                    <SelectItem value="not-available">غير متوفرة</SelectItem>
                    <SelectItem value="damaged">تالفة</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="originalCharger">الشاحن الأصلي</Label>
                <Select value={formData.originalCharger} onValueChange={(value) => handleInputChange("originalCharger", value)}>
                  <SelectTrigger className="text-right">
                    <SelectValue placeholder="اختر الحالة" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="available">متوفر</SelectItem>
                    <SelectItem value="not-available">غير متوفر</SelectItem>
                    <SelectItem value="damaged">تالف</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label>ملحقات إضافية</Label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {accessoriesOptions.map((accessory) => (
                  <div key={accessory} className="flex items-center space-x-2 space-x-reverse">
                    <Checkbox
                      id={`accessory-${accessory}`}
                      checked={formData.additionalAccessories.includes(accessory)}
                      onCheckedChange={(checked) => 
                        handleMultiSelectChange("additionalAccessories", accessory, checked as boolean)
                      }
                    />
                    <Label htmlFor={`accessory-${accessory}`} className="text-sm">
                      {accessory}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* معلومات البائع */}
          <Card className="p-6 border-l-4 border-l-success/50 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-success/10 rounded-full flex items-center justify-center">
                <span className="text-success font-bold text-sm">5</span>
              </div>
              <h3 className="text-lg font-bold text-foreground">معلومات البائع</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="city">المدينة</Label>
                <Input
                  id="city"
                  value={formData.city}
                  onChange={(e) => handleInputChange("city", e.target.value)}
                  placeholder="مثال: الرياض، جدة، الدمام"
                  className="text-right"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="sellerType">نوع البائع</Label>
                <Select value={formData.sellerType} onValueChange={(value) => handleInputChange("sellerType", value)}>
                  <SelectTrigger className="text-right">
                    <SelectValue placeholder="اختر نوع البائع" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="person">شخص</SelectItem>
                    <SelectItem value="shop">محل</SelectItem>
                    <SelectItem value="company">شركة</SelectItem>
                    <SelectItem value="broker">وسيط</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="deliveryMethod">طريقة التوصيل</Label>
                <Select value={formData.deliveryMethod} onValueChange={(value) => handleInputChange("deliveryMethod", value)}>
                  <SelectTrigger className="text-right">
                    <SelectValue placeholder="اختر طريقة التوصيل" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pickup">استلام شخصي</SelectItem>
                    <SelectItem value="delivery">توصيل</SelectItem>
                    <SelectItem value="shipping">شحن</SelectItem>
                    <SelectItem value="both">كلاهما</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="price">السعر</Label>
                <Input
                  id="price"
                  value={formData.price}
                  onChange={(e) => handleInputChange("price", e.target.value)}
                  placeholder="مثال: 2500 ريال"
                  className="text-right"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="negotiable">قابل للتفاوض</Label>
                <Select value={formData.negotiable} onValueChange={(value) => handleInputChange("negotiable", value)}>
                  <SelectTrigger className="text-right">
                    <SelectValue placeholder="اختر الحالة" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">نعم</SelectItem>
                    <SelectItem value="no">لا</SelectItem>
                    <SelectItem value="reasonable">ضمن حدود معقولة</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="contactMethod">طريقة التواصل</Label>
                <Input
                  id="contactMethod"
                  value={formData.contactMethod}
                  onChange={(e) => handleInputChange("contactMethod", e.target.value)}
                  placeholder="مثال: واتساب، اتصال، رسائل"
                  className="text-right"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="warranty">الضمان</Label>
                <Select value={formData.warranty} onValueChange={(value) => handleInputChange("warranty", value)}>
                  <SelectTrigger className="text-right">
                    <SelectValue placeholder="اختر حالة الضمان" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="available">متوفر</SelectItem>
                    <SelectItem value="not-available">غير متوفر</SelectItem>
                    <SelectItem value="expired">منتهي</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {formData.warranty === "available" && (
                <div className="space-y-2">
                  <Label htmlFor="warrantyDuration">مدة الضمان</Label>
                  <Input
                    id="warrantyDuration"
                    value={formData.warrantyDuration}
                    onChange={(e) => handleInputChange("warrantyDuration", e.target.value)}
                    placeholder="مثال: 6 أشهر، سنة واحدة"
                    className="text-right"
                  />
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="acceptExchange">قبول التبادل</Label>
                <Select value={formData.acceptExchange} onValueChange={(value) => handleInputChange("acceptExchange", value)}>
                  <SelectTrigger className="text-right">
                    <SelectValue placeholder="اختر الحالة" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">نعم</SelectItem>
                    <SelectItem value="no">لا</SelectItem>
                    <SelectItem value="depends">حسب النوع</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="reasonForSale">سبب البيع</Label>
                <Input
                  id="reasonForSale"
                  value={formData.reasonForSale}
                  onChange={(e) => handleInputChange("reasonForSale", e.target.value)}
                  placeholder="مثال: ترقية لهاتف أحدث"
                  className="text-right"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="inspectionTimes">أوقات المعاينة</Label>
                <Input
                  id="inspectionTimes"
                  value={formData.inspectionTimes}
                  onChange={(e) => handleInputChange("inspectionTimes", e.target.value)}
                  placeholder="مثال: في أي وقت، أوقات العمل فقط"
                  className="text-right"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>العملاء غير المرغوبين</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {unwantedCustomersOptions.map((option) => (
                  <div key={option} className="flex items-center space-x-2 space-x-reverse">
                    <Checkbox
                      id={`unwanted-${option}`}
                      checked={formData.unwantedCustomers.includes(option)}
                      onCheckedChange={(checked) => 
                        handleMultiSelectChange("unwantedCustomers", option, checked as boolean)
                      }
                    />
                    <Label htmlFor={`unwanted-${option}`} className="text-sm">
                      {option}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="additionalNotes">ملاحظات إضافية</Label>
              <Textarea
                id="additionalNotes"
                value={formData.additionalNotes}
                onChange={(e) => handleInputChange("additionalNotes", e.target.value)}
                placeholder="أضف أي ملاحظات إضافية هنا"
                rows={4}
                className="text-right resize-none"
              />
            </div>
          </Card>

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

export default PhoneForm;
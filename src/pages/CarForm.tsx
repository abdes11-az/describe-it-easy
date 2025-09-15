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

const CarForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    // القسم الأول: المعلومات الأساسية
    city: "",
    brand: "",
    model: "",
    year: "",
    fuelType: "",
    enginePower: "",
    transmission: "",
    fuelConsumption: "",
    doors: "",
    condition: "",
    
    // القسم الثاني: تفاصيل الاستخدام
    firstUse: "",
    allServicesAvailable: "",
    firstUseInCountry: "",
    kilometers: "",
    color: "",
    accident: "",
    painting: "",
    
    // القسم الثالث: التعديلات
    modifications: "",
    
    // القسم الرابع: التفاصيل التقنية
    engineType: "",
    steering: "",
    airbags: "",
    airConditioning: "",
    
    // القسم الخامس: حالة السيارة
    wheelsType: "",
    glassType: "",
    interiorType: "",
    speakersType: "",
    
    // القسم السادس: العملاء غير المرغوبين
    unwantedCustomers: "",
    
    // القسم السابع: التجهيزات الإضافية
    features: [] as string[],
    
    // القسم الثامن: معلومات المالك
    ownerType: "",
    usageDuration: "",
    ownershipType: "",
    papersReady: "",
    taxAmount: "",
    insuranceAmount: "",
    phone: "",
    price: "",
    negotiable: "",
    reasonForSale: "",
    viewingTimes: "",
    additionalNotes: ""
  });

  const carBrands = [
    "داسيا — Dacia", "رونو — Renault", "هيونداي — Hyundai", "بيجو — Peugeot",
    "فولكس فاغن — Volkswagen", "تويوتا — Toyota", "كيا — Kia", "سيتروين — Citroën",
    "فيات — Fiat", "فورد — Ford", "أوبل — Opel", "سكودا — Skoda",
    "نيسان — Nissan", "شيفروليه — Chevrolet", "مرسيدس — Mercedes-Benz", "بي إم دبليو — BMW",
    "أودي — Audi", "لاند روفر — Land Rover", "جيب — Jeep", "فولفو — Volvo",
    "بورشه — Porsche", "جاجوار — Jaguar", "تسلا — Tesla", "بي واي دي — BYD",
    "إم جي — MG", "هافال — Great Wall / Haval", "جيلي — Geely", "نيو موتورز — Neo Motors"
  ];

  const carFeatures = [
    "CD/MP3/Bluetooth 🎵", "رادار خلفي 📡", "كاميرا خلفية 📷", "نظام الملاحة GPS 🗺️",
    "مقاعد جلدية 🪑", "تكييف ❄️", "مثبت السرعة ⚡", "فتحة سقف ☀️",
    "أضواء ضباب 💡", "عجلات الألمنيوم ⚙️", "نوافذ كهربائية 🔌", "قفل مركزي 🔒",
    "نظام إنذار 🚨", "حساسات الركن 📶", "مقاعد مدفأة 🔥", "دخول بدون مفتاح 🗝️"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/result", { state: { formData, category: "cars" } });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFeatureChange = (feature: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      features: checked 
        ? [...prev.features, feature]
        : prev.features.filter(f => f !== feature)
    }));
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
            🚗 سيارات
          </h2>
          <p className="text-sm text-muted">
            أدخل بيانات السيارة لإنشاء الوصف
          </p>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* المعلومات الأساسية */}
        <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/20 border-blue-200 dark:border-blue-800">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
            <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-300">المعلومات الأساسية</h3>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="city">المدينة</Label>
              <Input
                id="city"
                value={formData.city}
                onChange={(e) => handleInputChange("city", e.target.value)}
                placeholder="أدخل المدينة"
                className="text-right"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="brand">نوع السيارة</Label>
              <Select value={formData.brand} onValueChange={(value) => handleInputChange("brand", value)}>
                <SelectTrigger className="text-right">
                  <SelectValue placeholder="اختر نوع السيارة" />
                </SelectTrigger>
                <SelectContent>
                  {carBrands.map((brand) => (
                    <SelectItem key={brand} value={brand}>{brand}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="model">الموديل</Label>
              <Input
                id="model"
                value={formData.model}
                onChange={(e) => handleInputChange("model", e.target.value)}
                placeholder="أدخل الموديل"
                className="text-right"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="year">سنة الصنع</Label>
                <Input
                  id="year"
                  value={formData.year}
                  onChange={(e) => handleInputChange("year", e.target.value)}
                  placeholder="2024"
                  className="text-right"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="fuelType">نوع الوقود</Label>
                <Input
                  id="fuelType"
                  value={formData.fuelType}
                  onChange={(e) => handleInputChange("fuelType", e.target.value)}
                  placeholder="بنزين، ديزل، هجين"
                  className="text-right"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="enginePower">قوة المحرك</Label>
              <Input
                id="enginePower"
                value={formData.enginePower}
                onChange={(e) => handleInputChange("enginePower", e.target.value)}
                placeholder="1.6L، 2.0L"
                className="text-right"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="transmission">ناقل الحركة</Label>
              <Select value={formData.transmission} onValueChange={(value) => handleInputChange("transmission", value)}>
                <SelectTrigger className="text-right">
                  <SelectValue placeholder="اختر ناقل الحركة" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="manual">يدوي</SelectItem>
                  <SelectItem value="automatic">اتوماتيكي</SelectItem>
                  <SelectItem value="cvt">CVT</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fuelConsumption">استهلاك الوقود</Label>
                <Input
                  id="fuelConsumption"
                  value={formData.fuelConsumption}
                  onChange={(e) => handleInputChange("fuelConsumption", e.target.value)}
                  placeholder="6L/100km"
                  className="text-right"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="doors">عدد الأبواب</Label>
                <Select value={formData.doors} onValueChange={(value) => handleInputChange("doors", value)}>
                  <SelectTrigger className="text-right">
                    <SelectValue placeholder="عدد الأبواب" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2">2 أبواب</SelectItem>
                    <SelectItem value="3">3 أبواب</SelectItem>
                    <SelectItem value="4">4 أبواب</SelectItem>
                    <SelectItem value="5">5 أبواب</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="condition">حالة السيارة</Label>
              <Input
                id="condition"
                value={formData.condition}
                onChange={(e) => handleInputChange("condition", e.target.value)}
                placeholder="ممتازة، جيدة، متوسطة"
                className="text-right"
              />
            </div>
          </div>
        </Card>

        {/* تفاصيل الاستخدام */}
        <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/20 border-green-200 dark:border-green-800">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
            <h3 className="text-lg font-semibold text-green-700 dark:text-green-300">تفاصيل الاستخدام</h3>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>الاستخدام الأول</Label>
                <Select value={formData.firstUse} onValueChange={(value) => handleInputChange("firstUse", value)}>
                  <SelectTrigger className="text-right">
                    <SelectValue placeholder="اختر" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">نعم</SelectItem>
                    <SelectItem value="no">لا</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>جميع الخدمات متوفرة</Label>
                <Select value={formData.allServicesAvailable} onValueChange={(value) => handleInputChange("allServicesAvailable", value)}>
                  <SelectTrigger className="text-right">
                    <SelectValue placeholder="اختر" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">نعم</SelectItem>
                    <SelectItem value="no">لا</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="firstUseInCountry">الاستخدام الأول في البلد</Label>
              <Input
                id="firstUseInCountry"
                value={formData.firstUseInCountry}
                onChange={(e) => handleInputChange("firstUseInCountry", e.target.value)}
                placeholder="تاريخ الاستخدام الأول"
                className="text-right"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="kilometers">عدد الكيلومترات</Label>
                <Input
                  id="kilometers"
                  value={formData.kilometers}
                  onChange={(e) => handleInputChange("kilometers", e.target.value)}
                  placeholder="50,000 كم"
                  className="text-right"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="color">اللون</Label>
                <Input
                  id="color"
                  value={formData.color}
                  onChange={(e) => handleInputChange("color", e.target.value)}
                  placeholder="أبيض، أسود، فضي"
                  className="text-right"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>تعرضت لحادث</Label>
                <Select value={formData.accident} onValueChange={(value) => handleInputChange("accident", value)}>
                  <SelectTrigger className="text-right">
                    <SelectValue placeholder="اختر" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="no">لا</SelectItem>
                    <SelectItem value="yes">نعم</SelectItem>
                    <SelectItem value="minor">حادث بسيط</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>الصباغة أصلية</Label>
                <Select value={formData.painting} onValueChange={(value) => handleInputChange("painting", value)}>
                  <SelectTrigger className="text-right">
                    <SelectValue placeholder="اختر" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="original">أصلية بالكامل</SelectItem>
                    <SelectItem value="partial">صباغة جزئية</SelectItem>
                    <SelectItem value="full">صباغة كاملة</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </Card>

        {/* التعديلات */}
        <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/20 border-purple-200 dark:border-purple-800">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
            <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-300">التعديلات</h3>
          </div>
          <div className="space-y-2">
            <Label htmlFor="modifications">التعديلات</Label>
            <Textarea
              id="modifications"
              value={formData.modifications}
              onChange={(e) => handleInputChange("modifications", e.target.value)}
              placeholder="اذكر أي تعديلات أو تحسينات تم إجراؤها"
              rows={3}
              className="text-right resize-none"
            />
          </div>
        </Card>

        {/* التفاصيل التقنية */}
        <Card className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/30 dark:to-orange-900/20 border-orange-200 dark:border-orange-800">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
            <h3 className="text-lg font-semibold text-orange-700 dark:text-orange-300">التفاصيل التقنية</h3>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="engineType">نوع المحرك</Label>
                <Input
                  id="engineType"
                  value={formData.engineType}
                  onChange={(e) => handleInputChange("engineType", e.target.value)}
                  placeholder="تفاصيل المحرك"
                  className="text-right"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="steering">المقود</Label>
                <Input
                  id="steering"
                  value={formData.steering}
                  onChange={(e) => handleInputChange("steering", e.target.value)}
                  placeholder="نوع المقود"
                  className="text-right"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>الوسائد الهوائية</Label>
                <Select value={formData.airbags} onValueChange={(value) => handleInputChange("airbags", value)}>
                  <SelectTrigger className="text-right">
                    <SelectValue placeholder="اختر" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="available">متوفرة</SelectItem>
                    <SelectItem value="partial">جزئية</SelectItem>
                    <SelectItem value="not_available">غير متوفرة</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>التكييف</Label>
                <Select value={formData.airConditioning} onValueChange={(value) => handleInputChange("airConditioning", value)}>
                  <SelectTrigger className="text-right">
                    <SelectValue placeholder="اختر" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="efficient">يعمل بكفاءة</SelectItem>
                    <SelectItem value="needs_maintenance">يحتاج صيانة</SelectItem>
                    <SelectItem value="not_working">لا يعمل</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </Card>

        {/* حالة السيارة */}
        <Card className="p-6 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950/30 dark:to-red-900/20 border-red-200 dark:border-red-800">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">5</div>
            <h3 className="text-lg font-semibold text-red-700 dark:text-red-300">حالة السيارة</h3>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="wheelsType">نوع العجلات</Label>
                <Input
                  id="wheelsType"
                  value={formData.wheelsType}
                  onChange={(e) => handleInputChange("wheelsType", e.target.value)}
                  placeholder="ألمنيوم، حديد"
                  className="text-right"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="glassType">نوع الزجاج</Label>
                <Input
                  id="glassType"
                  value={formData.glassType}
                  onChange={(e) => handleInputChange("glassType", e.target.value)}
                  placeholder="أصلي، مُغيَّر"
                  className="text-right"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="interiorType">نوع الصالون</Label>
                <Input
                  id="interiorType"
                  value={formData.interiorType}
                  onChange={(e) => handleInputChange("interiorType", e.target.value)}
                  placeholder="جلد، قماش"
                  className="text-right"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="speakersType">نوع السماعات</Label>
                <Input
                  id="speakersType"
                  value={formData.speakersType}
                  onChange={(e) => handleInputChange("speakersType", e.target.value)}
                  placeholder="أصلية، مُحسَّنة"
                  className="text-right"
                />
              </div>
            </div>
          </div>
        </Card>

        {/* العملاء غير المرغوبين */}
        <Card className="p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-950/30 dark:to-yellow-900/20 border-yellow-200 dark:border-yellow-800">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-bold">6</div>
            <h3 className="text-lg font-semibold text-yellow-700 dark:text-yellow-300">العملاء غير المرغوبين</h3>
          </div>
          <div className="space-y-2">
            <Label htmlFor="unwantedCustomers">العملاء غير المرغوبين</Label>
            <Textarea
              id="unwantedCustomers"
              value={formData.unwantedCustomers}
              onChange={(e) => handleInputChange("unwantedCustomers", e.target.value)}
              placeholder="حدد نوع العملاء غير المرغوب فيهم"
              rows={2}
              className="text-right resize-none"
            />
          </div>
        </Card>

        {/* التجهيزات الإضافية */}
        <Card className="p-6 bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-950/30 dark:to-emerald-900/20 border-emerald-200 dark:border-emerald-800">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold">7</div>
            <h3 className="text-lg font-semibold text-emerald-700 dark:text-emerald-300">التجهيزات الإضافية</h3>
          </div>
          <div className="grid grid-cols-1 gap-3">
            {carFeatures.map((feature) => (
              <div key={feature} className="flex items-center space-x-2 space-x-reverse">
                <Checkbox
                  id={feature}
                  checked={formData.features.includes(feature)}
                  onCheckedChange={(checked) => handleFeatureChange(feature, checked as boolean)}
                />
                <Label htmlFor={feature} className="text-sm">{feature}</Label>
              </div>
            ))}
          </div>
        </Card>

        {/* معلومات المالك */}
        <Card className="p-6 bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-950/30 dark:to-indigo-900/20 border-indigo-200 dark:border-indigo-800">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center text-sm font-bold">8</div>
            <h3 className="text-lg font-semibold text-indigo-700 dark:text-indigo-300">معلومات المالك</h3>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>نوع المالك</Label>
                <Select value={formData.ownerType} onValueChange={(value) => handleInputChange("ownerType", value)}>
                  <SelectTrigger className="text-right">
                    <SelectValue placeholder="اختر" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="man">رجل</SelectItem>
                    <SelectItem value="woman">امرأة</SelectItem>
                    <SelectItem value="broker">وسيط</SelectItem>
                    <SelectItem value="dealer">بائع السيارات</SelectItem>
                    <SelectItem value="company">شركة</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="usageDuration">مدة الاستخدام</Label>
                <Input
                  id="usageDuration"
                  value={formData.usageDuration}
                  onChange={(e) => handleInputChange("usageDuration", e.target.value)}
                  placeholder="3 سنوات"
                  className="text-right"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="ownershipType">نوع الملكية</Label>
                <Input
                  id="ownershipType"
                  value={formData.ownershipType}
                  onChange={(e) => handleInputChange("ownershipType", e.target.value)}
                  placeholder="شخصية، تجارية"
                  className="text-right"
                />
              </div>

              <div className="space-y-2">
                <Label>الأوراق جاهزة</Label>
                <Select value={formData.papersReady} onValueChange={(value) => handleInputChange("papersReady", value)}>
                  <SelectTrigger className="text-right">
                    <SelectValue placeholder="اختر" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">نعم</SelectItem>
                    <SelectItem value="no">لا</SelectItem>
                    <SelectItem value="partial">جزئياً</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="taxAmount">مبلغ الضريبة</Label>
                <Input
                  id="taxAmount"
                  value={formData.taxAmount}
                  onChange={(e) => handleInputChange("taxAmount", e.target.value)}
                  placeholder="أدخل مبلغ الضريبة"
                  className="text-right"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="insuranceAmount">مبلغ التأمين</Label>
                <Input
                  id="insuranceAmount"
                  value={formData.insuranceAmount}
                  onChange={(e) => handleInputChange("insuranceAmount", e.target.value)}
                  placeholder="أدخل مبلغ التأمين"
                  className="text-right"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">رقم الهاتف</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="أدخل رقم الهاتف"
                  className="text-right"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="price">السعر</Label>
                <Input
                  id="price"
                  value={formData.price}
                  onChange={(e) => handleInputChange("price", e.target.value)}
                  placeholder="أدخل السعر"
                  className="text-right"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>قابل للتفاوض</Label>
                <Select value={formData.negotiable} onValueChange={(value) => handleInputChange("negotiable", value)}>
                  <SelectTrigger className="text-right">
                    <SelectValue placeholder="اختر" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">نعم</SelectItem>
                    <SelectItem value="no">لا</SelectItem>
                    <SelectItem value="reasonable">ضمن حدود معقولة</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>أوقات المعاينة</Label>
                <Select value={formData.viewingTimes} onValueChange={(value) => handleInputChange("viewingTimes", value)}>
                  <SelectTrigger className="text-right">
                    <SelectValue placeholder="اختر" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="anytime">في أي وقت</SelectItem>
                    <SelectItem value="work_hours">أوقات العمل فقط</SelectItem>
                    <SelectItem value="weekends">عطلة نهاية الأسبوع</SelectItem>
                    <SelectItem value="appointment">بالاتفاق المسبق</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="reasonForSale">سبب البيع</Label>
              <Input
                id="reasonForSale"
                value={formData.reasonForSale}
                onChange={(e) => handleInputChange("reasonForSale", e.target.value)}
                placeholder="تغيير السيارة، السفر، إلخ"
                className="text-right"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="additionalNotes">ملاحظات إضافية</Label>
              <Textarea
                id="additionalNotes"
                value={formData.additionalNotes}
                onChange={(e) => handleInputChange("additionalNotes", e.target.value)}
                placeholder="أي معلومات إضافية مهمة"
                rows={4}
                className="text-right resize-none"
              />
            </div>
          </div>
        </Card>

        <Button 
          type="submit" 
          className="w-full h-12 text-base font-medium"
        >
          إنشاء الوصف
        </Button>
      </form>
    </div>
  );
};

export default CarForm;
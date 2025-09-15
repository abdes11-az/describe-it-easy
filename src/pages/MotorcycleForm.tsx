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

const MotorcycleForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    // القسم الأول: المعلومات الأساسية
    city: "",
    brand: "",
    model: "",
    year: "",
    engineSize: "",
    engineType: "",
    fuelType: "",
    transmission: "",
    condition: "",
    
    // القسم الثاني: تفاصيل الاستخدام والحالة
    kilometers: "",
    owners: "",
    accidents: "",
    maintenance: "",
    serviceHistory: "",
    color: "",
    
    // القسم الثالث: المواصفات التقنية
    maxSpeed: "",
    fuelConsumption: "",
    enginePower: "",
    torque: "",
    cooling: "",
    starter: "",
    
    // القسم الرابع: التجهيزات والإضافات
    features: [],
    
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/result", { state: { formData, category: "motorcycles" } });
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
            بيانات الدراجة النارية
          </h2>
          <p className="text-sm text-muted">
            أدخل تفاصيل الدراجة النارية لإنشاء وصف شامل
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
                <SelectItem value="honda">Honda</SelectItem>
                <SelectItem value="yamaha">Yamaha</SelectItem>
                <SelectItem value="suzuki">Suzuki</SelectItem>
                <SelectItem value="kawasaki">Kawasaki</SelectItem>
                <SelectItem value="ducati">Ducati</SelectItem>
                <SelectItem value="bmw">BMW</SelectItem>
                <SelectItem value="ktm">KTM</SelectItem>
                <SelectItem value="harley">Harley Davidson</SelectItem>
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
            <Label htmlFor="year">سنة الصنع</Label>
            <Input
              id="year"
              placeholder="سنة الصنع"
              value={formData.year}
              onChange={(e) => handleInputChange("year", e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="engineSize">حجم المحرك</Label>
            <Select onValueChange={(value) => handleInputChange("engineSize", value)}>
              <SelectTrigger>
                <SelectValue placeholder="اختر حجم المحرك" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="50cc">50cc</SelectItem>
                <SelectItem value="125cc">125cc</SelectItem>
                <SelectItem value="150cc">150cc</SelectItem>
                <SelectItem value="200cc">200cc</SelectItem>
                <SelectItem value="250cc">250cc</SelectItem>
                <SelectItem value="300cc">300cc</SelectItem>
                <SelectItem value="400cc">400cc</SelectItem>
                <SelectItem value="500cc">500cc</SelectItem>
                <SelectItem value="600cc">600cc</SelectItem>
                <SelectItem value="750cc">750cc</SelectItem>
                <SelectItem value="1000cc">1000cc+</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="engineType">نوع المحرك</Label>
            <Select onValueChange={(value) => handleInputChange("engineType", value)}>
              <SelectTrigger>
                <SelectValue placeholder="اختر نوع المحرك" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="single">أحادي الأسطوانة</SelectItem>
                <SelectItem value="twin">ثنائي الأسطوانة</SelectItem>
                <SelectItem value="triple">ثلاثي الأسطوانة</SelectItem>
                <SelectItem value="four">رباعي الأسطوانة</SelectItem>
                <SelectItem value="v-twin">V-Twin</SelectItem>
                <SelectItem value="other">آخر</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="fuelType">نوع الوقود</Label>
            <Select onValueChange={(value) => handleInputChange("fuelType", value)}>
              <SelectTrigger>
                <SelectValue placeholder="اختر نوع الوقود" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="gasoline">بنزين</SelectItem>
                <SelectItem value="electric">كهربائي</SelectItem>
                <SelectItem value="hybrid">هجين</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="transmission">ناقل الحركة</Label>
            <Select onValueChange={(value) => handleInputChange("transmission", value)}>
              <SelectTrigger>
                <SelectValue placeholder="اختر ناقل الحركة" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="manual">يدوي</SelectItem>
                <SelectItem value="automatic">أوتوماتيك</SelectItem>
                <SelectItem value="cvt">CVT</SelectItem>
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

      {/* القسم الثاني: تفاصيل الاستخدام والحالة */}
      <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/20 border-green-200 dark:border-green-800">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
          <h3 className="text-lg font-semibold text-green-700 dark:text-green-300">تفاصيل الاستخدام والحالة</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="kilometers">الكيلومترات</Label>
            <Input
              id="kilometers"
              placeholder="عدد الكيلومترات المقطوعة"
              value={formData.kilometers}
              onChange={(e) => handleInputChange("kilometers", e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="owners">عدد المالكين</Label>
            <Select onValueChange={(value) => handleInputChange("owners", value)}>
              <SelectTrigger>
                <SelectValue placeholder="عدد المالكين السابقين" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="first">المالك الأول</SelectItem>
                <SelectItem value="second">المالك الثاني</SelectItem>
                <SelectItem value="third">المالك الثالث</SelectItem>
                <SelectItem value="more">أكثر من ثلاثة</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="accidents">الحوادث</Label>
            <Select onValueChange={(value) => handleInputChange("accidents", value)}>
              <SelectTrigger>
                <SelectValue placeholder="هل تعرضت لحوادث؟" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="no">لا يوجد</SelectItem>
                <SelectItem value="minor">حادث بسيط</SelectItem>
                <SelectItem value="major">حادث كبير</SelectItem>
                <SelectItem value="multiple">عدة حوادث</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="maintenance">حالة الصيانة</Label>
            <Select onValueChange={(value) => handleInputChange("maintenance", value)}>
              <SelectTrigger>
                <SelectValue placeholder="اختر حالة الصيانة" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="excellent">ممتاز</SelectItem>
                <SelectItem value="good">جيد</SelectItem>
                <SelectItem value="needs-service">تحتاج صيانة</SelectItem>
                <SelectItem value="major-repair">تحتاج إصلاح كبير</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="serviceHistory">تاريخ الخدمة</Label>
            <Input
              id="serviceHistory"
              placeholder="آخر صيانة أو خدمة"
              value={formData.serviceHistory}
              onChange={(e) => handleInputChange("serviceHistory", e.target.value)}
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

      {/* القسم الثالث: المواصفات التقنية */}
      <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/20 border-purple-200 dark:border-purple-800">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
          <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-300">المواصفات التقنية</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="maxSpeed">السرعة القصوى</Label>
            <Input
              id="maxSpeed"
              placeholder="السرعة القصوى كم/س"
              value={formData.maxSpeed}
              onChange={(e) => handleInputChange("maxSpeed", e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="fuelConsumption">استهلاك الوقود</Label>
            <Input
              id="fuelConsumption"
              placeholder="استهلاك الوقود لتر/100كم"
              value={formData.fuelConsumption}
              onChange={(e) => handleInputChange("fuelConsumption", e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="enginePower">قوة المحرك</Label>
            <Input
              id="enginePower"
              placeholder="قوة المحرك بالحصان"
              value={formData.enginePower}
              onChange={(e) => handleInputChange("enginePower", e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="torque">عزم الدوران</Label>
            <Input
              id="torque"
              placeholder="عزم الدوران نيوتن.متر"
              value={formData.torque}
              onChange={(e) => handleInputChange("torque", e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="cooling">نظام التبريد</Label>
            <Select onValueChange={(value) => handleInputChange("cooling", value)}>
              <SelectTrigger>
                <SelectValue placeholder="اختر نظام التبريد" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="air">تبريد هوائي</SelectItem>
                <SelectItem value="liquid">تبريد مائي</SelectItem>
                <SelectItem value="oil">تبريد زيتي</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="starter">نظام التشغيل</Label>
            <Select onValueChange={(value) => handleInputChange("starter", value)}>
              <SelectTrigger>
                <SelectValue placeholder="اختر نظام التشغيل" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="electric">كهربائي</SelectItem>
                <SelectItem value="kick">كيك</SelectItem>
                <SelectItem value="both">كهربائي + كيك</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </Card>

      {/* القسم الرابع: التجهيزات والإضافات */}
      <Card className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/30 dark:to-orange-900/20 border-orange-200 dark:border-orange-800">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
          <h3 className="text-lg font-semibold text-orange-700 dark:text-orange-300">التجهيزات والإضافات</h3>
        </div>
        
        <div className="space-y-4">
          <Label>التجهيزات المتوفرة (اختر ما ينطبق):</Label>
          <div className="grid grid-cols-2 gap-4">
            {[
              "نظام ABS",
              "نظام الجر",
              "شاشة رقمية",
              "إضاءة LED",
              "نظام تنبيه",
              "حامل الأغراض",
              "واقي الرياح",
              "مقعد مريح",
              "عجلات سبائكية",
              "نظام أمان",
              "بوق قوي",
              "مرايا جانبية"
            ].map((feature) => (
              <div key={feature} className="flex items-center space-x-2 space-x-reverse">
                <Checkbox
                  id={feature}
                  onCheckedChange={(checked) => 
                    handleCheckboxChange("features", feature, checked as boolean)
                  }
                />
                <Label htmlFor={feature} className="text-sm">{feature}</Label>
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
              placeholder="سبب بيع الدراجة النارية"
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

export default MotorcycleForm;
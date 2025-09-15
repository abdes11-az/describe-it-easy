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

const ClothesForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    // القسم الأول: المعلومات الأساسية
    city: "",
    category: "",
    brand: "",
    type: "",
    size: "",
    color: "",
    material: "",
    condition: "",
    
    // القسم الثاني: التفاصيل والمواصفات
    season: "",
    style: "",
    pattern: "",
    occasion: "",
    fit: "",
    sleeves: "",
    length: "",
    
    // القسم الثالث: الميزات الإضافية
    features: [],
    
    // القسم الرابع: تفاصيل إضافية
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
    const description = `${formData.type} ${formData.brand} - مقاس ${formData.size}
المدينة: ${formData.city}
الفئة: ${formData.category}
الماركة: ${formData.brand}
النوع: ${formData.type}
المقاس: ${formData.size}
اللون: ${formData.color}
المادة: ${formData.material}
الحالة: ${formData.condition}
الموسم: ${formData.season}
الستايل: ${formData.style}
النقشة: ${formData.pattern}
المناسبة: ${formData.occasion}
القَصة: ${formData.fit}
الأكمام: ${formData.sleeves}
الطول: ${formData.length}
الميزات: ${formData.features.join(", ")}
فترة الاستخدام: ${formData.usagePeriod}
سبب البيع: ${formData.reason}
السعر: ${formData.price}
ملاحظات إضافية: ${formData.notes}`;

    navigate("/result", { 
      state: { 
        description,
        category: "ملابس"
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
            بيانات الملابس
          </h2>
          <p className="text-sm text-muted">
            أدخل تفاصيل قطعة الملابس لإنشاء وصف شامل
          </p>
        </div>
      </div>

      {/* القسم الأول: المعلومات الأساسية */}
      <Card className="p-6 bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-950/30 dark:to-pink-900/20 border-pink-200 dark:border-pink-800">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
          <h3 className="text-lg font-semibold text-pink-700 dark:text-pink-300">المعلومات الأساسية</h3>
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
            <Label htmlFor="category">فئة الملابس</Label>
            <Select onValueChange={(value) => handleInputChange("category", value)}>
              <SelectTrigger>
                <SelectValue placeholder="اختر الفئة" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="men">رجالي</SelectItem>
                <SelectItem value="women">نسائي</SelectItem>
                <SelectItem value="kids">أطفال</SelectItem>
                <SelectItem value="unisex">للجنسين</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="brand">الماركة</Label>
            <Input
              id="brand"
              placeholder="ماركة الملابس"
              value={formData.brand}
              onChange={(e) => handleInputChange("brand", e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="type">نوع القطعة</Label>
            <Select onValueChange={(value) => handleInputChange("type", value)}>
              <SelectTrigger>
                <SelectValue placeholder="اختر نوع القطعة" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="shirt">قميص</SelectItem>
                <SelectItem value="tshirt">تيشيرت</SelectItem>
                <SelectItem value="dress">فستان</SelectItem>
                <SelectItem value="pants">بنطلون</SelectItem>
                <SelectItem value="jeans">جينز</SelectItem>
                <SelectItem value="jacket">جاكيت</SelectItem>
                <SelectItem value="coat">معطف</SelectItem>
                <SelectItem value="hoodie">هودي</SelectItem>
                <SelectItem value="sweater">سويتر</SelectItem>
                <SelectItem value="skirt">تنورة</SelectItem>
                <SelectItem value="shorts">شورت</SelectItem>
                <SelectItem value="suit">بدلة</SelectItem>
                <SelectItem value="other">أخرى</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="size">المقاس</Label>
            <Select onValueChange={(value) => handleInputChange("size", value)}>
              <SelectTrigger>
                <SelectValue placeholder="اختر المقاس" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="xs">XS</SelectItem>
                <SelectItem value="s">S</SelectItem>
                <SelectItem value="m">M</SelectItem>
                <SelectItem value="l">L</SelectItem>
                <SelectItem value="xl">XL</SelectItem>
                <SelectItem value="xxl">XXL</SelectItem>
                <SelectItem value="xxxl">XXXL</SelectItem>
                <SelectItem value="custom">مقاس خاص</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="color">اللون</Label>
            <Input
              id="color"
              placeholder="لون القطعة"
              value={formData.color}
              onChange={(e) => handleInputChange("color", e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="material">المادة</Label>
            <Select onValueChange={(value) => handleInputChange("material", value)}>
              <SelectTrigger>
                <SelectValue placeholder="اختر المادة" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cotton">قطن</SelectItem>
                <SelectItem value="polyester">بوليستر</SelectItem>
                <SelectItem value="wool">صوف</SelectItem>
                <SelectItem value="silk">حرير</SelectItem>
                <SelectItem value="linen">كتان</SelectItem>
                <SelectItem value="denim">دنيم</SelectItem>
                <SelectItem value="leather">جلد</SelectItem>
                <SelectItem value="mixed">مخلوط</SelectItem>
                <SelectItem value="other">أخرى</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="condition">الحالة</Label>
            <Select onValueChange={(value) => handleInputChange("condition", value)}>
              <SelectTrigger>
                <SelectValue placeholder="اختر حالة القطعة" />
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

      {/* القسم الثاني: التفاصيل والمواصفات */}
      <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/20 border-purple-200 dark:border-purple-800">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
          <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-300">التفاصيل والمواصفات</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="season">الموسم</Label>
            <Select onValueChange={(value) => handleInputChange("season", value)}>
              <SelectTrigger>
                <SelectValue placeholder="اختر الموسم المناسب" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="spring">ربيعي</SelectItem>
                <SelectItem value="summer">صيفي</SelectItem>
                <SelectItem value="autumn">خريفي</SelectItem>
                <SelectItem value="winter">شتوي</SelectItem>
                <SelectItem value="all-seasons">جميع الفصول</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="style">الستايل</Label>
            <Select onValueChange={(value) => handleInputChange("style", value)}>
              <SelectTrigger>
                <SelectValue placeholder="اختر الستايل" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="casual">كاجوال</SelectItem>
                <SelectItem value="formal">رسمي</SelectItem>
                <SelectItem value="sport">رياضي</SelectItem>
                <SelectItem value="elegant">أنيق</SelectItem>
                <SelectItem value="vintage">فينتج</SelectItem>
                <SelectItem value="modern">عصري</SelectItem>
                <SelectItem value="classic">كلاسيكي</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="pattern">النقشة</Label>
            <Select onValueChange={(value) => handleInputChange("pattern", value)}>
              <SelectTrigger>
                <SelectValue placeholder="اختر النقشة" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="solid">لون واحد</SelectItem>
                <SelectItem value="stripes">مخطط</SelectItem>
                <SelectItem value="floral">ورود</SelectItem>
                <SelectItem value="geometric">هندسي</SelectItem>
                <SelectItem value="abstract">مجرد</SelectItem>
                <SelectItem value="printed">مطبوع</SelectItem>
                <SelectItem value="other">أخرى</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="occasion">المناسبة</Label>
            <Select onValueChange={(value) => handleInputChange("occasion", value)}>
              <SelectTrigger>
                <SelectValue placeholder="اختر المناسبة" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="daily">يومي</SelectItem>
                <SelectItem value="work">عمل</SelectItem>
                <SelectItem value="party">حفلات</SelectItem>
                <SelectItem value="wedding">أفراح</SelectItem>
                <SelectItem value="sport">رياضة</SelectItem>
                <SelectItem value="travel">سفر</SelectItem>
                <SelectItem value="home">منزل</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="fit">القَصة</Label>
            <Select onValueChange={(value) => handleInputChange("fit", value)}>
              <SelectTrigger>
                <SelectValue placeholder="اختر القَصة" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="slim">ضيق</SelectItem>
                <SelectItem value="regular">عادي</SelectItem>
                <SelectItem value="loose">واسع</SelectItem>
                <SelectItem value="oversized">أوفرسايز</SelectItem>
                <SelectItem value="fitted">مفصل</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="sleeves">الأكمام</Label>
            <Select onValueChange={(value) => handleInputChange("sleeves", value)}>
              <SelectTrigger>
                <SelectValue placeholder="اختر نوع الأكمام" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sleeveless">بدون أكمام</SelectItem>
                <SelectItem value="short">كم قصير</SelectItem>
                <SelectItem value="long">كم طويل</SelectItem>
                <SelectItem value="three-quarter">ثلاثة أرباع</SelectItem>
                <SelectItem value="half">نصف كم</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="length">الطول</Label>
            <Select onValueChange={(value) => handleInputChange("length", value)}>
              <SelectTrigger>
                <SelectValue placeholder="اختر الطول" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="short">قصير</SelectItem>
                <SelectItem value="medium">متوسط</SelectItem>
                <SelectItem value="long">طويل</SelectItem>
                <SelectItem value="maxi">ماكسي</SelectItem>
                <SelectItem value="mini">ميني</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </Card>

      {/* القسم الثالث: الميزات الإضافية */}
      <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/20 border-green-200 dark:border-green-800">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
          <h3 className="text-lg font-semibold text-green-700 dark:text-green-300">الميزات الإضافية</h3>
        </div>
        
        <div className="space-y-4">
          <Label>الميزات المتوفرة (اختر ما ينطبق):</Label>
          <div className="grid grid-cols-2 gap-4">
            {[
              "مقاوم للماء",
              "مقاوم للبقع",
              "سهل الكي",
              "قطن عضوي",
              "مضاد للبكتيريا",
              "جيوب متعددة",
              "سحاب",
              "أزرار",
              "حزام",
              "غطاء للرأس",
              "بطانة داخلية",
              "تصميم عاكس"
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
              placeholder="كم فترة استخدمت القطعة"
              value={formData.usagePeriod}
              onChange={(e) => handleInputChange("usagePeriod", e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="reason">سبب البيع</Label>
            <Input
              id="reason"
              placeholder="سبب بيع القطعة"
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

export default ClothesForm;
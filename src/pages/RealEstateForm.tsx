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

const RealEstateForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    // القسم الأول: الغرض من العقار
    purpose: "",

    // القسم الثاني: المعلومات الأساسية
    propertyType: "",
    city: "",
    neighborhood: "",
    area: "",
    floors: "",
    currentFloor: "",
    clientType: "",

    // القسم الثالث: توزيع الغرف
    bedrooms: "",
    livingRooms: "",
    bathrooms: "",
    kitchens: "",
    hasBalcony: "",
    hasRoof: "",

    // القسم الرابع: المرافق والخدمات
    hasElevator: "",
    hasParking: "",
    furnished: "",
    nearbyServices: [] as string[],

    // القسم الخامس: السعر والتواصل
    price: "",
    negotiable: "",
    readyToMove: "",
    contactMethod: "",
    viewingTimes: "",
    unwantedClients: [] as string[],
    sellReason: "",

    // القسم السادس: معلومات المنطقة
    neighborhoodType: "",
    neighborsNature: "",
    noiseLevel: "",
    securityLevel: "",
    additionalNotes: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/result", { state: { formData, category: "real-estate" } });
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
          <h2 className="text-xl font-bold text-foreground">🏠 العقارات</h2>
          <p className="text-sm text-muted">أدخل بيانات العقار لإنشاء الوصف</p>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
          {/* الغرض من العقار */}
          <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/20 border-blue-200 dark:border-blue-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
              <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-300">الغرض من العقار</h3>
            </div>
            
            <div className="space-y-2">
              <Label className="text-sm font-medium">الغرض</Label>
              <Select value={formData.purpose} onValueChange={(value) => handleInputChange("purpose", value)}>
                <SelectTrigger className="text-right">
                  <SelectValue placeholder="اختر الغرض من العقار" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="للبيع">للبيع</SelectItem>
                  <SelectItem value="للإيجار">للإيجار</SelectItem>
                  <SelectItem value="للاستثمار">للاستثمار</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </Card>

          {/* المعلومات الأساسية */}
          <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/20 border-green-200 dark:border-green-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
              <h3 className="text-lg font-semibold text-green-700 dark:text-green-300">المعلومات الأساسية</h3>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium">نوع العقار</Label>
                <Select value={formData.propertyType} onValueChange={(value) => handleInputChange("propertyType", value)}>
                  <SelectTrigger className="text-right">
                    <SelectValue placeholder="اختر نوع العقار" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="شقة">شقة</SelectItem>
                    <SelectItem value="فيلا">فيلا</SelectItem>
                    <SelectItem value="دور">دور</SelectItem>
                    <SelectItem value="استوديو">استوديو</SelectItem>
                    <SelectItem value="مكتب">مكتب</SelectItem>
                    <SelectItem value="محل تجاري">محل تجاري</SelectItem>
                    <SelectItem value="مستودع">مستودع</SelectItem>
                    <SelectItem value="أرض">أرض</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium">المدينة</Label>
                <Input
                  value={formData.city}
                  onChange={(e) => handleInputChange("city", e.target.value)}
                  placeholder="أدخل المدينة"
                  className="text-right"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium">الحي</Label>
                <Input
                  value={formData.neighborhood}
                  onChange={(e) => handleInputChange("neighborhood", e.target.value)}
                  placeholder="أدخل اسم الحي"
                  className="text-right"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium">المساحة</Label>
                <Input
                  value={formData.area}
                  onChange={(e) => handleInputChange("area", e.target.value)}
                  placeholder="أدخل المساحة (مثل: 120 متر مربع)"
                  className="text-right"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium">عدد الطوابق</Label>
                <Input
                  value={formData.floors}
                  onChange={(e) => handleInputChange("floors", e.target.value)}
                  placeholder="أدخل عدد الطوابق"
                  className="text-right"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium">الطابق الحالي</Label>
                <Input
                  value={formData.currentFloor}
                  onChange={(e) => handleInputChange("currentFloor", e.target.value)}
                  placeholder="أدخل رقم الطابق"
                  className="text-right"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium">نوع الزبون</Label>
                <Input
                  value={formData.clientType}
                  onChange={(e) => handleInputChange("clientType", e.target.value)}
                  placeholder="أدخل نوع الزبون المطلوب"
                  className="text-right"
                />
              </div>
            </div>
          </Card>

          {/* توزيع الغرف */}
          <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/20 border-purple-200 dark:border-purple-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
              <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-300">توزيع الغرف</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium">غرف النوم</Label>
                <Input
                  value={formData.bedrooms}
                  onChange={(e) => handleInputChange("bedrooms", e.target.value)}
                  placeholder="عدد غرف النوم"
                  className="text-right"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium">غرف المعيشة</Label>
                <Input
                  value={formData.livingRooms}
                  onChange={(e) => handleInputChange("livingRooms", e.target.value)}
                  placeholder="عدد غرف المعيشة"
                  className="text-right"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium">دورات المياه</Label>
                <Input
                  value={formData.bathrooms}
                  onChange={(e) => handleInputChange("bathrooms", e.target.value)}
                  placeholder="عدد دورات المياه"
                  className="text-right"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium">المطابخ</Label>
                <Input
                  value={formData.kitchens}
                  onChange={(e) => handleInputChange("kitchens", e.target.value)}
                  placeholder="عدد المطابخ"
                  className="text-right"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium">وجود شرفة</Label>
                <Select value={formData.hasBalcony} onValueChange={(value) => handleInputChange("hasBalcony", value)}>
                  <SelectTrigger className="text-right">
                    <SelectValue placeholder="اختر" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="نعم">نعم</SelectItem>
                    <SelectItem value="لا">لا</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium">وجود سطح</Label>
                <Select value={formData.hasRoof} onValueChange={(value) => handleInputChange("hasRoof", value)}>
                  <SelectTrigger className="text-right">
                    <SelectValue placeholder="اختر" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="نعم">نعم</SelectItem>
                    <SelectItem value="لا">لا</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </Card>

          {/* المرافق والخدمات */}
          <Card className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/30 dark:to-orange-900/20 border-orange-200 dark:border-orange-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
              <h3 className="text-lg font-semibold text-orange-700 dark:text-orange-300">المرافق والخدمات</h3>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium">وجود مصعد</Label>
                <Select value={formData.hasElevator} onValueChange={(value) => handleInputChange("hasElevator", value)}>
                  <SelectTrigger className="text-right">
                    <SelectValue placeholder="اختر" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="نعم">نعم</SelectItem>
                    <SelectItem value="لا">لا</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium">وجود موقف سيارات</Label>
                <Select value={formData.hasParking} onValueChange={(value) => handleInputChange("hasParking", value)}>
                  <SelectTrigger className="text-right">
                    <SelectValue placeholder="اختر" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="نعم">نعم</SelectItem>
                    <SelectItem value="لا">لا</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium">مفروش</Label>
                <Select value={formData.furnished} onValueChange={(value) => handleInputChange("furnished", value)}>
                  <SelectTrigger className="text-right">
                    <SelectValue placeholder="اختر" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="نعم">نعم</SelectItem>
                    <SelectItem value="لا">لا</SelectItem>
                    <SelectItem value="جزئياً">جزئياً</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <Label className="text-sm font-medium">الخدمات القريبة</Label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "مدارس", "مستشفيات", "مراكز تسوق", "مواصلات عامة", 
                    "مساجد", "حدائق", "مطاعم", "صيدليات", 
                    "بنوك", "محطات وقود", "صالات رياضية", "مقاهي"
                  ].map((service) => (
                    <div key={service} className="flex items-center space-x-2 space-x-reverse">
                      <Checkbox
                        id={service}
                        checked={formData.nearbyServices.includes(service)}
                        onCheckedChange={(checked) => 
                          handleMultiSelectChange("nearbyServices", service, checked as boolean)
                        }
                      />
                      <Label htmlFor={service} className="text-sm">{service}</Label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* السعر والتواصل */}
          <Card className="p-6 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950/30 dark:to-red-900/20 border-red-200 dark:border-red-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">5</div>
              <h3 className="text-lg font-semibold text-red-700 dark:text-red-300">السعر والتواصل</h3>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium">💵 السعر</Label>
                <Input
                  value={formData.price}
                  onChange={(e) => handleInputChange("price", e.target.value)}
                  placeholder="أدخل السعر"
                  className="text-right"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium">قابل للتفاوض</Label>
                <Select value={formData.negotiable} onValueChange={(value) => handleInputChange("negotiable", value)}>
                  <SelectTrigger className="text-right">
                    <SelectValue placeholder="اختر" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="نعم">نعم</SelectItem>
                    <SelectItem value="لا">لا</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium">جاهز للانتقال</Label>
                <Select value={formData.readyToMove} onValueChange={(value) => handleInputChange("readyToMove", value)}>
                  <SelectTrigger className="text-right">
                    <SelectValue placeholder="اختر" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="نعم">نعم</SelectItem>
                    <SelectItem value="لا">لا</SelectItem>
                    <SelectItem value="بعد فترة">بعد فترة</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium">طريقة التواصل</Label>
                <Input
                  value={formData.contactMethod}
                  onChange={(e) => handleInputChange("contactMethod", e.target.value)}
                  placeholder="أدخل طريقة التواصل المفضلة"
                  className="text-right"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium">أوقات المعاينة</Label>
                <Input
                  value={formData.viewingTimes}
                  onChange={(e) => handleInputChange("viewingTimes", e.target.value)}
                  placeholder="أدخل أوقات المعاينة المناسبة"
                  className="text-right"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium">سبب البيع</Label>
                <Input
                  value={formData.sellReason}
                  onChange={(e) => handleInputChange("sellReason", e.target.value)}
                  placeholder="أدخل سبب البيع أو الإيجار"
                  className="text-right"
                />
              </div>
            </div>
          </Card>

          {/* معلومات المنطقة */}
          <Card className="p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-950/30 dark:to-yellow-900/20 border-yellow-200 dark:border-yellow-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-bold">6</div>
              <h3 className="text-lg font-semibold text-yellow-700 dark:text-yellow-300">معلومات المنطقة</h3>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium">نوع الحي</Label>
                <Input
                  value={formData.neighborhoodType}
                  onChange={(e) => handleInputChange("neighborhoodType", e.target.value)}
                  placeholder="صف نوع الحي (شعبي، راقي، متوسط، إلخ)"
                  className="text-right"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium">طبيعة الجيران</Label>
                <Input
                  value={formData.neighborsNature}
                  onChange={(e) => handleInputChange("neighborsNature", e.target.value)}
                  placeholder="صف طبيعة الجيران"
                  className="text-right"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium">مستوى الضوضاء</Label>
                <Input
                  value={formData.noiseLevel}
                  onChange={(e) => handleInputChange("noiseLevel", e.target.value)}
                  placeholder="صف مستوى الضوضاء في المنطقة"
                  className="text-right"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium">مستوى الأمان</Label>
                <Input
                  value={formData.securityLevel}
                  onChange={(e) => handleInputChange("securityLevel", e.target.value)}
                  placeholder="صف مستوى الأمان في المنطقة"
                  className="text-right"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium">ملاحظات إضافية</Label>
                <Textarea
                  value={formData.additionalNotes}
                  onChange={(e) => handleInputChange("additionalNotes", e.target.value)}
                  placeholder="أدخل أي ملاحظات إضافية حول العقار"
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

export default RealEstateForm;
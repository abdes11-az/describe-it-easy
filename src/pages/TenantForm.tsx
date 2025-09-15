import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const TenantForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    // القسم الأول: القسم العام
    usageType: "",
    tenantType: "",
    rentalDuration: "",

    // القسم الثاني: القسم السكني
    numberOfResidents: "",
    hasChildren: "",
    numberOfChildren: "",
    hasFurniture: "",
    hasPets: "",
    contractSigning: "",
    paymentMethod: "",

    // القسم الثالث: القسم التجاري
    businessType: "",
    numberOfEmployees: "",
    businessContractSigning: "",

    // القسم الرابع: طريقة التواصل
    contactMethod: "",
    additionalNotes: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/result", { state: { formData, category: "tenant" } });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
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
          <h2 className="text-xl font-bold text-foreground">📋 ملف المستأجر</h2>
          <p className="text-sm text-muted">أدخل بيانات المستأجر لإنشاء الوصف</p>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
          {/* القسم العام */}
          <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/20 border-blue-200 dark:border-blue-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
              <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-300">القسم العام</h3>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium">نوع الاستخدام</Label>
                <Select value={formData.usageType} onValueChange={(value) => handleInputChange("usageType", value)}>
                  <SelectTrigger className="text-right">
                    <SelectValue placeholder="اختر نوع الاستخدام" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="سكني">سكني</SelectItem>
                    <SelectItem value="تجاري">تجاري</SelectItem>
                    <SelectItem value="مكتبي">مكتبي</SelectItem>
                    <SelectItem value="مختلط">مختلط</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium">نوع المستأجر</Label>
                <Select value={formData.tenantType} onValueChange={(value) => handleInputChange("tenantType", value)}>
                  <SelectTrigger className="text-right">
                    <SelectValue placeholder="اختر نوع المستأجر" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="عائلة">عائلة</SelectItem>
                    <SelectItem value="أعزب">أعزب</SelectItem>
                    <SelectItem value="طلاب">طلاب</SelectItem>
                    <SelectItem value="موظفين">موظفين</SelectItem>
                    <SelectItem value="شركة">شركة</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium">مدة الإيجار</Label>
                <Select value={formData.rentalDuration} onValueChange={(value) => handleInputChange("rentalDuration", value)}>
                  <SelectTrigger className="text-right">
                    <SelectValue placeholder="اختر مدة الإيجار" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="شهر واحد">شهر واحد</SelectItem>
                    <SelectItem value="شهرين">شهرين</SelectItem>
                    <SelectItem value="ثلاثة أشهر">ثلاثة أشهر</SelectItem>
                    <SelectItem value="ستة أشهر">ستة أشهر</SelectItem>
                    <SelectItem value="سنة واحدة">سنة واحدة</SelectItem>
                    <SelectItem value="سنتان">سنتان</SelectItem>
                    <SelectItem value="ثلاث سنوات">ثلاث سنوات</SelectItem>
                    <SelectItem value="طويلة المدى">طويلة المدى</SelectItem>
                    <SelectItem value="قصيرة المدى">قصيرة المدى</SelectItem>
                    <SelectItem value="شهري">شهري</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </Card>

          {/* القسم السكني */}
          <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/20 border-green-200 dark:border-green-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
              <h3 className="text-lg font-semibold text-green-700 dark:text-green-300">القسم السكني</h3>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium">عدد السكان</Label>
                <Input
                  value={formData.numberOfResidents}
                  onChange={(e) => handleInputChange("numberOfResidents", e.target.value)}
                  placeholder="أدخل عدد السكان"
                  className="text-right"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium">وجود أطفال</Label>
                <Select value={formData.hasChildren} onValueChange={(value) => handleInputChange("hasChildren", value)}>
                  <SelectTrigger className="text-right">
                    <SelectValue placeholder="اختر" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="نعم">نعم</SelectItem>
                    <SelectItem value="لا">لا</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {formData.hasChildren === "نعم" && (
                <div className="space-y-2">
                  <Label className="text-sm font-medium">عدد الأطفال</Label>
                  <Input
                    type="number"
                    value={formData.numberOfChildren}
                    onChange={(e) => handleInputChange("numberOfChildren", e.target.value)}
                    placeholder="أدخل عدد الأطفال"
                    className="text-right"
                  />
                </div>
              )}

              <div className="space-y-2">
                <Label className="text-sm font-medium">وجود أثاث</Label>
                <Select value={formData.hasFurniture} onValueChange={(value) => handleInputChange("hasFurniture", value)}>
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

              <div className="space-y-2">
                <Label className="text-sm font-medium">وجود حيوانات أليفة</Label>
                <Select value={formData.hasPets} onValueChange={(value) => handleInputChange("hasPets", value)}>
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
                <Label className="text-sm font-medium">توقيع العقد</Label>
                <Select value={formData.contractSigning} onValueChange={(value) => handleInputChange("contractSigning", value)}>
                  <SelectTrigger className="text-right">
                    <SelectValue placeholder="اختر" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="نعم">نعم</SelectItem>
                    <SelectItem value="لا">لا</SelectItem>
                    <SelectItem value="حسب رغبة صاحب الملك">حسب رغبة صاحب الملك</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium">طريقة الدفع</Label>
                <Select value={formData.paymentMethod} onValueChange={(value) => handleInputChange("paymentMethod", value)}>
                  <SelectTrigger className="text-right">
                    <SelectValue placeholder="اختر طريقة الدفع" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="شهري">شهري</SelectItem>
                    <SelectItem value="ربع سنوي">ربع سنوي</SelectItem>
                    <SelectItem value="نصف سنوي">نصف سنوي</SelectItem>
                    <SelectItem value="سنوي">سنوي</SelectItem>
                    <SelectItem value="مقدماً">مقدماً</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </Card>

          {/* القسم التجاري */}
          <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/20 border-purple-200 dark:border-purple-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
              <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-300">القسم التجاري</h3>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium">نوع النشاط التجاري</Label>
                <Input
                  value={formData.businessType}
                  onChange={(e) => handleInputChange("businessType", e.target.value)}
                  placeholder="أدخل نوع النشاط التجاري"
                  className="text-right"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium">عدد الموظفين</Label>
                <Input
                  value={formData.numberOfEmployees}
                  onChange={(e) => handleInputChange("numberOfEmployees", e.target.value)}
                  placeholder="أدخل عدد الموظفين"
                  className="text-right"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium">توقيع العقد التجاري</Label>
                <Select value={formData.businessContractSigning} onValueChange={(value) => handleInputChange("businessContractSigning", value)}>
                  <SelectTrigger className="text-right">
                    <SelectValue placeholder="اختر" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="نعم">نعم</SelectItem>
                    <SelectItem value="لا">لا</SelectItem>
                    <SelectItem value="حسب رغبة صاحب الملك">حسب رغبة صاحب الملك</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </Card>

          {/* طريقة التواصل */}
          <Card className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/30 dark:to-orange-900/20 border-orange-200 dark:border-orange-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
              <h3 className="text-lg font-semibold text-orange-700 dark:text-orange-300">طريقة التواصل</h3>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
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
                <Label className="text-sm font-medium">ملاحظات إضافية</Label>
                <Textarea
                  value={formData.additionalNotes}
                  onChange={(e) => handleInputChange("additionalNotes", e.target.value)}
                  placeholder="أدخل أي ملاحظات إضافية"
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

export default TenantForm;
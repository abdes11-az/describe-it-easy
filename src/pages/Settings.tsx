import { Settings as SettingsIcon, Globe, Info } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const Settings = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center py-6">
        <SettingsIcon className="h-12 w-12 text-primary mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-foreground mb-2">
          الإعدادات
        </h2>
        <p className="text-muted">
          تخصيص تجربة الاستخدام
        </p>
      </div>

      {/* Settings Categories */}
      <div className="space-y-4">
        {/* Language Settings */}
        <Card className="p-5">
          <div className="flex items-center gap-4">
            <Globe className="h-6 w-6 text-primary" />
            <div className="flex-1">
              <h3 className="font-semibold text-foreground">اللغة</h3>
              <p className="text-sm text-muted">اختر لغة التطبيق</p>
            </div>
            <div className="text-sm text-muted">العربية</div>
          </div>
        </Card>

        {/* Notifications Settings */}
        <Card className="p-5">
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">الإشعارات</h3>
            
            <div className="flex items-center justify-between">
              <Label htmlFor="push-notifications" className="text-sm">
                الإشعارات الفورية
              </Label>
              <Switch id="push-notifications" />
            </div>
            
            <div className="flex items-center justify-between">
              <Label htmlFor="email-notifications" className="text-sm">
                إشعارات البريد الإلكتروني
              </Label>
              <Switch id="email-notifications" />
            </div>
          </div>
        </Card>

        {/* App Settings */}
        <Card className="p-5">
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">إعدادات التطبيق</h3>
            
            <div className="flex items-center justify-between">
              <Label htmlFor="auto-save" className="text-sm">
                الحفظ التلقائي
              </Label>
              <Switch id="auto-save" defaultChecked />
            </div>
            
            <div className="flex items-center justify-between">
              <Label htmlFor="copy-confirmation" className="text-sm">
                تأكيد النسخ
              </Label>
              <Switch id="copy-confirmation" defaultChecked />
            </div>
          </div>
        </Card>

        {/* About */}
        <Card className="p-5">
          <div className="flex items-center gap-4">
            <Info className="h-6 w-6 text-primary" />
            <div className="flex-1">
              <h3 className="font-semibold text-foreground">حول التطبيق</h3>
              <p className="text-sm text-muted">الإصدار 1.0.0</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Settings;
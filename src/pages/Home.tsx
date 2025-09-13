import { useNavigate } from "react-router-dom";
import ServiceCard from "@/components/ui/service-card";
import { Card } from "@/components/ui/card";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="text-center py-6">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          مرحباً بك
        </h2>
        <p className="text-muted leading-relaxed">
          اختر الخدمة التي تريدها من القائمة أدناه
        </p>
      </div>

      {/* Services Grid */}
      <div className="space-y-4">
        <ServiceCard
          title="إنشاء الوصف"
          description="قم بإنشاء وصف مفصل ومحترف لمنتجك"
          icon="📝"
          onClick={() => navigate("/create")}
        />
        
        <ServiceCard
          title="الكتابة الحرة"
          description="اكتب وحرر النصوص بحرية مع إمكانية الحفظ والنسخ"
          icon="✍️"
        />
        
        <ServiceCard
          title="بنك الأسئلة"
          description="استعرض الأسئلة الشائعة حسب الفئة"
          icon="❓"
        />
      </div>

      {/* Tip Card */}
      <Card className="p-5 bg-surface border border-border/50">
        <h3 className="font-semibold text-foreground mb-2">نصيحة</h3>
        <p className="text-sm text-muted leading-relaxed">
          استخدم خدمة إنشاء الوصف للحصول على أوصاف احترافية ومقنعة لمنتجاتك
        </p>
      </Card>
    </div>
  );
};

export default Home;
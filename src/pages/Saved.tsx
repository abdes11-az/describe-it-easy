import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const Saved = () => {
  // Mock saved items
  const savedItems = [
    {
      id: 1,
      name: "iPhone 15 Pro Max",
      category: "هواتف",
      date: "٢٠٢٤/٠٩/١٣",
      preview: "iPhone 15 Pro Max المميز بمواصفات عالية الجودة..."
    },
    {
      id: 2,
      name: "تويوتا كامري 2024",
      category: "سيارات", 
      date: "٢٠٢٤/٠٩/١٢",
      preview: "تويوتا كامري 2024 بتصميم أنيق وأداء متفوق..."
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center py-6">
        <Star className="h-12 w-12 text-primary mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-foreground mb-2">
          المحفوظات
        </h2>
        <p className="text-muted">
          جميع الأوصاف التي قمت بحفظها
        </p>
      </div>

      {/* Saved Items */}
      {savedItems.length > 0 ? (
        <div className="space-y-4">
          {savedItems.map((item) => (
            <Card key={item.id} className="p-5">
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1 text-right">
                    <h3 className="font-semibold text-foreground">
                      {item.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-muted">{item.date}</span>
                      <span className="text-xs px-2 py-1 bg-accent rounded-full text-muted">
                        {item.category}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-sm text-muted leading-relaxed line-clamp-2">
                  {item.preview}
                </p>
                
                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    عرض
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    نسخ
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    حذف
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
            <Star className="h-8 w-8 text-muted" />
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            لا توجد عناصر محفوظة
          </h3>
          <p className="text-muted mb-6">
            ابدأ بإنشاء أوصاف واحفظ المفيد منها هنا
          </p>
          <Button onClick={() => window.location.href = "/create"}>
            إنشاء وصف جديد
          </Button>
        </div>
      )}
    </div>
  );
};

export default Saved;
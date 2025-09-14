import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Eye, Copy, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Saved = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [savedItems, setSavedItems] = useState<any[]>([]);

  // Load saved items from localStorage on component mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('savedDescriptions');
      if (saved) {
        setSavedItems(JSON.parse(saved));
      }
    } catch (error) {
      console.error('Error loading saved items:', error);
    }
  }, []);

  const handleDelete = (itemId: string) => {
    try {
      const updatedItems = savedItems.filter(item => item.id !== itemId);
      setSavedItems(updatedItems);
      localStorage.setItem('savedDescriptions', JSON.stringify(updatedItems));
      
      toast({
        title: "تم الحذف",
        description: "تم حذف الوصف من المحفوظات",
      });
    } catch (error) {
      toast({
        title: "خطأ",
        description: "فشل في حذف الوصف",
        variant: "destructive",
      });
    }
  };

  const handleView = (item: any) => {
    // Navigate to result page with saved data
    navigate("/result", { 
      state: { 
        formData: item.formData, 
        category: item.categoryType,
        savedDescription: item.description
      } 
    });
  };

  const handleCopy = async (description: string) => {
    try {
      await navigator.clipboard.writeText(description);
      toast({
        title: "تم النسخ",
        description: "تم نسخ الوصف بنجاح",
      });
    } catch (error) {
      toast({
        title: "خطأ",
        description: "فشل في نسخ الوصف",
        variant: "destructive",
      });
    }
  };

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
                
                <p className="text-sm text-muted leading-relaxed line-clamp-3">
                  {item.description?.substring(0, 150)}...
                </p>
                
                <div className="flex gap-2 pt-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 flex items-center gap-2"
                    onClick={() => handleView(item)}
                  >
                    <Eye className="h-4 w-4" />
                    عرض
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 flex items-center gap-2"
                    onClick={() => handleCopy(item.description)}
                  >
                    <Copy className="h-4 w-4" />
                    نسخ
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 flex items-center gap-2 text-destructive hover:text-destructive"
                    onClick={() => handleDelete(item.id)}
                  >
                    <Trash2 className="h-4 w-4" />
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
          <Button onClick={() => navigate("/create")}>
            إنشاء وصف جديد
          </Button>
        </div>
      )}
    </div>
  );
};

export default Saved;
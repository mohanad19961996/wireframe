import { useLanguage } from "./LanguageContext";
import { Button } from "./ui/button";
import { CheckCircle, Star, Users, TrendingUp, ArrowRight, Clock, Gift } from "lucide-react";

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  backgroundColor?: string;
  variant?: 'default' | 'gradient' | 'accent';
  children?: React.ReactNode;
}

export default function Section({ 
  id, 
  title, 
  subtitle,
  backgroundColor = "bg-background", 
  variant = 'default',
  children 
}: SectionProps) {
  const { language, isRTL } = useLanguage();
  const getBackgroundClass = () => {
    switch (variant) {
      case 'gradient':
        return 'bg-gradient-to-br from-background via-muted/30 to-accent/20';
      case 'accent':
        return 'bg-gradient-to-tr from-accent/10 to-secondary/20';
      default:
        return backgroundColor;
    }
  };

  return (
    <section id={id} className={`py-16 px-4 sm:px-6 lg:px-8 ${getBackgroundClass()} relative overflow-hidden`}>
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-48 h-48 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-gradient-to-tr from-secondary/5 to-muted/5 rounded-full blur-2xl"></div>
      </div>
      
      <div className="max-w-5xl mx-auto relative">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl mb-4">
            <div className="w-6 h-6 bg-gradient-to-br from-primary to-primary/70 rounded-md"></div>
          </div>
          
          <h2 className="text-3xl font-medium text-foreground mb-3 tracking-tight">
            {title}
          </h2>
          
          {subtitle && (
            <p className="text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
          
          <div className="flex items-center justify-center mt-6">
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
            <div className="mx-3 w-1.5 h-1.5 bg-primary/30 rounded-full"></div>
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
          </div>
        </div>
        
        {children || renderDefaultContent(id, language)}
      </div>
    </section>
  );
}

function renderDefaultContent(sectionId: string, language: string) {
  switch (sectionId) {
    case 'hero':
      return (
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[500px]">
          <div className="space-y-8">
            {/* Limited time offer */}
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-4 border border-primary/20 inline-block">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">
                  {language === 'ar' ? 'عرض محدود: 48 ساعة فقط!' : 'Limited Offer: Only 48 Hours!'}
                </span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg">
                {language === 'ar' ? 'احصل على موقعك الآن' : 'Get Your Website Now'}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/5">
                {language === 'ar' ? 'شاهد أعمالنا' : 'View Our Work'}
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-1">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full border-2 border-background"></div>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground ml-2">
                  {language === 'ar' ? '+200 عميل راضي' : '+200 Happy Clients'}
                </span>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="text-sm font-medium">4.9/5</span>
              </div>
            </div>
          </div>
          
          {/* Hero visual */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-muted to-muted/70 rounded-2xl relative overflow-hidden">
              <div className="absolute inset-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-primary/30 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-16 h-16 text-primary/60" />
                </div>
              </div>
              <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-accent to-accent/70 rounded-lg flex items-center justify-center">
                <Gift className="w-6 h-6 text-accent-foreground" />
              </div>
            </div>
          </div>
        </div>
      );
      
    case 'problem':
      return (
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Problem points */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Users, title: language === 'ar' ? 'فقدان العملاء' : 'Losing Customers', desc: language === 'ar' ? '70% من العملاء يتركون المواقع غير الاحترافية' : '70% of customers leave unprofessional websites' },
              { icon: TrendingUp, title: language === 'ar' ? 'ضعف المبيعات' : 'Poor Sales', desc: language === 'ar' ? 'المواقع السيئة تقلل المبيعات بنسبة 85%' : 'Bad websites reduce sales by 85%' },
              { icon: Clock, title: language === 'ar' ? 'وقت ضائع' : 'Wasted Time', desc: language === 'ar' ? 'كل يوم تأخير يكلفك آلاف الدولارات' : 'Every day of delay costs you thousands' }
            ].map((problem, index) => (
              <div key={index} className="bg-gradient-to-br from-destructive/5 to-destructive/10 rounded-xl p-6 border border-destructive/10 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-destructive/20 to-destructive/30 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <problem.icon className="w-6 h-6 text-destructive/60" />
                </div>
                <h4 className="font-medium text-destructive mb-2">{problem.title}</h4>
                <p className="text-sm text-muted-foreground">{problem.desc}</p>
              </div>
            ))}
          </div>
          
          {/* Cost visualization */}
          <div className="bg-gradient-to-r from-destructive/10 to-destructive/5 rounded-2xl p-8 border border-destructive/15 text-center">
            <h4 className="text-xl font-medium text-destructive mb-4">
              {language === 'ar' ? 'التكلفة الحقيقية للتأخير' : 'The Real Cost of Delay'}
            </h4>
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-2xl font-bold text-destructive">$50K+</div>
                <div className="text-sm text-muted-foreground">{language === 'ar' ? 'خسائر سنوية' : 'Annual Losses'}</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-destructive">70%</div>
                <div className="text-sm text-muted-foreground">{language === 'ar' ? 'عملاء مفقودين' : 'Lost Customers'}</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-destructive">85%</div>
                <div className="text-sm text-muted-foreground">{language === 'ar' ? 'انخفاض المبيعات' : 'Sales Drop'}</div>
              </div>
            </div>
          </div>
        </div>
      );
      
    case 'features':
      return (
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h4 className="text-xl font-medium text-primary">
                {language === 'ar' ? 'حلول متكاملة لنجاحك' : 'Complete Solutions for Your Success'}
              </h4>
              <div className="space-y-4">
                {[
                  language === 'ar' ? 'تصميم احترافي يجذب العملاء' : 'Professional design that attracts customers',
                  language === 'ar' ? 'تحسين محركات البحث (SEO)' : 'Search Engine Optimization (SEO)',
                  language === 'ar' ? 'تجربة مستخدم مثالية' : 'Perfect user experience',
                  language === 'ar' ? 'سرعة تحميل فائقة' : 'Lightning-fast loading speed'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-muted to-muted/70 rounded-2xl relative overflow-hidden">
                <div className="absolute inset-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl">
                  <div className="absolute inset-6 grid grid-cols-2 gap-4">
                    <div className="bg-primary/20 rounded-lg"></div>
                    <div className="bg-accent/30 rounded-lg"></div>
                    <div className="bg-secondary/25 rounded-lg col-span-2 h-8"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Features grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: TrendingUp, title: language === 'ar' ? 'زيادة المبيعات' : 'Increase Sales', desc: language === 'ar' ? 'زيادة المبيعات بنسبة 300%' : '300% increase in sales' },
              { icon: Users, title: language === 'ar' ? 'جذب العملاء' : 'Attract Customers', desc: language === 'ar' ? 'جذب عملاء جدد باستمرار' : 'Continuously attract new customers' },
              { icon: Star, title: language === 'ar' ? 'تقييمات ممتازة' : 'Excellent Reviews', desc: language === 'ar' ? 'تحسين سمعتك الرقمية' : 'Improve your digital reputation' }
            ].map((feature, index) => (
              <div key={index} className="bg-background/50 backdrop-blur-sm rounded-xl p-6 border border-primary/10 hover:border-primary/20 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-4 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary/60" />
                </div>
                <h5 className="font-medium text-primary mb-2">{feature.title}</h5>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      );
      
    case 'services':
      return (
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Basic Package */}
            <div className="bg-gradient-to-br from-muted/50 to-muted/30 rounded-2xl p-8 border border-muted relative">
              <div className="text-center mb-8">
                <h4 className="text-lg font-medium mb-2">{language === 'ar' ? 'الباقة الأساسية' : 'Basic Package'}</h4>
                <div className="text-3xl font-bold mb-2">$1,999</div>
                <div className="text-sm text-muted-foreground">{language === 'ar' ? 'مثالية للشركات الناشئة' : 'Perfect for startups'}</div>
              </div>
              
              <div className="space-y-3 mb-8">
                {[
                  language === 'ar' ? 'تصميم احترافي' : 'Professional design',
                  language === 'ar' ? '5 صفحات' : '5 pages',
                  language === 'ar' ? 'تحسين محركات البحث الأساسي' : 'Basic SEO',
                  language === 'ar' ? 'نموذج تواصل' : 'Contact form',
                  language === 'ar' ? 'دعم لمدة 3 أشهر' : '3 months support'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button className="w-full" variant="outline">
                {language === 'ar' ? 'اختر هذه الباقة' : 'Choose This Package'}
              </Button>
            </div>
            
            {/* Popular Package */}
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border-2 border-primary/20 relative transform scale-105">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                  {language === 'ar' ? 'الأكثر شعبية' : 'Most Popular'}
                </span>
              </div>
              
              <div className="text-center mb-8 pt-4">
                <h4 className="text-lg font-medium mb-2">{language === 'ar' ? 'الباقة المتقدمة' : 'Advanced Package'}</h4>
                <div className="text-3xl font-bold mb-2">$3,999</div>
                <div className="text-sm text-muted-foreground">{language === 'ar' ? 'الأفضل للشركات المتنامية' : 'Best for growing businesses'}</div>
              </div>
              
              <div className="space-y-3 mb-8">
                {[
                  language === 'ar' ? 'تصميم احترافي متقدم' : 'Advanced professional design',
                  language === 'ar' ? '10 صفحات' : '10 pages',
                  language === 'ar' ? 'تحسين محركات البحث المتقدم' : 'Advanced SEO',
                  language === 'ar' ? 'نظام إدارة المحتوى' : 'Content management system',
                  language === 'ar' ? 'تحليلات مفصلة' : 'Detailed analytics',
                  language === 'ar' ? 'دعم لمدة 6 أشهر' : '6 months support'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button className="w-full bg-gradient-to-r from-primary to-primary/80">
                {language === 'ar' ? 'اختر هذه الباقة' : 'Choose This Package'}
              </Button>
            </div>
            
            {/* Premium Package */}
            <div className="bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl p-8 border border-accent/30 relative">
              <div className="text-center mb-8">
                <h4 className="text-lg font-medium mb-2">{language === 'ar' ? 'الباقة المميزة' : 'Premium Package'}</h4>
                <div className="text-3xl font-bold mb-2">$6,999</div>
                <div className="text-sm text-muted-foreground">{language === 'ar' ? 'للشركات الكبيرة' : 'For large enterprises'}</div>
              </div>
              
              <div className="space-y-3 mb-8">
                {[
                  language === 'ar' ? 'تصميم مخصص بالكامل' : 'Fully custom design',
                  language === 'ar' ? 'صفحات غير محدودة' : 'Unlimited pages',
                  language === 'ar' ? 'تحسين محركات البحث المتقدم' : 'Premium SEO',
                  language === 'ar' ? 'نظام إدارة متطور' : 'Advanced CMS',
                  language === 'ar' ? 'تكامل مع منصات التجارة' : 'E-commerce integration',
                  language === 'ar' ? 'دعم على مدار الساعة' : '24/7 support'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button className="w-full" variant="outline">
                {language === 'ar' ? 'اختر هذه الباقة' : 'Choose This Package'}
              </Button>
            </div>
          </div>
        </div>
      );
      
    case 'transform':
      return (
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Before */}
            <div className="space-y-6">
              <div className="text-center">
                <span className="bg-gradient-to-r from-destructive/25 to-destructive/15 text-destructive-foreground px-4 py-2 rounded-lg font-medium">
                  {language === 'ar' ? 'قبل' : 'Before'}
                </span>
              </div>
              
              <div className="bg-gradient-to-br from-destructive/10 to-destructive/5 rounded-2xl p-8 border border-destructive/20">
                <div className="space-y-4 text-center">
                  <h5 className="font-medium text-destructive">{language === 'ar' ? 'وضع صعب' : 'Struggling Business'}</h5>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-destructive">5</div>
                    <div className="text-sm text-muted-foreground">{language === 'ar' ? 'عملاء شهرياً' : 'customers/month'}</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-destructive">$2K</div>
                    <div className="text-sm text-muted-foreground">{language === 'ar' ? 'دخل شهري' : 'monthly revenue'}</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                {[
                  language === 'ar' ? 'صعوبة في جذب العملاء' : 'Difficulty attracting customers',
                  language === 'ar' ? 'مبيعات ضعيفة' : 'Poor sales performance',
                  language === 'ar' ? 'عدم ثقة العملاء' : 'Lack of customer trust',
                  language === 'ar' ? 'منافسة شديدة' : 'Intense competition'
                ].map((problem, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-destructive/40 rounded-full flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">{problem}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* After */}
            <div className="space-y-6">
              <div className="text-center">
                <span className="bg-gradient-to-r from-primary/25 to-primary/15 text-primary-foreground px-4 py-2 rounded-lg font-medium">
                  {language === 'ar' ? 'بعد' : 'After'}
                </span>
              </div>
              
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20">
                <div className="space-y-4 text-center">
                  <h5 className="font-medium text-primary">{language === 'ar' ? 'نجاح باهر' : 'Thriving Business'}</h5>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-primary">50+</div>
                    <div className="text-sm text-muted-foreground">{language === 'ar' ? 'عميل شهرياً' : 'customers/month'}</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-primary">$25K+</div>
                    <div className="text-sm text-muted-foreground">{language === 'ar' ? 'دخل شهري' : 'monthly revenue'}</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                {[
                  language === 'ar' ? 'تدفق مستمر من العملاء' : 'Steady flow of customers',
                  language === 'ar' ? 'زيادة المبيعات 300%' : '300% increase in sales',
                  language === 'ar' ? 'ثقة وولاء العملاء' : 'Customer trust and loyalty',
                  language === 'ar' ? 'تفوق على المنافسين' : 'Outperforming competitors'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Success metrics */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { metric: '300%', label: language === 'ar' ? 'زيادة المبيعات' : 'Sales Increase' },
              { metric: '10x', label: language === 'ar' ? 'المزيد من العملاء' : 'More Customers' },
              { metric: '90%', label: language === 'ar' ? 'رضا العملاء' : 'Customer Satisfaction' }
            ].map((stat, index) => (
              <div key={index} className="bg-background/50 backdrop-blur-sm rounded-xl p-6 border border-primary/10 text-center">
                <div className="text-3xl font-bold text-primary mb-2">{stat.metric}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      );
      
    case 'contact':
      return (
        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Special offer */}
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-6 border border-primary/20">
              <div className="text-center space-y-4">
                <h4 className="text-lg font-medium text-primary">
                  {language === 'ar' ? 'عرض خاص محدود!' : 'Special Limited Offer!'}
                </h4>
                <div className="text-3xl font-bold text-primary">50% {language === 'ar' ? 'خصم' : 'OFF'}</div>
                <p className="text-sm text-muted-foreground">
                  {language === 'ar' 
                    ? 'للعملاء العشرين الأوائل فقط. لا تفوت هذه الفرصة الذهبية!'
                    : 'For the first 20 clients only. Don\'t miss this golden opportunity!'
                  }
                </p>
                <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80">
                  {language === 'ar' ? 'احجز الآن' : 'Book Now'}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
            
            {/* Process steps */}
            <div className="space-y-6">
              <h5 className="text-lg font-medium">{language === 'ar' ? 'كيف نعمل معك' : 'How We Work With You'}</h5>
              <div className="space-y-4">
                {[
                  { step: '1', title: language === 'ar' ? 'استشارة مجانية' : 'Free Consultation', desc: language === 'ar' ? 'نحلل وضعك الحالي' : 'We analyze your current situation' },
                  { step: '2', title: language === 'ar' ? 'التصميم والتطوير' : 'Design & Development', desc: language === 'ar' ? 'نبني موقعك المثالي' : 'We build your perfect website' },
                  { step: '3', title: language === 'ar' ? 'الإطلاق والدعم' : 'Launch & Support', desc: language === 'ar' ? 'نطلق ونقدم الدعم' : 'We launch and provide support' }
                ].map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-primary/30 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-medium text-primary">{step.step}</span>
                    </div>
                    <div className="flex-1">
                      <h6 className="font-medium text-primary mb-1">{step.title}</h6>
                      <p className="text-sm text-muted-foreground">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Contact form placeholder */}
          <div className="bg-gradient-to-br from-muted/20 to-muted/10 rounded-xl p-6 border border-muted/30">
            <h5 className="text-lg font-medium mb-6">{language === 'ar' ? 'احصل على استشارة مجانية' : 'Get Free Consultation'}</h5>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">{language === 'ar' ? 'الاسم الكامل' : 'Full Name'}</label>
                <div className="h-10 bg-background/50 rounded-lg border border-muted/40"></div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">{language === 'ar' ? 'البريد الإلكتروني' : 'Email Address'}</label>
                <div className="h-10 bg-background/50 rounded-lg border border-muted/40"></div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">{language === 'ar' ? 'رقم الهاتف' : 'Phone Number'}</label>
                <div className="h-10 bg-background/50 rounded-lg border border-muted/40"></div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">{language === 'ar' ? 'نوع المشروع' : 'Project Type'}</label>
                <div className="h-10 bg-background/50 rounded-lg border border-muted/40"></div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">{language === 'ar' ? 'رسالتك' : 'Your Message'}</label>
                <div className="h-20 bg-background/50 rounded-lg border border-muted/40"></div>
              </div>
              <Button className="w-full h-12 bg-gradient-to-r from-primary to-primary/80 mt-6">
                {language === 'ar' ? 'احصل على استشارة مجانية الآن' : 'Get Free Consultation Now'}
              </Button>
            </div>
          </div>
        </div>
      );
      
    default:
      return (
        <div className="flex items-center justify-center min-h-[300px]">
          <div className="text-center max-w-sm">
            <div className="relative mb-6">
              <div className="w-28 h-28 bg-gradient-to-br from-muted to-muted/70 rounded-2xl mx-auto flex items-center justify-center shadow-md">
                <div className="w-14 h-14 bg-gradient-to-br from-muted-foreground/10 to-muted-foreground/20 rounded-xl flex items-center justify-center">
                  <div className="w-7 h-7 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg"></div>
                </div>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-primary to-primary/70 rounded-full shadow-sm"></div>
              <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-gradient-to-br from-accent to-accent/70 rounded-full shadow-sm"></div>
            </div>
            
            <h3 className="text-lg font-medium text-foreground mb-2">
              {language === 'ar' ? 'جاهز للمحتوى' : 'Ready for Content'}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {language === 'ar' 
                ? 'هذا القسم الجميل ينتظر محتواك المذهل لإحيائه.'
                : 'This beautiful section is waiting for your amazing content to bring it to life.'
              }
            </p>
            
            <div className="mt-6 flex items-center justify-center space-x-1.5">
              <div className="w-1.5 h-1.5 bg-primary/40 rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-primary/60 rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
            </div>
          </div>
        </div>
      );
  }
}
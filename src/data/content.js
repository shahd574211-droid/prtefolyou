export const translations = {
  en: {
    nav: {
      brand: 'Shahad Majed',
      projects: 'Projects',
      skills: 'Skills',
      about: 'About',
      portfolio: 'Portfolio',
      toggle: 'AR',
    },
    hero: {
      eyebrow: 'Programmer Portfolio',
      name: 'Shahad Majed',
      title: 'Building reliable software through clear systems and strong execution',
      subtitle:
        'A focused collection of products, interfaces, and technical decisions that emphasize quality, performance, and maintainability.',
      highlights: ['React', 'JavaScript', 'Python', 'API Architecture', 'UI Systems'],
    },
    skills: {
      eyebrow: 'Skills',
      title: 'Technical toolkit organized by domain',
      categories: [
        { name: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'CSS Systems'] },
        { name: 'Backend', items: ['Python', 'Node.js', 'FastAPI', 'REST APIs'] },
        { name: 'Tools', items: ['Git', 'Vite', 'Postman', 'Figma'] },
      ],
    },
    about: {
      eyebrow: 'About',
      title: 'Method over noise',
      points: [
        'I approach software as a sequence of decisions: understand constraints, simplify architecture, then execute with precision.',
        'Each project starts with problem framing, continues with iterative delivery, and ends with observable technical quality.',
        'The goal is consistency: clean structure, predictable behavior, and products that stay maintainable as they evolve.',
      ],
    },
    services: {
      eyebrow: 'Projects',
      title: 'Selected work',
      labels: {},
      items: [],
    },
    portfolio: {
      eyebrow: 'Projects',
      title: 'Focused projects that show implementation depth',
      items: [
        {
          name: 'SaaS Analytics Dashboard',
          description:
            'Modular analytics interface with reusable data widgets and state-driven charts.',
          technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
          result: 'Optimized rendering path and reduced dashboard interaction latency.',
          image:
            'https://images.unsplash.com/photo-1551281044-8b27c7f17c7c?auto=format&fit=crop&w=1200&q=80',
        },
        {
          name: 'E-commerce Performance Rebuild',
          description:
            'Re-architected storefront with segmented bundles and cache-aware routing.',
          technologies: ['Next.js', 'JavaScript', 'Stripe API', 'Vercel'],
          result: 'Improved loading consistency across product and checkout pages.',
          image:
            'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
        },
        {
          name: 'Healthcare Booking Platform',
          description:
            'Built secure scheduling flows and asynchronous backend jobs for booking logic.',
          technologies: ['React', 'Python', 'FastAPI', 'Redis'],
          result: 'Stabilized booking pipeline and reduced operational exceptions.',
          image:
            'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
        },
      ],
    },
    footer: {
      text: 'Shahad Majed • Software Portfolio',
    },
  },
  ar: {
    nav: {
      brand: 'شهد ماجد',
      projects: 'المشاريع',
      skills: 'المهارات',
      about: 'نبذة',
      toggle: 'EN',
    },
    hero: {
      eyebrow: 'ملف أعمال برمجي',
      name: 'شهد ماجد',
      title: 'بناء برمجيات موثوقة عبر منهجية واضحة وتنفيذ دقيق',
      subtitle:
        'عرض عملي للمشاريع والقرارات التقنية التي تعكس جودة التنفيذ والأداء وقابلية الصيانة.',
      highlights: ['React', 'JavaScript', 'Python', 'هندسة APIs', 'تصميم واجهات'],
    },
    skills: {
      eyebrow: 'المهارات',
      title: 'مجموعة تقنية مصنفة بوضوح',
      categories: [
        { name: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'CSS Systems'] },
        { name: 'Backend', items: ['Python', 'Node.js', 'FastAPI', 'REST APIs'] },
        { name: 'Tools', items: ['Git', 'Vite', 'Postman', 'Figma'] },
      ],
    },
    about: {
      eyebrow: 'نبذة',
      title: 'المنهجية أهم من الضجيج',
      points: [
        'أتعامل مع البرمجيات كسلسلة قرارات: فهم القيود، تبسيط البنية، ثم تنفيذ دقيق.',
        'كل مشروع يبدأ بتحليل المشكلة ثم تسليم تدريجي مع مراجعة مستمرة للجودة التقنية.',
        'النتيجة المستهدفة دائمًا: هيكل نظيف، سلوك متوقع، ومنتج قابل للتطوير على المدى الطويل.',
      ],
    },
    portfolio: {
      eyebrow: 'الأعمال',
      title: 'مشاريع مركزة تُظهر عمق التنفيذ التقني',
      items: [
        {
          name: 'لوحة تحليلات SaaS',
          description:
            'واجهة تحليلات معيارية بمكونات بيانات قابلة لإعادة الاستخدام وإدارة حالة واضحة.',
          technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
          result: 'تحسين مسار العرض وتقليل زمن التفاعل داخل اللوحة.',
          image:
            'https://images.unsplash.com/photo-1551281044-8b27c7f17c7c?auto=format&fit=crop&w=1200&q=80',
        },
        {
          name: 'إعادة بناء متجر إلكتروني',
          description:
            'إعادة هيكلة المتجر مع تقسيم الحزم وتحسين التحميل بين الصفحات.',
          technologies: ['Next.js', 'JavaScript', 'Stripe API', 'Vercel'],
          result: 'رفع ثبات الأداء في صفحات المنتجات ومسار الدفع.',
          image:
            'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
        },
        {
          name: 'منصة حجوزات طبية',
          description:
            'بناء منصة حجز آمنة مع مهام خلفية غير متزامنة لإدارة العمليات.',
          technologies: ['React', 'Python', 'FastAPI', 'Redis'],
          result: 'استقرار تدفق الحجز وتقليل الأخطاء التشغيلية.',
          image:
            'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
        },
      ],
    },
    footer: {
      text: 'شهد ماجد • ملف أعمال برمجي',
    },
  },
}

export const translations = {
  en: {
    nav: {
      brand: 'Shahad Majed',
      projects: 'Projects',
      skills: 'Skills',
      about: 'About',
      portfolio: 'Portfolio',
      whatsapp: 'WhatsApp',
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
    expertise: {
      eyebrow: 'Core Expertise',
      title: 'How I support product growth',
      description:
        'I design and build production-ready interfaces with clear UX structure, strong interaction quality, and practical implementation decisions.',
      descriptionSecondary:
        'The delivery style focuses on measurable outcomes: faster user flow, cleaner data handling, and maintainable frontend architecture.',
      items: [
        { title: 'Website Design', projects: '26 completed projects', icon: '◉' },
        { title: 'Mobile App UI', projects: '18 completed projects', icon: '◉' },
        { title: 'Brand Identity UI', projects: '14 completed projects', icon: '◉' },
        { title: 'Business System Development', projects: '11 completed systems', icon: '◉' },
      ],
      stats: [
        { value: '285+', label: 'Project Milestones Delivered' },
        { value: '190+', label: 'Satisfied Clients & Partners' },
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
      liveDemoLabel: 'Live Demo',
      items: [
        {
          name: 'Building Site',
          description:
            'Developed a real-estate landing website with a cinematic hero section, trust-focused messaging, structured service highlights, and a clear discovery flow that helps visitors move quickly from first impression to project exploration, while keeping visual hierarchy and call-to-action clarity consistent across all screen sizes.',
          technologies: ['React', 'Frontend UI', 'Responsive Design', 'Vercel'],
          rating: 4.9,
          result:
            'Improved first impression and made project exploration easier with a premium visual direction and simple navigation.',
          liveUrl: 'https://buillding-sait.vercel.app',
          image: '/meridian-real-estate-hero.png',
        },
        {
          name: 'Skincare Store',
          description:
            'Built an online skincare storefront focused on smooth browsing, clear product presentation, conversion-friendly product pages, and a secure checkout flow that reduces friction across mobile and desktop sessions, with careful emphasis on product trust signals and purchase decision support.',
          technologies: ['Next.js', 'React', 'Payment Integration', 'Vercel'],
          rating: 4.8,
          result:
            'Improved purchase flow clarity and delivered a responsive shopping experience across all devices.',
          liveUrl: 'https://skincare-store-one.vercel.app',
          image: '/skincare-store.png',
        },
        {
          name: 'Medical System',
          description:
            'Developed a medical workflow system to organize patient records, appointments, doctor schedules, and daily clinic operations in one dashboard with structured navigation and role-oriented data views, helping clinic teams monitor workload and complete routine actions faster with fewer manual steps.',
          technologies: ['React', 'Node.js', 'API Integration', 'Vercel'],
          rating: 4.9,
          result:
            'Improved administrative clarity and made core clinic tasks faster through a structured and responsive interface.',
          liveUrl: 'https://system-madicen.vercel.app',
          image: '/medical-system.png',
        },
        {
          name: 'Driver Recruitment Platform',
          description:
            'Built a recruitment operations platform to track driver registrations, status transitions, lead pipelines, and follow-up actions from one unified panel designed for operational clarity and fast filtering, enabling recruitment teams to prioritize leads and keep communication history visible at every stage.',
          technologies: ['React', 'Dashboard UI', 'Data Tables', 'Vercel'],
          rating: 4.7,
          result:
            'Made recruitment tracking clearer and faster by centralizing filters, records, and status transitions in a responsive interface.',
          liveUrl: 'https://platform-driver.vercel.app',
          image: '/driver-platform.png',
        },
        {
          name: 'Dilvary App',
          description:
            'Developed a delivery management app that organizes incoming orders, driver assignment, dispatch priorities, and live tracking in one clean dashboard optimized for quick daily logistics decisions, with a workflow that improves handoff speed between operations and field drivers.',
          technologies: ['React', 'Dashboard UI', 'Order Tracking', 'Vercel'],
          rating: 4.8,
          result:
            'Enabled faster dispatch visibility and smoother day-to-day delivery operations through a clean responsive interface.',
          liveUrl: 'https://dilvary-app.vercel.app',
          image: '/dilvary-app.png',
        },
        {
          name: 'Food Ordering Web App',
          description:
            'Built a restaurant ordering interface with categorized meals, fast browsing, menu-focused search behavior, and clear card-based product presentation to make ordering flow intuitive and consistent, while preserving readability and responsive behavior during high menu density.',
          technologies: ['React', 'UI Components', 'Responsive Design', 'Vercel'],
          rating: 4.7,
          result:
            'Improved menu discoverability and made food ordering flow more intuitive through a clean and mobile-friendly layout.',
          liveUrl: 'https://food-web-black-theta.vercel.app',
          image: '/food-web.png',
        },
        {
          name: 'Brand Fashion Web',
          description:
            'Created a fashion brand website with modern category sections, promotional hero banners, curated collection highlights, and a clean shopping-focused layout that strengthens product storytelling, improves visual merchandising, and keeps navigation lightweight for faster discovery.',
          technologies: ['React', 'Frontend UI', 'Responsive Layout', 'Vercel'],
          rating: 4.8,
          result:
            'Strengthened product presentation and improved browsing flow with a visually polished storefront experience.',
          liveUrl: 'https://brand-web-dun.vercel.app',
          image: '/brand-web.png',
        },
      ],
    },
    footer: {
      text: 'Shahad Majed • Software Portfolio',
    },
    whatsapp: {
      eyebrow: 'WhatsApp',
      title: 'Reach out in a few taps',
      subtitle:
        'Prefer a quick, direct line? Open WhatsApp for a straightforward conversation about your project, scope, and timeline.',
      steps: [
        {
          title: 'Open the chat',
          text: 'Use the button below — it opens WhatsApp on your phone or desktop with my number ready.',
        },
        {
          title: 'Describe the goal',
          text: 'Share what you are building, constraints, and what success should look like when the work is done.',
        },
        {
          title: 'Get a clear reply',
          text: 'You will receive next steps, clarifying questions if needed, and a practical path forward.',
        },
      ],
      ctaLabel: 'Message on WhatsApp',
      phoneLabel: 'Number',
      phoneDisplay: '0776 571 3455',
      waUrl: 'https://wa.me/9647765713455',
    },
    socialProof: {
      eyebrow: 'Client Voice',
      title: 'People trust the delivery quality',
      subtitle:
        'Clear communication, practical execution, and measurable improvements are the most repeated feedback points across delivered products.',
      testimonials: [
        {
          avatar: 'A',
          quote:
            'The dashboard delivery was clean and reliable. We noticed faster daily operations from week one.',
          name: 'Ahmed Al-Mutairi',
          role: 'Operations Manager',
        },
        {
          avatar: 'L',
          quote:
            'Strong design decisions and excellent code quality. The interface felt production-ready from the first release.',
          name: 'Lina Kareem',
          role: 'Product Lead',
        },
        {
          avatar: 'S',
          quote:
            'Professional communication and on-time milestones. Technical details were always clear and well documented.',
          name: 'Sarah Nabil',
          role: 'Founder',
        },
        {
          avatar: 'M',
          quote:
            'The implementation process was smooth and transparent. Every milestone was delivered with clear technical rationale.',
          name: 'Mohammed Fares',
          role: 'Technical Coordinator',
        },
        {
          avatar: 'R',
          quote:
            'Excellent balance between design quality and practical usability. The delivered product felt stable and mature.',
          name: 'Rana Al-Hassan',
          role: 'Marketing Director',
        },
      ],
      contactTitle: "Let's build something impactful together.",
      contactSubtitle: 'Start your next product with a clear plan and a strong execution path.',
      contact: {
        ctaLabel: 'Start by saying hi',
        ctaHref: '#home',
        infoLabel: 'Information',
        infoValue: 'Remote collaboration • MENA',
      },
    },
  },
  ar: {
    nav: {
      brand: 'شهد ماجد',
      projects: 'المشاريع',
      skills: 'المهارات',
      about: 'نبذة',
      whatsapp: 'واتساب',
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
    expertise: {
      eyebrow: 'مجالات الخبرة',
      title: 'كيف أدعم نمو المنتجات',
      description:
        'أصمم وأطوّر واجهات إنتاجية جاهزة للنشر ببنية استخدام واضحة، وجودة تفاعل عالية، وقرارات تنفيذ عملية قابلة للتوسع.',
      descriptionSecondary:
        'أسلوب التسليم يركز على أثر قابل للقياس: تسريع تجربة المستخدم، تنظيم تدفق البيانات، والحفاظ على هيكل واجهات قابل للصيانة.',
      items: [
        { title: 'تصميم مواقع', projects: '26 مشروعًا مكتملًا', icon: '◉' },
        { title: 'واجهات تطبيقات الجوال', projects: '18 مشروعًا مكتملًا', icon: '◉' },
        { title: 'هوية بصرية للمنتجات', projects: '14 مشروعًا مكتملًا', icon: '◉' },
        { title: 'بناء أنظمة للشركات والمؤسسات الصغيرة', projects: '11 نظامًا مكتملًا', icon: '◉' },
      ],
      stats: [
        { value: '+285', label: 'محطة تنفيذ ناجحة للمشاريع' },
        { value: '+190', label: 'عميل وشريك راضٍ عن النتائج' },
      ],
    },
    portfolio: {
      eyebrow: 'المشاريع',
      title: 'مشاريع مركزة تُظهر عمق التنفيذ التقني',
      liveDemoLabel: 'معاينة مباشرة',
      items: [
        {
          name: 'موقع عقاري',
          description:
            'تطوير موقع هبوط عقاري بواجهة رئيسية قوية ورسائل ثقة واضحة وأقسام تعريف منظمة ومسار تصفح سلس يوجّه الزائر بسرعة من الانطباع الأول إلى استكشاف المشاريع، مع عناية خاصة بتدرج المحتوى وتثبيت عناصر الدعوة للإجراء لرفع جودة التحويل.',
          technologies: ['React', 'واجهات Frontend', 'تصميم متجاوب', 'Vercel'],
          rating: 4.9,
          result:
            'تحسين الانطباع الأول وتسهيل استكشاف المشاريع عبر تصميم بصري احترافي وتنقل واضح.',
          liveUrl: 'https://buillding-sait.vercel.app',
          image: '/meridian-real-estate-hero.png',
        },
        {
          name: 'متجر الكتروني',
          description:
            'متجر إلكتروني متخصص بمنتجات العناية بالبشرة مع عرض منتجات واضح وصفحات تفاصيل محسنة وتجربة تصفح سلسة ودفع إلكتروني آمن ومتوافق مع الجوال، مع إبراز عناصر الثقة ومعلومات المنتج لدعم قرار الشراء بشكل أسرع.',
          technologies: ['Next.js', 'React', 'تكامل دفع إلكتروني', 'Vercel'],
          rating: 4.8,
          result:
            'تحسين وضوح مسار الشراء وتقديم تجربة تسوق متجاوبة وسهلة الاستخدام على جميع الأجهزة.',
          liveUrl: 'https://skincare-store-one.vercel.app',
          image: '/skincare-store.png',
        },
        {
          name: 'نظام طبي',
          description:
            'تطوير نظام طبي لتنظيم ملفات المرضى والمواعيد وجداول الأطباء وإدارة عمليات العيادة اليومية من خلال لوحة واحدة واضحة وسهلة المتابعة، بما يسهل تتبع ضغط العمل وتقليل الوقت الضائع في التنقل بين الشاشات بكفاءة واستقرار ومرونة.',
          technologies: ['React', 'Node.js', 'تكامل API', 'Vercel'],
          rating: 4.9,
          result:
            'تحسين وضوح الإدارة وتسريع تنفيذ المهام الأساسية داخل العيادة عبر واجهة منظمة ومتجاوبة بكفاءة ودقة واستقرار.',
          liveUrl: 'https://system-madicen.vercel.app',
          image: '/medical-system.png',
        },
        {
          name: 'منصة توظيف السائقين',
          description:
            'تطوير منصة تشغيلية لإدارة توظيف السائقين عبر تتبع التسجيل وتحديث الحالات وإدارة العملاء المحتملين وخطوات المتابعة من لوحة موحدة سريعة الاستجابة، مع تحسين ترتيب الأولويات وإظهار حالة كل مرشح بشكل لحظي لفريق التوظيف.',
          technologies: ['React', 'لوحات تحكم', 'جداول بيانات', 'Vercel'],
          rating: 4.7,
          result:
            'تحسين وضوح متابعة التوظيف وتسريع العمل عبر مركزية الفلاتر والسجلات وتحديث الحالات ضمن واجهة متجاوبة.',
          liveUrl: 'https://platform-driver.vercel.app',
          image: '/driver-platform.png',
        },
        {
          name: 'تطبيق التوصيل',
          description:
            'تطوير تطبيق لإدارة عمليات التوصيل يشمل تنظيم الطلبات وتوزيع السائقين وتحديد الأولويات وتتبع الحالة المباشر من لوحة واحدة مع تجربة استخدام سهلة وسريعة، مما يرفع كفاءة التشغيل اليومي ويقلل تأخير التسليم.',
          technologies: ['React', 'لوحات تحكم', 'تتبع الطلبات', 'Vercel'],
          rating: 4.8,
          result:
            'رفع وضوح المتابعة اليومية للتوصيل وتسريع إدارة الطلبات عبر واجهة نظيفة ومتجاوبة.',
          liveUrl: 'https://dilvary-app.vercel.app',
          image: '/dilvary-app.png',
        },
        {
          name: 'تطبيق طلبات الطعام',
          description:
            'تطوير واجهة طلب طعام للمطاعم مع تصنيفات واضحة للوجبات وتصفح سريع وسلوك بحث عملي وعرض منظم للمنتجات بنمط البطاقات لرفع وضوح رحلة الطلب، مع تحسين قابلية القراءة وسرعة الوصول إلى الأصناف الأكثر طلبًا.',
          technologies: ['React', 'مكونات واجهة', 'تصميم متجاوب', 'Vercel'],
          rating: 4.7,
          result:
            'تحسين سهولة اكتشاف الوجبات وجعل مسار طلب الطعام أكثر وضوحًا عبر تصميم نظيف ومتوافق مع الجوال.',
          liveUrl: 'https://food-web-black-theta.vercel.app',
          image: '/food-web.png',
        },
        {
          name: 'موقع براند أزياء',
          description:
            'إنشاء موقع لعلامة أزياء يتضمن أقسام عرض حديثة وبانرات ترويجية رئيسية وإبراز للمجموعات الموسمية ضمن تصميم نظيف يركز على تجربة تسوق أنيقة، مع ترتيب بصري يساعد على اكتشاف المنتجات ويعزز حضور الهوية التجارية.',
          technologies: ['React', 'واجهات Frontend', 'تصميم متجاوب', 'Vercel'],
          rating: 4.8,
          result:
            'تعزيز عرض المنتجات وتحسين انسيابية التصفح عبر واجهة متجر أنيقة وواضحة بصريًا.',
          liveUrl: 'https://brand-web-dun.vercel.app',
          image: '/brand-web.png',
        },
      ],
    },
    footer: {
      text: 'شهد ماجد • ملف أعمال برمجي',
    },
    whatsapp: {
      eyebrow: 'واتساب',
      title: 'كيفية التواصل عبر واتساب',
      subtitle:
        'للاستفسارات والمشاريع الجديدة يمكنكم مراسلتي مباشرة على واتساب بخطوات بسيطة ودون تعقيد.',
      steps: [
        {
          title: 'افتح المحادثة',
          text: 'اضغطوا الزر أدناه لفتح واتساب على الجوال أو المتصفح مع الرقم جاهزًا للمراسلة.',
        },
        {
          title: 'صفّوا الطلب',
          text: 'اذكروا نوع المشروع، المخرجات المطلوبة، وأي قيود زمنية أو تقنية تهمكم.',
        },
        {
          title: 'استلموا ردًا واضحًا',
          text: 'أعود بخطوات مقترحة وأسئلة توضيحية عند الحاجة، ومسار عمل عملي يناسب المشروع.',
        },
      ],
      ctaLabel: 'مراسلة على واتساب',
      phoneLabel: 'الرقم',
      phoneDisplay: '0776 571 3455',
      waUrl: 'https://wa.me/9647765713455',
    },
    socialProof: {
      eyebrow: 'آراء العملاء',
      title: 'ثقة مبنية على جودة التنفيذ',
      subtitle:
        'أكثر ما يتكرر في التقييمات هو وضوح التواصل، دقة التنفيذ، والقدرة على تحويل المتطلبات إلى نتائج عملية قابلة للقياس.',
      testimonials: [
        {
          avatar: 'أ',
          quote:
            'تم تسليم لوحة التشغيل بشكل احترافي وسريع، وظهر أثر واضح على سير العمل اليومي من أول أسبوع.',
          name: 'أحمد المطيري',
          role: 'مدير العمليات',
        },
        {
          avatar: 'ل',
          quote:
            'قرارات تصميم دقيقة وجودة كود ممتازة، والواجهة كانت جاهزة للإطلاق بجودة عالية من النسخة الأولى.',
          name: 'لينا كريم',
          role: 'قائدة منتج',
        },
        {
          avatar: 'س',
          quote:
            'التواصل كان منظمًا والالتزام بالمراحل ممتازًا، وكل التفاصيل التقنية كانت واضحة ومفهومة لفريقنا.',
          name: 'سارة نبيل',
          role: 'مؤسسة المشروع',
        },
        {
          avatar: 'م',
          quote:
            'سير التنفيذ كان منظمًا وواضحًا، وكل مرحلة تسليم جاءت بشرح تقني مفهوم وسهل المتابعة لفريقنا.',
          name: 'محمد فارس',
          role: 'منسق تقني',
        },
        {
          avatar: 'ر',
          quote:
            'توازن ممتاز بين جودة التصميم وسهولة الاستخدام، والمنتج النهائي ظهر بشكل احترافي ومستقر منذ الإطلاق.',
          name: 'رنا الحسن',
          role: 'مديرة التسويق',
        },
      ],
      contactTitle: 'لنصنع منتجًا مؤثرًا معًا.',
      contactSubtitle: 'ابدأ مشروعك القادم بخطة واضحة وتنفيذ قوي يحقق نتيجة فعلية.',
      contact: {
        ctaLabel: 'ابدأ برسالة ترحيب',
        ctaHref: '#home',
        infoLabel: 'معلومات التواصل',
        infoValue: 'تعاون عن بعد • الشرق الأوسط',
      },
    },
  },
}

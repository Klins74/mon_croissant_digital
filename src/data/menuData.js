// Enhanced menu data structure with i18n support
export const organizationInfo = {
  name: {
    RU: "French Croissant",
    KZ: "French Croissant", 
    EN: "French Croissant"
  },
  {
    id: 19,
    name: "Круассан с семгой",
    shortName: "Сёмга",
    description: "Слоёный круассан с нежной слабосолёной семгой и крем-сыром",
    detailedDescription: "Баланс рыбы и мягкого крем-сыра, свежесть и питательность в каждом укусе.",
    price: 850,
    originalPrice: null,
    weight: "110г",
    images: {
      main: "/круассан_семга_1.jpg",
      gallery: [
        "/круассан_семга_1.jpg",
        "/круассан_семга_2.jpg"
      ]
    },
    category: 'croissants',
    subcategory: 'savory',
    dietary: ['halal'],
    rating: 4.8,
    reviewCount: 22,
    inStock: true,
    isNew: true,
    isPopular: true,
    isBestseller: false,
    ingredients: "Тесто круассан, слабосолёная семга, крем-сыр, зелень",
    allergens: ["Глютен", "Рыба", "Молочные продукты"],
    prepTime: "2 часа",
    nutritionalInfo: { calories: 390, protein: 17, carbs: 30, fat: 20, sugar: 3 },
    tags: ["Сёмга", "Сытное"],
    availableHours: "24/7"
  },
  {
    id: 20,
    name: "Круассан с курицей",
    shortName: "Курица",
    description: "Слоёный круассан с сочной курицей и сливочным соусом",
    detailedDescription: "Аппетитная куриная начинка с лёгким сливочным соусом и зеленью.",
    price: 780,
    originalPrice: null,
    weight: "120г",
    images: {
      main: "/круассан_курица_1.jpg",
      gallery: [
        "/круассан_курица_1.jpg",
        "/круассан_курица_2.jpg"
      ]
    },
    category: 'croissants',
    subcategory: 'savory',
    dietary: ['halal'],
    rating: 4.7,
    reviewCount: 31,
    inStock: true,
    isNew: true,
    isPopular: false,
    isBestseller: false,
    ingredients: "Тесто круассан, курица, сливочный соус, зелень",
    allergens: ["Глютен", "Молочные продукты"],
    prepTime: "2 часа",
    nutritionalInfo: { calories: 420, protein: 19, carbs: 32, fat: 22, sugar: 3 },
    tags: ["Курица", "Сытное"],
    availableHours: "24/7"
  },
  certifications: {
    RU: "Наличие Сертификатов;\n-ХАЛАЛ\n-Евразийский Экономический Союз Декларации о Соответствии",
    KZ: "Сертификаттардың болуы;\n-ХАЛАЛ\n-Еуразиялық Экономикалық Одақ Сәйкестік декларациялары",
    EN: "Availability of Certificates;\n-HALAL\n-Eurasian Economic Union Declarations of Conformity"
  },
  values: {
    RU: "Выпечка по приятным ценам\nПечем из лучших ингредиентов\nСоблюдаем все Французские технологии\nПечем круглосуточно 24/7 БЕЗ ВЫХОДНЫХ",
    KZ: "Жағымды бағамен пісіру\nЕң жақсы ингредиенттерден пісіреміз\nБарлық француз технологияларын сақтаймыз\nТәулік бойы 24/7 ДЕМАЛЫССЫЗ пісіреміз",
    EN: "Baking at pleasant prices\nBaking from the best ingredients\nFollowing all French technologies\nBaking 24/7 WITHOUT DAYS OFF"
  },
  address: {
    RU: "Алматы",
    KZ: "Алматы", 
    EN: "Almaty"
  },
  workSchedule: {
    RU: "Заявки принимаются до 19:00\n(вс- чт: пт-сб до 18.00)\nМинимальная сумма заказа 10 000 тенге",
    KZ: "Өтінімдер 19:00-ға дейін қабылданады\n(жс-бс: жм-сб 18.00-ге дейін)\nЕң аз тапсырыс сомасы 10 000 теңге",
    EN: "Orders accepted until 19:00\n(Sun-Thu: Fri-Sat until 18:00)\nMinimum order amount 10,000 tenge"
  },
  contacts: {
    phone: "+77011133490",
    instagram: "@mon_croissant_almaty",
    whatsapp: "+77011133490"
  }
};

export const menuCategories = [
  { 
    id: 'croissants', 
    name: {
      RU: 'Круассаны',
      KZ: 'Круассандар',
      EN: 'Croissants'
    },
    icon: 'Croissant', 
    description: {
      RU: 'Традиционные французские круассаны',
      KZ: 'Дәстүрлі француз круассандары',
      EN: 'Traditional French croissants'
    },
    color: 'from-amber-500 to-orange-500'
  },
  { 
    id: 'pastries', 
    name: {
      RU: 'Французские пирожные',
      KZ: 'Француз тортиктері',
      EN: 'French pastries'
    },
    icon: 'Cake', 
    description: {
      RU: 'Изысканные десерты по классическим рецептам',
      KZ: 'Классикалық рецепттер бойынша дайындалған тәтті десерттер',
      EN: 'Exquisite desserts following classic recipes'
    },
    color: 'from-pink-500 to-rose-500'
  },
  { 
    id: 'breads', 
    name: {
      RU: 'Ремесленный хлеб',
      KZ: 'Қолөнер наны',
      EN: 'Artisan bread'
    },
    icon: 'Wheat', 
    description: {
      RU: 'Свежий хлеб, выпекаемый ежедневно',
      KZ: 'Күн сайын пісірілетін жаңа нан',
      EN: 'Fresh bread baked daily'
    },
    color: 'from-yellow-600 to-amber-600'
  },
  { 
    id: 'seasonal', 
    name: {
      RU: 'Сезонные специальности',
      KZ: 'Маусымдық ерекшеліктер',
      EN: 'Seasonal specialties'
    },
    icon: 'Sparkles', 
    description: {
      RU: 'Лимитированные предложения по сезону',
      KZ: 'Маусым бойынша шектеулі ұсыныстар',
      EN: 'Limited seasonal offerings'
    },
    color: 'from-purple-500 to-indigo-500'
  }
];

export const dietaryFilters = [
  { 
    id: 'halal', 
    name: {
      RU: 'Халяль сертификат',
      KZ: 'Халал сертификаты',
      EN: 'Halal certified'
    }, 
    icon: 'Star', 
    color: 'text-green-600' 
  },
  { 
    id: 'vegan', 
    name: {
      RU: 'Веганский',
      KZ: 'Веган',
      EN: 'Vegan'
    }, 
    icon: 'Leaf', 
    color: 'text-emerald-600' 
  },
  { 
    id: 'gluten-free', 
    name: {
      RU: 'Без глютена',
      KZ: 'Глютенсіз',
      EN: 'Gluten-free'
    }, 
    icon: 'Shield', 
    color: 'text-blue-600' 
  },
  { 
    id: 'sugar-free', 
    name: {
      RU: 'Без сахара',
      KZ: 'Қантсыз',
      EN: 'Sugar-free'
    }, 
    icon: 'Heart', 
    color: 'text-red-600' 
  }
];

export const menuProducts = [
  {
    id: 1,
    name: {
      RU: "Круассан классический",
      KZ: "Классикалық круассан",
      EN: "Classic Croissant"
    },
    shortName: {
      RU: "Классический",
      KZ: "Классикалық",
      EN: "Classic"
    },
    description: {
      RU: "Традиционный французский круассан со слоистой маслянистой выпечкой, выпекаемый свежим каждые 2 часа",
      KZ: "Дәстүрлі француз круассаны, қабатты майлы нанмен, әр 2 сағат сайын жаңа пісіріледі",
      EN: "Traditional French croissant with layered buttery pastry, baked fresh every 2 hours"
    },
    detailedDescription: {
      RU: "Наш фирменный классический круассан изготавливается по традиционной французской технологии ламинирования. 81 слой масла создают неповторимую слоистую текстуру, а свежие ингредиенты гарантируют исключительный вкус.",
      KZ: "Біздің фирмалық классикалық круассан дәстүрлі француз ламинирлеу технологиясымен жасалады. 81 май қабаты ерекше қабатты текстура жасайды, ал жаңа ингредиенттер ерекше дәмді кепілдендіреді.",
      EN: "Our signature classic croissant is made using traditional French lamination technique. 81 layers of butter create an incomparable flaky texture, while fresh ingredients guarantee exceptional taste."
    },
    price: 350,
    originalPrice: null,
    weight: "65г",
    images: {
      main: "/frencroissant/круассан_классический_1.jpg",
      gallery: [
        "/frencroissant/круассан_классический_1.jpg",
        "/frencroissant/круассан_классический2.jpg"
      ]
    },
    category: 'croissants',
    subcategory: 'classic',
    dietary: ['halal'],
    rating: 4.8,
    reviewCount: 124,
    inStock: true,
    isNew: false,
    isPopular: true,
    isBestseller: true,
    ingredients: {
      RU: "Французское масло, органическая мука, свежие дрожжи, морская соль, молоко",
      KZ: "Француз майы, органикалық ұн, жаңа ашытқы, теңіз тұзы, сүт",
      EN: "French butter, organic flour, fresh yeast, sea salt, milk"
    },
    allergens: {
      RU: ["Глютен", "Молочные продукты"],
      KZ: ["Глютен", "Сүт өнімдері"],
      EN: ["Gluten", "Dairy products"]
    },
    technique: {
      RU: "Традиционная техника ламинирования с 81 слоем масла",
      KZ: "81 май қабатымен дәстүрлі ламинирлеу техникасы",
      EN: "Traditional lamination technique with 81 layers of butter"
    },
    prepTime: {
      RU: "2 часа",
      KZ: "2 сағат",
      EN: "2 hours"
    },
    nutritionalInfo: { 
      calories: 280, 
      protein: 6, 
      carbs: 32, 
      fat: 14,
      fiber: 2,
      sugar: 4
    },
    tags: {
      RU: ["Классика", "Популярное", "24/7"],
      KZ: ["Классика", "Танымал", "24/7"],
      EN: ["Classic", "Popular", "24/7"]
    },
    availableHours: "24/7",
    section: "58b29529-db33-45fc-a4d1-5e8461753ebe"
  },
  {
    id: 2,
    name: {
      RU: "Круассан с шоколадом",
      KZ: "Шоколадты круассан",
      EN: "Chocolate Croissant"
    },
    shortName: {
      RU: "Шоколадный",
      KZ: "Шоколадты",
      EN: "Chocolate"
    },
    description: {
      RU: "Маслянистый круассан с премиальным бельгийским темным шоколадом",
      KZ: "Сапалы бельгиялық қара шоколадты майлы круассан",
      EN: "Buttery croissant with premium Belgian dark chocolate"
    },
    detailedDescription: {
      RU: "Сочетание нашего классического круассана с высококачественным бельгийским шоколадом 70% какао. Каждый кусочек тает во рту, создавая идеальный баланс сладости и маслянистости.",
      KZ: "Біздің классикалық круассанның жоғары сапалы бельгиялық 70% какао шоколадымен үйлесімі. Әр кесек ауызда ериді, тәттілік пен майлылықтың керемет тепе-теңдігін жасайды.",
      EN: "Combination of our classic croissant with high-quality Belgian 70% cocoa chocolate. Each bite melts in your mouth, creating the perfect balance of sweetness and butteriness."
    },
    price: 580,
    originalPrice: null,
    weight: "75г",
    images: {
      main: "/frencroissant/круассан_шоколадный1.jpg",
      gallery: [
        "/frencroissant/круассан_шоколадный1.jpg",
        "/frencroissant/круассан_шоколадный2.jpg"
      ]
    },
    category: 'croissants',
    subcategory: 'filled',
    dietary: ['halal'],
    rating: 4.9,
    reviewCount: 98,
    inStock: true,
    isNew: false,
    isPopular: true,
    isBestseller: false,
    ingredients: {
      RU: "Тесто круассан, бельгийский темный шоколад (70% какао)",
      KZ: "Круассан қамыры, бельгиялық қара шоколад (70% какао)",
      EN: "Croissant dough, Belgian dark chocolate (70% cocoa)"
    },
    allergens: {
      RU: ["Глютен", "Молочные продукты", "Может содержать орехи"],
      KZ: ["Глютен", "Сүт өнімдері", "Жаңғақтарды қамтуы мүмкін"],
      EN: ["Gluten", "Dairy products", "May contain nuts"]
    },
    technique: {
      RU: "Ручная раскатка с премиальным шоколадом, двойная расстойка",
      KZ: "Сапалы шоколадпен қолмен жайып жасау, қос ашыту",
      EN: "Hand-rolled with premium chocolate, double proofing"
    },
    prepTime: {
      RU: "2.5 часа",
      KZ: "2.5 сағат",
      EN: "2.5 hours"
    },
    nutritionalInfo: { 
      calories: 420, 
      protein: 8, 
      carbs: 45, 
      fat: 22,
      fiber: 3,
      sugar: 18
    },
    tags: {
      RU: ["Шоколад", "Премиум", "Популярное"],
      KZ: ["Шоколад", "Премиум", "Танымал"],
      EN: ["Chocolate", "Premium", "Popular"]
    },
    availableHours: "24/7",
    section: "58b29529-db33-45fc-a4d1-5e8461753ebe"
  },
  {
    id: 3,
    name: "Круассан с фисташкой",
    shortName: "Фисташковый",
    description: "Круассан с начинкой из богатого фисташкового крема и посыпанный дроблеными фисташками",
    detailedDescription: "Эксклюзивный круассан с натуральным фисташковым кремом, приготовленным из отборных сицилийских фисташек. Посыпка из дробленых фисташек добавляет приятную текстуру и усиливает ореховый аромат.",
    price: 580,
    originalPrice: null,
    images: {
      main: "/frencroissant/круассан_фисташка_1.jpg",
      gallery: [
        "/frencroissant/круассан_фисташка_1.jpg",
        "/frencroissant/круассан_фисташка_2.jpg"
      ]
    },
    category: 'croissants',
    subcategory: 'filled',
    dietary: ['halal'],
    rating: 4.8,
    reviewCount: 67,
    inStock: true,
    isNew: true,
    isPopular: false,
    isBestseller: false,
    ingredients: "Тесто круассан, фисташковый крем, дробленые фисташки",
    allergens: ["Глютен", "Молочные продукты", "Орехи"],
    technique: "Начинка после первой выпечки, финишная выпечка с фисташками",
    prepTime: "2.5 часа",
    nutritionalInfo: { 
      calories: 450, 
      protein: 12, 
      carbs: 38, 
      fat: 28,
      fiber: 4,
      sugar: 12
    },
    tags: ["Новинка", "Орехи", "Премиум"],
    availableHours: "24/7"
  },
  {
    id: 4,
    name: "Круассан с миндалем",
    shortName: "Миндальный",
    description: "Круассан с ароматной миндальной начинкой и посыпанный миндальными лепестками",
    detailedDescription: "Деликатный круассан с кремом из молотого миндаля и миндальными лепестками. Классическое французское сочетание, которое покорит любителей орехового вкуса.",
    price: 580,
    originalPrice: null,
    images: {
      main: "/frencroissant/круассан_миндаль_1.jpg",
      gallery: [
        "/frencroissant/круассан_миндаль_1.jpg",
        "/frencroissant/круассан_миндаль_2.jpg"
      ]
    },
    category: 'croissants',
    subcategory: 'filled',
    dietary: ['halal'],
    rating: 4.9,
    reviewCount: 89,
    inStock: true,
    isNew: false,
    isPopular: true,
    isBestseller: false,
    ingredients: "Тесто круассан, миндальный крем, миндальные лепестки, сахарная пудра",
    allergens: ["Глютен", "Молочные продукты", "Орехи"],
    technique: "Начинка после первой выпечки, затем финишная выпечка с миндалем",
    prepTime: "2.5 часа",
    nutritionalInfo: { 
      calories: 440, 
      protein: 11, 
      carbs: 40, 
      fat: 26,
      fiber: 3,
      sugar: 15
    },
    tags: ["Орехи", "Популярное", "Французская классика"],
    availableHours: "24/7"
  },
  {
    id: 5,
    name: "Карамельный круассан",
    shortName: "Карамельный",
    description: "Сладкий круассан с нежной карамельной начинкой и сливочными нотками",
    detailedDescription: "Ностальгический вкус карамели в изысканном французском исполнении. Домашняя варёная сгущенка с легкой карамельной ноткой идеально дополняет маслянистое тесто.",
    price: 580,
    originalPrice: null,
    images: {
      main: "/frencroissant/круассан_вареная_сгущенка1.jpg",
      gallery: [
        "/frencroissant/круассан_вареная_сгущенка1.jpg",
        "/frencroissant/круассан_вареная_сгущенка2.jpg"
      ]
    },
    category: 'croissants',
    subcategory: 'filled',
    dietary: ['halal'],
    rating: 4.8,
    reviewCount: 156,
    inStock: true,
    isNew: false,
    isPopular: true,
    isBestseller: false,
    ingredients: "Тесто круассан, домашняя сгущенка, сливочная карамель",
    allergens: ["Глютен", "Молочные продукты"],
    technique: "Наполнение сгущенкой после выпечки, карамелизация",
    prepTime: "2 часа",
    nutritionalInfo: { 
      calories: 390, 
      protein: 8, 
      carbs: 48, 
      fat: 18,
      fiber: 1,
      sugar: 24
    },
    tags: ["Сладкое", "Популярное", "Ностальгия"],
    availableHours: "24/7"
  },
  {
    id: 6,
    name: "Сырный круассан с кунжутной посыпкой",
    shortName: "Сырный с кунжутом",
    description: "Слоёный круассан с расплавленным сыром и ароматной кунжутной посыпкой",
    detailedDescription: "Сытный вариант круассана с качественным сыром моцарелла и золотистой кунжутной посыпкой. Идеальный выбор для завтрака или перекуса.",
    price: 550,
    originalPrice: null,
    images: {
      main: "/frencroissant/круассан_сырный_1.jpg",
      gallery: [
        "/frencroissant/круассан_сырный_1.jpg",
        "/frencroissant/круассан_сырный_2.jpg"
      ]
    },
    category: 'croissants',
    subcategory: 'savory',
    dietary: ['halal'],
    rating: 4.7,
    reviewCount: 73,
    inStock: true,
    isNew: false,
    isPopular: true,
    isBestseller: false,
    ingredients: "Тесто круассан, сыр моцарелла, свежая зелень",
    allergens: ["Глютен", "Молочные продукты"],
    technique: "Начинка сыром перед финальной выпечкой",
    prepTime: "2 часа",
    nutritionalInfo: { 
      calories: 380, 
      protein: 15, 
      carbs: 32, 
      fat: 22,
      fiber: 2,
      sugar: 3
    },
    tags: ["Сытное", "Сыр", "Кунжут", "Завтрак"],
    availableHours: "24/7"
  },
  {
    id: 11,
    name: "Круассан с малиновым крем-чиз",
    shortName: "Малина крем-чиз",
    description: "Слоеный круассан с нежным крем-сыром и яркой малиновой начинкой",
    detailedDescription: "Нежный крем-чиз в сочетании с натуральным малиновым пюре. Яркий вкус и красивая подача.",
    price: 650,
    originalPrice: null,
    weight: "75г",
    images: {
      main: "/frencroissant/круассан_малина_кремчиз_1.jpg",
      gallery: [
        "/frencroissant/круассан_малина_кремчиз_1.jpg",
        "/frencroissant/круассан_малиновый_кремчиз2.jpg"
      ]
    },
    category: 'croissants',
    subcategory: 'filled',
    dietary: ['halal'],
    rating: 4.8,
    reviewCount: 42,
    inStock: true,
    isNew: true,
    isPopular: true,
    isBestseller: false,
    ingredients: "Тесто круассан, крем-чиз, малина",
    allergens: ["Глютен", "Молочные продукты"],
    technique: "Начинка крем-чизом и малиновым пюре",
    prepTime: "2.5 часа",
    nutritionalInfo: { calories: 430, protein: 8, carbs: 45, fat: 23, sugar: 22 },
    tags: ["Крем-чиз", "Малина", "Новинка"],
    availableHours: "24/7"
  },
  {
    id: 12,
    name: "Круассан с клубникой",
    shortName: "Клубника",
    description: "Нежная клубничная начинка в хрустящем слоёном круассане",
    detailedDescription: "Сбалансированная сладость клубники. Летний вкус круглый год.",
    price: 650,
    originalPrice: null,
    weight: "75г",
    images: {
      main: "/frencroissant/круассан_клубничный_кремчиз_1.jpg",
      gallery: [
        "/frencroissant/круассан_клубничный_кремчиз_1.jpg",
        "/frencroissant/круассан_клубничный_кремчиз_2.jpg"
      ]
    },
    category: 'croissants',
    subcategory: 'filled',
    dietary: ['halal'],
    rating: 4.8,
    reviewCount: 36,
    inStock: true,
    isNew: true,
    isPopular: true,
    isBestseller: false,
    ingredients: "Тесто круассан, крем-чиз, клубника",
    allergens: ["Глютен", "Молочные продукты"],
    technique: "Начинка крем-чизом и клубничным пюре",
    prepTime: "2.5 часа",
    nutritionalInfo: { calories: 430, protein: 8, carbs: 45, fat: 23, sugar: 21 },
    tags: ["Крем-чиз", "Клубника", "Новинка"],
    availableHours: "24/7"
  },
  {
    id: 13,
    name: "Круассан с манго",
    shortName: "Манго",
    description: "Экзотический вкус манго в хрустящем круассане",
    detailedDescription: "Тропическая свежесть манго для насыщенного вкуса.",
    price: 650,
    originalPrice: null,
    weight: "75г",
    images: {
      main: "/frencroissant/круассан_манго_кремчиз_1.jpg",
      gallery: [
        "/frencroissant/круассан_манго_кремчиз_1.jpg",
        "/frencroissant/круассан_манго_кремчиз2.jpg"
      ]
    },
    category: 'croissants',
    subcategory: 'filled',
    dietary: ['halal'],
    rating: 4.7,
    reviewCount: 28,
    inStock: true,
    isNew: true,
    isPopular: false,
    isBestseller: false,
    ingredients: "Тесто круассан, крем-чиз, манго",
    allergens: ["Глютен", "Молочные продукты"],
    technique: "Начинка крем-чизом и манговым пюре",
    prepTime: "2.5 часа",
    nutritionalInfo: { calories: 435, protein: 8, carbs: 46, fat: 23, sugar: 20 },
    tags: ["Крем-чиз", "Манго"],
    availableHours: "24/7"
  },
  {
    id: 14,
    name: "Кукис классический",
    shortName: "Кукис",
    description: "Классическое мягкое печенье с хрустящими краями",
    detailedDescription: "Большой мягкий кукис с насыщанным вкусом ванили и карамелизованного сахара.",
    price: 490,
    originalPrice: null,
    weight: "90г",
    images: {
      main: "/frencroissant/кукис_классический_1.jpg",
      gallery: [
        "/frencroissant/кукис_классический_1.jpg",
        "/frencroissant/кукис_классический_2.jpg"
      ]
    },
    category: 'pastries',
    subcategory: 'cookies',
    dietary: ['halal'],
    rating: 4.8,
    reviewCount: 51,
    inStock: true,
    isNew: true,
    isPopular: true,
    isBestseller: false,
    ingredients: "Мука, сливочное масло, сахар, ваниль",
    allergens: ["Глютен", "Молочные продукты", "Яйца"],
    prepTime: "1.5 часа",
    nutritionalInfo: { calories: 360, protein: 5, carbs: 46, fat: 16, sugar: 24 },
    tags: ["Кукис", "Классика"],
    availableHours: "24/7"
  },
  {
    id: 15,
    name: "Кукис шоколадный",
    shortName: "Кукис шоколадный",
    description: "Мягкое шоколадное печенье с кусочками темного шоколада",
    detailedDescription: "Двойной шоколад для любителей насыщенного вкуса: какао в тесте и кусочки шоколада.",
    price: 520,
    originalPrice: null,
    weight: "90г",
    images: {
      main: "/frencroissant/кукис_шоколадный_1.jpg",
      gallery: [
        "/frencroissant/кукис_шоколадный_1.jpg",
        "/frencroissant/кукис_шоклад_2.jpg"
      ]
    },
    category: 'pastries',
    subcategory: 'cookies',
    dietary: ['halal'],
    rating: 4.9,
    reviewCount: 64,
    inStock: true,
    isNew: true,
    isPopular: true,
    isBestseller: true,
    ingredients: "Мука, какао, шоколад 70%",
    allergens: ["Глютен", "Молочные продукты", "Яйца"],
    prepTime: "1.5 часа",
    nutritionalInfo: { calories: 390, protein: 6, carbs: 44, fat: 18, sugar: 26 },
    tags: ["Кукис", "Шоколад", "Новинка"],
    availableHours: "24/7"
  },
  // Tartlets
  {
    id: 16,
    name: "Тарталетка с клубникой",
    shortName: "Тарталетка клубника",
    description: "Хрустящая тарталетка с заварным кремом и свежей клубникой",
    detailedDescription: "Нежный заварной крем в песочной корзинке, украшенной сочной клубникой.",
    price: 720,
    originalPrice: null,
    weight: "120г",
    images: {
      main: "/тарталетка_клубника_1.jpg",
      gallery: [
        "/тарталетка_клубника_1.jpg",
        "/тарталетка_клубника_2.jpg"
      ]
    },
    category: 'pastries',
    subcategory: 'tartlets',
    dietary: ['halal'],
    rating: 4.9,
    reviewCount: 37,
    inStock: true,
    isNew: true,
    isPopular: true,
    isBestseller: false,
    ingredients: "Песочное тесто, заварной крем, клубника, сахарная пудра",
    allergens: ["Глютен", "Молочные продукты", "Яйца"],
    prepTime: "3 часа",
    nutritionalInfo: { calories: 410, protein: 6, carbs: 48, fat: 20, sugar: 26 },
    tags: ["Тарталетка", "Клубника"],
    availableHours: "24/7"
  },
  {
    id: 17,
    name: "Тарталетка с манго",
    shortName: "Тарталетка манго",
    description: "Песочная корзинка с кремом и спелым манго",
    detailedDescription: "Экзотическая манговая подача на нежном креме в хрустящей корзинке.",
    price: 740,
    originalPrice: null,
    weight: "120г",
    images: {
      main: "/тарталетка_манго_1.jpg",
      gallery: [
        "/тарталетка_манго_1.jpg",
        "/тарталетка_манго_2.jpg"
      ]
    },
    category: 'pastries',
    subcategory: 'tartlets',
    dietary: ['halal'],
    rating: 4.8,
    reviewCount: 29,
    inStock: true,
    isNew: true,
    isPopular: false,
    isBestseller: false,
    ingredients: "Песочное тесто, крем, манго, сахарная пудра",
    allergens: ["Глютен", "Молочные продукты", "Яйца"],
    prepTime: "3 часа",
    nutritionalInfo: { calories: 420, protein: 6, carbs: 49, fat: 21, sugar: 27 },
    tags: ["Тарталетка", "Манго"],
    availableHours: "24/7"
  },
  {
    id: 18,
    name: "Тарталетка с ягодами",
    shortName: "Тарталетка ягоды",
    description: "Ассорти свежих ягод на заварном креме в песочной корзинке",
    detailedDescription: "Сезонные ягоды на нежном креме, классическая французская подача.",
    price: 760,
    originalPrice: null,
    weight: "120г",
    images: {
      main: "/тарталетка_ягоды_1.jpg",
      gallery: [
        "/тарталетка_ягоды_1.jpg",
        "/тарталетка_ягода_2.jpg"
      ]
    },
    category: 'pastries',
    subcategory: 'tartlets',
    dietary: ['halal'],
    rating: 4.9,
    reviewCount: 33,
    inStock: true,
    isNew: true,
    isPopular: true,
    isBestseller: false,
    ingredients: "Песочное тесто, заварной крем, ассорти ягод",
    allergens: ["Глютен", "Молочные продукты", "Яйца"],
    prepTime: "3 часа",
    nutritionalInfo: { calories: 415, protein: 6, carbs: 47, fat: 20, sugar: 25 },
    tags: ["Тарталетка", "Ягоды"],
    availableHours: "24/7"
  },
  // Pastries
  {
    id: 7,
    name: "Чизкейк Нью-Йорк",
    shortName: "Нью-Йорк",
    description: "Классический нью-йоркский чизкейк с кремовой текстурой и песочной основой",
    detailedDescription: "Аутентичный нью-йоркский чизкейк по традиционному рецепту. Нежнейшая творожная масса на хрустящей песочной основе с легкой ванильной ноткой.",
    price: 680,
    originalPrice: null,
    image: "/Фотки/Чизкейк Нью Йорк.png",
    category: 'pastries',
    subcategory: 'cheesecakes',
    dietary: ['halal'],
    rating: 4.9,
    reviewCount: 201,
    inStock: true,
    isNew: false,
    isPopular: true,
    isBestseller: true,
    ingredients: "Сливочный сыр, органические яйца, песочная основа, ванилин",
    allergens: ["Глютен", "Молочные продукты", "Яйца"],
    technique: "Водяная баня, медленное охлаждение для идеальной текстуры",
    prepTime: "4 часа",
    nutritionalInfo: { 
      calories: 520, 
      protein: 12, 
      carbs: 35, 
      fat: 38,
      fiber: 1,
      sugar: 28
    },
    tags: ["Бестселлер", "Классика", "Премиум"],
    availableHours: "24/7"
  },
  {
    id: 8,
    name: "Испанский чизкейк",
    shortName: "Баскский",
    description: "Баскский чизкейк с карамелизированной корочкой и нежной серединкой",
    detailedDescription: "Современная интерпретация баскского чизкейка с характерной подгоревшей корочкой и кремовой серединкой. Контраст текстур создает уникальный вкусовой опыт.",
    price: 650,
    originalPrice: null,
    image: "/Фотки/Испанский чизкейк.png",
    category: 'pastries',
    subcategory: 'cheesecakes',
    dietary: ['halal'],
    rating: 4.8,
    reviewCount: 87,
    inStock: true,
    isNew: true,
    isPopular: false,
    isBestseller: false,
    ingredients: "Сливочный сыр, сливки, яйца, мука, ванильный экстракт",
    allergens: ["Глютен", "Молочные продукты", "Яйца"],
    technique: "Высокотемпературная выпечка для карамелизации",
    prepTime: "3 часа",
    nutritionalInfo: { 
      calories: 480, 
      protein: 11, 
      carbs: 32, 
      fat: 35,
      fiber: 1,
      sugar: 25
    },
    tags: ["Новинка", "Испания", "Карамель"],
    availableHours: "24/7"
  },
  {
    id: 9,
    name: "Торт Медовик",
    shortName: "Медовик",
    description: "Многослойный медовый торт с нежным кремом и медовыми коржами",
    detailedDescription: "Традиционный русский медовик в авторском исполнении. Тонкие медовые коржи пропитываются сметанным кремом в течение 8 часов для достижения идеальной мягкости.",
    price: 750,
    originalPrice: null,
    image: "/Фотки/Торт медовик.png",
    category: 'pastries',
    subcategory: 'layer-cakes',
    dietary: ['halal'],
    rating: 4.9,
    reviewCount: 143,
    inStock: true,
    isNew: false,
    isPopular: true,
    isBestseller: true,
    ingredients: "Натуральный мед, сметанный крем, мука, яйца, сода",
    allergens: ["Глютен", "Молочные продукты", "Яйца"],
    technique: "Тонкие медовые коржи, выдержка 8 часов для пропитки",
    prepTime: "8 часов",
    nutritionalInfo: { 
      calories: 380, 
      protein: 6, 
      carbs: 58, 
      fat: 14,
      fiber: 1,
      sugar: 42
    },
    tags: ["Бестселлер", "Традиция", "Мед"],
    availableHours: "24/7"
  },
  {
    id: 10,
    name: "Торт Молочная девочка",
    shortName: "Молочная девочка",
    description: "Нежный молочный торт с воздушными бисквитами и сливочным кремом",
    detailedDescription: "Воздушный бисквитный торт с нежным молочным кремом и сгущенным молоком. Каждый слой пропитан любовью к классическим вкусам детства.",
    price: 750,
    originalPrice: null,
    image: "/Фотки/молочная девочка.png",
    category: 'pastries',
    subcategory: 'layer-cakes',
    dietary: ['halal'],
    rating: 4.8,
    reviewCount: 92,
    inStock: true,
    isNew: false,
    isPopular: true,
    isBestseller: false,
    ingredients: "Бисквит, молочный крем, сгущенное молоко, ванилин",
    allergens: ["Глютен", "Молочные продукты", "Яйца"],
    technique: "Воздушный бисквит, многослойная сборка с кремом",
    prepTime: "4 часа",
    nutritionalInfo: { 
      calories: 420, 
      protein: 8, 
      carbs: 52, 
      fat: 20,
      fiber: 1,
      sugar: 38
    },
    tags: ["Молочное", "Популярное", "Нежное"],
    availableHours: "24/7"
  }
];

// Helper functions
export const getProductsByCategory = (categoryId) => {
  return menuProducts.filter(product => product.category === categoryId);
};

export const getCategoryStats = () => {
  return menuCategories.map(category => ({
    ...category,
    count: getProductsByCategory(category.id).length,
    popularCount: getProductsByCategory(category.id).filter(p => p.isPopular).length,
    newCount: getProductsByCategory(category.id).filter(p => p.isNew).length
  }));
};

export const getBestsellerProducts = () => {
  return menuProducts.filter(product => product.isBestseller);
};

export const getNewProducts = () => {
  return menuProducts.filter(product => product.isNew);
};

export const getPopularProducts = () => {
  return menuProducts.filter(product => product.isPopular);
};


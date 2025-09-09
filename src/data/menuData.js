// Enhanced menu data structure for grouped display
export const menuCategories = [
  { 
    id: 'croissants', 
    name: 'Круассаны и венская выпечка', 
    icon: 'Croissant', 
    description: 'Традиционные французские круассаны с хрустящей корочкой',
    color: 'from-amber-500 to-orange-500'
  },
  { 
    id: 'pastries', 
    name: 'Французские пирожные', 
    icon: 'Cake', 
    description: 'Изысканные десерты по классическим рецептам',
    color: 'from-pink-500 to-rose-500'
  },
  { 
    id: 'breads', 
    name: 'Ремесленный хлеб', 
    icon: 'Wheat', 
    description: 'Свежий хлеб, выпекаемый ежедневно',
    color: 'from-yellow-600 to-amber-600'
  },
  { 
    id: 'seasonal', 
    name: 'Сезонные специальности', 
    icon: 'Sparkles', 
    description: 'Лимитированные предложения по сезону',
    color: 'from-purple-500 to-indigo-500'
  }
];

export const dietaryFilters = [
  { id: 'halal', name: 'Халяль сертификат', icon: 'Star', color: 'text-green-600' },
  { id: 'vegan', name: 'Веганский', icon: 'Leaf', color: 'text-emerald-600' },
  { id: 'gluten-free', name: 'Без глютена', icon: 'Shield', color: 'text-blue-600' },
  { id: 'sugar-free', name: 'Без сахара', icon: 'Heart', color: 'text-red-600' }
];

export const menuProducts = [
  {
    id: 1,
    name: "Круассан классический",
    shortName: "Классический",
    description: "Традиционный французский круассан со слоистой маслянистой выпечкой, выпекаемый свежим каждые 2 часа",
    detailedDescription: "Наш фирменный классический круассан изготавливается по традиционной французской технологии ламинирования. 81 слой масла создают неповторимую слоистую текстуру, а свежие ингредиенты гарантируют исключительный вкус.",
    price: 350,
    originalPrice: null,
    image: "/Фотки/Круассан классик.png",
    category: 'croissants',
    subcategory: 'classic',
    dietary: ['halal'],
    rating: 4.8,
    reviewCount: 124,
    inStock: true,
    isNew: false,
    isPopular: true,
    isBestseller: true,
    ingredients: "Французское масло, органическая мука, свежие дрожжи, морская соль, молоко",
    allergens: ["Глютен", "Молочные продукты"],
    technique: "Традиционная техника ламинирования с 81 слоем масла",
    prepTime: "2 часа",
    nutritionalInfo: { 
      calories: 280, 
      protein: 6, 
      carbs: 32, 
      fat: 14,
      fiber: 2,
      sugar: 4
    },
    tags: ["Классика", "Популярное", "24/7"],
    availableHours: "24/7"
  },
  {
    id: 2,
    name: "Круассан с шоколадом",
    shortName: "Шоколадный",
    description: "Маслянистый круассан с премиальным бельгийским темным шоколадом",
    detailedDescription: "Сочетание нашего классического круассана с высококачественным бельгийским шоколадом 70% какао. Каждый кусочек тает во рту, создавая идеальный баланс сладости и маслянистости.",
    price: 580,
    originalPrice: null,
    image: "/Фотки/Круассан с шоколадом.png",
    category: 'croissants',
    subcategory: 'filled',
    dietary: ['halal'],
    rating: 4.9,
    reviewCount: 98,
    inStock: true,
    isNew: false,
    isPopular: true,
    isBestseller: false,
    ingredients: "Тесто круассан, бельгийский темный шоколад (70% какао)",
    allergens: ["Глютен", "Молочные продукты", "Может содержать орехи"],
    technique: "Ручная раскатка с премиальным шоколадом, двойная расстойка",
    prepTime: "2.5 часа",
    nutritionalInfo: { 
      calories: 420, 
      protein: 8, 
      carbs: 45, 
      fat: 22,
      fiber: 3,
      sugar: 18
    },
    tags: ["Шоколад", "Премиум", "Популярное"],
    availableHours: "24/7"
  },
  {
    id: 3,
    name: "Круассан с фисташкой",
    shortName: "Фисташковый",
    description: "Круассан с начинкой из богатого фисташкового крема и посыпанный дроблеными фисташками",
    detailedDescription: "Эксклюзивный круассан с натуральным фисташковым кремом, приготовленным из отборных сицилийских фисташек. Посыпка из дробленых фисташек добавляет приятную текстуру и усиливает ореховый аромат.",
    price: 580,
    originalPrice: null,
    image: "/Фотки/Круассан с фисташкой.png",
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
    image: "/Фотки/Круассан с миндалем.png",
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
    name: "Круассан со сгущенкой",
    shortName: "Сгущенка",
    description: "Сладкий круассан с начинкой из нежного сгущенного молока, вкус детства",
    detailedDescription: "Ностальгический вкус детства в изысканном французском исполнении. Домашняя сгущенка с легкой карамельной ноткой идеально дополняет маслянистое тесто.",
    price: 580,
    originalPrice: null,
    image: "/Фотки/Круассан со сгущенкой.png",
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
    name: "Круассан с сыром",
    shortName: "Сырный",
    description: "Слоеный круассан с расплавленным сыром и зеленью",
    detailedDescription: "Сытный вариант круассана с качественным сыром моцарелла и свежей зеленью. Идеальный выбор для легкого завтрака или перекуса.",
    price: 550,
    originalPrice: null,
    image: "/Фотки/Круассан с сыром.png",
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
    tags: ["Сытное", "Сыр", "Завтрак"],
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


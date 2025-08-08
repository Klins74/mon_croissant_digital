import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const HeritageSection = ({ currentLanguage }) => {
  const content = {
    en: {
      title: "French Heritage, Local Heart",
      subtitle: "Where traditional artistry meets cultural respect",
      storyTitle: "Our Story",
      storyText: `Born from a passion for authentic French baking and deep respect for local traditions, Mon Croissant bridges two worlds. Our master bakers trained in Lyon and Paris bring centuries-old techniques to Kazakhstan, while honoring halal principles and local tastes.\n\nEvery recipe tells a story of cultural harmony - from our buttery croissants made with premium halal butter to our pain au chocolat crafted with Belgian chocolate that meets Islamic dietary laws.`,
      valuesTitle: "Our Values",
      values: [
        {
          title: "Authentic Craftsmanship",
          description: "Traditional French techniques passed down through generations",
          icon: "Hammer"
        },
        {
          title: "Cultural Respect",
          description: "Honoring local traditions while maintaining French authenticity",
          icon: "Heart"
        },
        {
          title: "Quality Promise",
          description: "Premium ingredients sourced with care and certified halal",
          icon: "Shield"
        },
        {
          title: "Community Connection",
          description: "Building bridges between cultures through shared love of food",
          icon: "Users"
        }
      ],
      learnMore: "Learn More About Us"
    },
    ru: {
      title: "Французское наследие, местное сердце",
      subtitle: "Где традиционное мастерство встречается с культурным уважением",
      storyTitle: "Наша история",
      storyText: `Рожденный из страсти к аутентичной французской выпечке и глубокого уважения к местным традициям, Mon Croissant соединяет два мира. Наши мастера-пекари, обученные в Лионе и Париже, привносят вековые техники в Казахстан, соблюдая халяльные принципы и местные вкусы.\n\nКаждый рецепт рассказывает историю культурной гармонии - от наших масляных круассанов из премиального халяльного масла до пан-о-шокола из бельгийского шоколада, соответствующего исламским диетическим законам.`,
      valuesTitle: "Наши ценности",
      values: [
        {
          title: "Подлинное мастерство",
          description: "Традиционные французские техники, передаваемые через поколения",
          icon: "Hammer"
        },
        {
          title: "Культурное уважение",
          description: "Почитание местных традиций при сохранении французской аутентичности",
          icon: "Heart"
        },
        {
          title: "Обещание качества",
          description: "Премиальные ингредиенты, тщательно отобранные и сертифицированные халяль",
          icon: "Shield"
        },
        {
          title: "Связь с сообществом",
          description: "Строительство мостов между культурами через общую любовь к еде",
          icon: "Users"
        }
      ],
      learnMore: "Узнать больше о нас"
    },
    kz: {
      title: "Француз мұрасы, жергілікті жүрек",
      subtitle: "Дәстүрлі шеберлік пен мәдени құрметтің кездесетін жері",
      storyTitle: "Біздің тарихымыз",
      storyText: `Түпнұсқа француз наубайшылығына деген құмарлық пен жергілікті дәстүрлерге терең құрметтен туған Mon Croissant екі әлемді жалғастырады. Лион мен Парижде дайындалған біздің шебер наубайшылар ғасырлық техникаларды Қазақстанға әкеледі, халал принциптері мен жергілікті дәмдерді құрметтей отырып.\n\nӘр рецепт мәдени үйлесімнің тарихын айтады - премиум халал майынан жасалған майлы круассандардан бастап ислам диеталық заңдарына сәйкес келетін бельгиялық шоколадтан жасалған пан-о-шоколаға дейін.`,
      valuesTitle: "Біздің құндылықтарымыз",
      values: [
        {
          title: "Түпнұсқа шеберлік",
          description: "Ұрпақтан ұрпаққа берілетін дәстүрлі француз техникалары",
          icon: "Hammer"
        },
        {
          title: "Мәдени құрмет",
          description: "Француз түпнұсқалығын сақтай отырып, жергілікті дәстүрлерді құрметтеу",
          icon: "Heart"
        },
        {
          title: "Сапа уәдесі",
          description: "Мұқият таңдалған және халал сертификатталған премиум ингредиенттер",
          icon: "Shield"
        },
        {
          title: "Қоғамдастықпен байланыс",
          description: "Тағамға деген ортақ махabbat арқылы мәдениеттер арасында көпір салу",
          icon: "Users"
        }
      ],
      learnMore: "Біз туралы көбірек білу"
    }
  };

  const currentContent = content?.[currentLanguage] || content?.en;

  const heritageImages = [
    "https://images.pexels.com/photos/4686821/pexels-photo-4686821.jpeg",
    "https://images.pexels.com/photos/4686822/pexels-photo-4686822.jpeg",
    "https://images.pexels.com/photos/4686823/pexels-photo-4686823.jpeg",
    "https://images.pexels.com/photos/4686824/pexels-photo-4686824.jpeg"
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-background via-card to-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            {currentContent?.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {currentContent?.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Story Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon name="BookOpen" size={24} className="text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground">
                {currentContent?.storyTitle}
              </h3>
            </div>

            <div className="prose prose-lg max-w-none">
              {currentContent?.storyText?.split('\n\n')?.map((paragraph, index) => (
                <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
            >
              <span className="font-medium">{currentContent?.learnMore}</span>
              <Icon name="ArrowRight" size={16} />
            </motion.button>
          </motion.div>

          {/* Heritage Images Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {heritageImages?.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative overflow-hidden rounded-lg ${
                  index === 0 ? 'col-span-2 h-48' : 'h-32'
                }`}
              >
                <Image
                  src={src}
                  alt={`Heritage image ${index + 1}`}
                  className="w-full h-full object-cover golden-hour hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                
                {/* Cultural Elements Overlay */}
                {index === 0 && (
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl">🇫🇷</span>
                        <span className="text-white text-sm font-medium">French Tradition</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-white text-sm font-medium">Local Heart</span>
                        <span className="text-2xl">🇰🇿</span>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-8"
        >
          <div className="text-center">
            <h3 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-4">
              {currentContent?.valuesTitle}
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentContent?.values?.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="artisanal-card p-6 text-center bg-card hover:shadow-warm-lg transition-all duration-300 cultural-element"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={value?.icon} size={28} className="text-primary" />
                </div>
                
                <h4 className="text-lg font-heading font-semibold text-card-foreground mb-3">
                  {value?.title}
                </h4>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value?.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Cultural Bridge Visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-8 p-8 bg-primary/5 rounded-2xl border border-primary/10">
            <div className="text-center">
              <div className="text-4xl mb-2">🥐</div>
              <div className="text-sm font-medium text-foreground">French Artistry</div>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="w-8 h-0.5 bg-primary"></div>
              <Icon name="Heart" size={20} className="text-primary" />
              <div className="w-8 h-0.5 bg-primary"></div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-2">🕌</div>
              <div className="text-sm font-medium text-foreground">Local Values</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeritageSection;
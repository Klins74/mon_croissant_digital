import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const QualityAssuranceSection = ({ currentLanguage }) => {
  const content = {
    en: {
      title: "Quality You Can Trust",
      subtitle: "Certified excellence in every bite",
      certifications: [
        {
          name: "Halal Certified",
          description: "Certified by Islamic Organization of Kazakhstan",
          icon: "Shield",
          verified: true
        },
        {
          name: "EAEU Standards",
          description: "Meets Eurasian Economic Union food safety standards",
          icon: "Award",
          verified: true
        },
        {
          name: "Artisanal Quality",
          description: "Traditional French techniques with premium ingredients",
          icon: "Star",
          verified: true
        }
      ],
      viewCertificates: "View Certificates",
      qualityPromise: "Our Promise",
      promiseText: "Every pastry is crafted with the finest ingredients, following traditional French methods while maintaining strict halal standards."
    },
    ru: {
      title: "Качество, которому можно доверять",
      subtitle: "Сертифицированное совершенство в каждом кусочке",
      certifications: [
        {
          name: "Халяль сертификат",
          description: "Сертифицировано Исламской организацией Казахстана",
          icon: "Shield",
          verified: true
        },
        {
          name: "Стандарты ЕАЭС",
          description: "Соответствует стандартам безопасности пищевых продуктов ЕАЭС",
          icon: "Award",
          verified: true
        },
        {
          name: "Ремесленное качество",
          description: "Традиционные французские техники с премиальными ингредиентами",
          icon: "Star",
          verified: true
        }
      ],
      viewCertificates: "Посмотреть сертификаты",
      qualityPromise: "Наше обещание",
      promiseText: "Каждая выпечка изготавливается из лучших ингредиентов по традиционным французским методам с соблюдением строгих халяльных стандартов."
    },
    kz: {
      title: "Сенуге болатын сапа",
      subtitle: "Әр тістегенде сертификатталған керемет",
      certifications: [
        {
          name: "Халал сертификаты",
          description: "Қазақстанның Ислам ұйымы сертификаттаған",
          icon: "Shield",
          verified: true
        },
        {
          name: "ЕАЭО стандарттары",
          description: "Еуразиялық экономикалық одақтың азық-түлік қауіпсіздігі стандарттарына сәйкес",
          icon: "Award",
          verified: true
        },
        {
          name: "Қолөнер сапасы",
          description: "Премиум ингредиенттермен дәстүрлі француз техникасы",
          icon: "Star",
          verified: true
        }
      ],
      viewCertificates: "Сертификаттарды көру",
      qualityPromise: "Біздің уәдеміз",
      promiseText: "Әр тәтті ең жақсы ингредиенттерден дәстүрлі француз әдістерімен қатаң халал стандарттарын сақтай отырып жасалады."
    }
  };

  const currentContent = content?.[currentLanguage] || content?.en;

  const certificationImages = [
    "https://images.pexels.com/photos/6205509/pexels-photo-6205509.jpeg",
    "https://images.pexels.com/photos/6205510/pexels-photo-6205510.jpeg",
    "https://images.pexels.com/photos/6205511/pexels-photo-6205511.jpeg"
  ];

  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-card-foreground mb-4">
            {currentContent?.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {currentContent?.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Certifications Grid */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {currentContent?.certifications?.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="certification-badge bg-background p-6"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name={cert?.icon} size={24} className="text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-lg font-heading font-semibold text-card-foreground">
                        {cert?.name}
                      </h3>
                      {cert?.verified && (
                        <div className="flex items-center space-x-1">
                          <Icon name="CheckCircle" size={16} className="text-green-600" />
                          <span className="text-xs text-green-600 font-medium">Verified</span>
                        </div>
                      )}
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {cert?.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* View Certificates Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-4"
            >
              <button className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors">
                <Icon name="ExternalLink" size={16} />
                <span className="text-sm font-medium">{currentContent?.viewCertificates}</span>
              </button>
            </motion.div>
          </motion.div>

          {/* Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Certificate Images Grid */}
            <div className="grid grid-cols-2 gap-4">
              {certificationImages?.map((src, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative overflow-hidden rounded-lg"
                >
                  <Image
                    src={src}
                    alt={`Quality certification ${index + 1}`}
                    className="w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </motion.div>
              ))}
            </div>

            {/* Quality Promise Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="artisanal-card p-6 bg-primary/5 border border-primary/20"
            >
              <div className="flex items-center space-x-2 mb-3">
                <Icon name="Heart" size={20} className="text-primary" />
                <h3 className="text-lg font-heading font-semibold text-card-foreground">
                  {currentContent?.qualityPromise}
                </h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {currentContent?.promiseText}
              </p>
            </motion.div>

            {/* Trust Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-4"
            >
              <div className="text-center p-4 bg-background rounded-lg">
                <div className="text-2xl font-heading font-bold text-primary mb-1">100%</div>
                <div className="text-xs text-muted-foreground">Halal</div>
              </div>
              <div className="text-center p-4 bg-background rounded-lg">
                <div className="text-2xl font-heading font-bold text-primary mb-1">24/7</div>
                <div className="text-xs text-muted-foreground">Fresh</div>
              </div>
              <div className="text-center p-4 bg-background rounded-lg">
                <div className="text-2xl font-heading font-bold text-primary mb-1">5★</div>
                <div className="text-xs text-muted-foreground">Quality</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QualityAssuranceSection;
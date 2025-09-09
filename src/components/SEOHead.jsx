import React from 'react';
import { Helmet } from 'react-helmet';
import { useLanguage } from '../contexts/LanguageContext';
import { organizationInfo } from '../data/menuData';

const SEOHead = ({ 
  title,
  description,
  image,
  url,
  type = 'website',
  product = null,
  category = null
}) => {
  const { t, currentLanguage } = useLanguage();

  // Default values
  const defaultTitle = t(organizationInfo.name);
  const defaultDescription = t({
    RU: "Mon Croissant - французская выпечка в Алматы. Круассаны, пирожные, хлеб. Доставка 24/7. Халяль сертификат.",
    KZ: "Mon Croissant - Алматыдағы француз наны. Круассандар, тортиктер, нан. Жеткізу 24/7. Халал сертификаты.",
    EN: "Mon Croissant - French bakery in Almaty. Croissants, pastries, bread. Delivery 24/7. Halal certified."
  });
  const defaultImage = "/images/og-image.jpg";
  const baseUrl = "https://mon-croissant.almaty";

  // Generate structured title
  const fullTitle = title 
    ? `${title} | ${defaultTitle}`
    : defaultTitle;

  // Generate canonical URL
  const canonicalUrl = url 
    ? `${baseUrl}${url}`
    : baseUrl;

  // Generate structured data for product
  const generateProductStructuredData = () => {
    if (!product) return null;

    return {
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": t(product.name),
      "description": t(product.description),
      "image": product.images?.main || product.image,
      "brand": {
        "@type": "Brand",
        "name": "Mon Croissant"
      },
      "offers": {
        "@type": "Offer",
        "price": product.price,
        "priceCurrency": "KZT",
        "availability": product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
        "seller": {
          "@type": "Organization",
          "name": "Mon Croissant"
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": product.rating,
        "reviewCount": product.reviewCount
      },
      "nutrition": product.nutritionalInfo ? {
        "@type": "NutritionInformation",
        "calories": `${product.nutritionalInfo.calories} kcal`,
        "proteinContent": `${product.nutritionalInfo.protein}g`,
        "carbohydrateContent": `${product.nutritionalInfo.carbs}g`,
        "fatContent": `${product.nutritionalInfo.fat}g`
      } : undefined
    };
  };

  // Generate structured data for restaurant
  const generateRestaurantStructuredData = () => ({
    "@context": "https://schema.org",
    "@type": "Bakery",
    "name": "Mon Croissant",
    "description": defaultDescription,
    "url": baseUrl,
    "telephone": organizationInfo.contacts.phone,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Алматы",
      "addressCountry": "KZ"
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "servesCuisine": ["French", "Bakery"],
    "priceRange": "$$",
    "acceptsReservations": "false",
    "takeaway": "true",
    "delivery": "true"
  });

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={t({
        RU: "круассан, французская выпечка, пекарня, Алматы, доставка, халяль",
        KZ: "круассан, француз наны, нан дүкені, Алматы, жеткізу, халал",
        EN: "croissant, french bakery, pastry, Almaty, delivery, halal"
      })} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="language" content={currentLanguage.toLowerCase()} />

      {/* Open Graph Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Mon Croissant" />
      <meta property="og:locale" content={
        currentLanguage === 'RU' ? 'ru_RU' : 
        currentLanguage === 'KZ' ? 'kk_KZ' : 'en_US'
      } />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={image || defaultImage} />

      {/* Product specific meta tags */}
      {product && (
        <>
          <meta property="product:price:amount" content={product.price} />
          <meta property="product:price:currency" content="KZT" />
          <meta property="product:availability" content={product.inStock ? "in stock" : "out of stock"} />
          <meta property="product:brand" content="Mon Croissant" />
          <meta property="product:category" content={category ? t(category.name) : ''} />
        </>
      )}

      {/* Mobile Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="theme-color" content="#D4A574" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(generateRestaurantStructuredData())}
      </script>
      
      {product && (
        <script type="application/ld+json">
          {JSON.stringify(generateProductStructuredData())}
        </script>
      )}

      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    </Helmet>
  );
};

export default SEOHead;

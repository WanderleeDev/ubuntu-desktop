export interface ISchemaMarkup {
  "@context": string;
  "@type": string;
  "name": string;
  "applicationCategory": string;
  "operatingSystem": string;
  "softwareVersion": string;
  "offers": Offer;
  "publisher": Publisher;
  "screenshot": string;
  "releaseNotes": string;
  "featureList": string;
  "downloadUrl": string;
  "fileSize": string;
  "aggregateRating"?: AggregateRating;
  "review"?: Review[];
}

interface Offer {
  "@type": string;
  "price": string;
  "priceCurrency": string;
}

interface Publisher {
  "@type": string;
  "name": string;
  "logo": ImageObject;
}

interface ImageObject {
  "@type": string;
  "url": string;
}

interface AggregateRating {
  "@type": string;
  "ratingValue": string;
  "reviewCount": number;
}

interface Review {
  "@type": string;
  "author": Person;
  "datePublished": string;
  "description": string;
  "reviewRating": Rating;
}

interface Person {
  "@type": string;
  "name": string;
}

interface Rating {
  "@type": string;
  "bestRating": string;
  "worstRating": string;
  "ratingValue": string;
}

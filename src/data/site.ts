/* Central SEO entity binding for wayangmuseum.com.
   Single source of truth for the "single-attraction SEO entity" variables.
   Mirrors the variable table used across the guide's structured data, TDK, and content. */

export const SITE_DOMAIN = 'wayangmuseum.com';
export const SITE_URL = `https://${SITE_DOMAIN}`;

/* SEO site-name format: attraction + city + guide descriptor. */
export const SITE_NAME_ID = 'Museum Wayang Jakarta — Panduan Pengunjung';
export const SITE_NAME_EN = 'Museum Wayang Jakarta — Visitor Guide';

export const attraction = {
  fullName: 'Museum Wayang',
  shortName: 'Wayang Museum',
  city: 'Jakarta',
  stateProvince: 'DKI Jakarta',
  country: 'Indonesia',
  countryCode: 'ID',
  postalCode: '11110',
  streetAddress: 'Jl. Pintu Besar Utara No. 27, Pinangsia, Taman Sari',
  district: 'Jakarta Barat',
  latitude: -6.134611,
  longitude: 106.812714,
  mapsShareUrl: 'https://maps.app.goo.gl/vh98zoiskQniENPV6',
  mapsEmbedSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.968545408292!2d106.80973051244983!3d-6.134928693826295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1dff48f259ff%3A0xfeb6bfd7e15db853!2z5pyo5YG25Y2a54mp6aaG!5e0!3m2!1sid!2sid!4v1787189535362!5m2!1sid!2sid',
  nearbyLandmark1: 'Fatahillah Square',
  nearbyLandmark2: 'Jakarta History Museum',
  govtTourismUrl: 'https://www.jakarta.go.id',
  reviewRating: '4.5',
  reviewCount: '5197',
} as const;

/** Append the SEO site name to a page-specific suffix (used by subpages). */
export function withSiteName(suffix: string, lang: 'id' | 'en' = 'en'): string {
  const name = lang === 'id' ? SITE_NAME_ID : SITE_NAME_EN;
  return `${suffix} | ${name}`;
}

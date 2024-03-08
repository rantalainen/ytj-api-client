export interface YtjApiClientOptions {
  userId: string;
  apiKey: string;
  timestamp?: string;

  ticket?: string;
  apiBaseUrl?: string;
  language?: Language;
}

export type AuthBody = {
  kieli: Language;
  asiakastunnus: string;
  aikaleima: string;
  tarkiste?: string;
  tiketti?: string;
};

export type Language = 'fi' | 'sv' | 'en';

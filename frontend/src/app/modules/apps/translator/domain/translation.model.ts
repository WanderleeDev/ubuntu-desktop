export interface TranslationState {
  textBase: string;
  translation: string;
  error: string | null;
  loading: boolean;
}

export interface LanguageOptions {
  from: string;
  to: string;
}

export type ActionLanguageType = "from" | "to";

export interface Language {
  no: string;
  name: string;
  native: string;
  code: string;
}

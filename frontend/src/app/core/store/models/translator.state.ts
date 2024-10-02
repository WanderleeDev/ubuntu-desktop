export interface ITranslatorState {
  to: string;
  from: string;
  loading: boolean;
  error: string | null;
  translation: string;
  text: string;
  history: string[];
}

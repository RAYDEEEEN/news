import { Language } from '@shared/enums/language.enum';

export interface Source {
  id: string;

  name: string;

  description: string;

  url: string;

  category: string;

  language: Language;

  country: string;
}

export interface ResultSourceApi {
  status: string;
  sources: Source[];
}

import { Source } from './source.interface';

export interface Article {
  source: Partial<Source>;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface resultArticleApi {
  status: string;
  totalResults: number;
  artciles: Article[];
}

export class NewsDTO {
  title: string;
  description: string;
}

export type TNews = {
  _id: string;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
};

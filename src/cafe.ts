export class CafeDTO {
  title: string;
  description: string;
}

export type TCafe = {
  _id: string;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
};

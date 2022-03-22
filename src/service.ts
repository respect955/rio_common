export class ServiceDTO {
  title: string;
  description: string;
}

export type TService = {
  _id: string;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
};

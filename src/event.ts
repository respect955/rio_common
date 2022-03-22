export class EventDTO {
  title: string;
  description: string;
}

export type TEvent = {
  _id: string;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
};

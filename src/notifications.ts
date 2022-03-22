export class NotificationsDTO {
  title: string;
  description: string;
}

export type TNotification = {
  _id: string;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  readed: boolean;
  ticket?: number;
};

export class RestaurantDTO {
  title: string;
  description: string;
}

export type TRestaurant = {
  _id: string;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
};

export type TCard = {
  Id: number;
  Barcode: string;
  BarcodeType: "EAN13";
  TypeCard: string;
  ActivationDay: Date;
  Active: boolean;
  Wholesale: boolean;
  blocked: boolean;
};

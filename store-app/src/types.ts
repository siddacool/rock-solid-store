export type ProductId = string;

export interface IProduct {
  id?: ProductId;
  title?: string;
  price?: number;
  description?: string;
  category?: string;
  image?: string;
  rating?: { rate: number; count: number };
}

export interface ICatalogState {
  loading: boolean;
  list: IProduct[];
}

export interface IProductState {
  loading: boolean;
  data: IProduct;
}

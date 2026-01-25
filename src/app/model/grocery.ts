export interface Igrocery {
  count: number;
  page: number;
  page_size: number;
  skip: number;

  products: {
    id?: string;
    code?: string;
    product_name?: string;
    brands?: string;
    categories?: string;
    quantity?: string;

    image_url?: string;
    image_front_url?: string;

    ingredients_text?: string;
    countries?: string;

    nutriments?: {
      energy?: number;
      energy_kcal?: number;
      fat?: number;
      carbohydrates?: number;
      sugars?: number;
      proteins?: number;
      salt?: number;
    };
  }[];
}

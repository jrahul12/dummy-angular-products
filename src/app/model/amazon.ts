export interface AmazonProduct {
    _id: string;
    title: string;
    seller_name: string;
    brand: string;
    description: string;
    initial_price: number;
    final_price: number;
    currency: string;
    availability: string;
    reviews_count: number;
    categories: string[];
    asin: string;
    buybox_seller: string;
    number_of_sellers: number;
    root_bs_rank: number;
    answered_questions: number;
    domain: string;
    images_count: number;
    url: string;
    video_count: number;
    image_url: string;
    item_weight: string;
    rating: number;
    product_dimensions: string;
    seller_id: string;
    date_first_available: string;
    discount: string;
    model_number: string;
    manufacturer: string;
    department: string;
    plus_content: boolean;
    upc: string;
    video: boolean;
    top_review: string;

    variations: Variation[];
    delivery: string[];
    features: string[];

    buybox_prices: BuyboxPrices;

    parent_asin: string;
    bought_past_month: number;
    is_available: boolean;
    root_bs_category: string;
    bs_category: string;
    bs_rank: number;

    images: string[];

    product_details: ProductDetail[];

    prices_breakdown: PricesBreakdown;

    country_of_origin: string;

    from_the_brand: string[];

    product_description: ProductMedia[];

    seller_url: string;
    customer_says: string;
    climate_pledge_friendly: boolean;

    videos: string[];

    other_sellers_prices: OtherSellerPrice[];
}

export interface Variation {
    asin: string;
    color: string;
    currency: string;
    image: string;
    name: string;
    price: number;
    size: string;
    unit_price: number | null;
}

export interface BuyboxPrices {
    discount: string;
    final_price: number;
    initial_price: number;
    sns_price: {
        base_price: number;
        tiered_price: number;
    };
    unit_price: number | null;
}

export interface ProductDetail {
    type: string;
    value: string;
}

export interface PricesBreakdown {
    deal_type: string | null;
    list_price: number;
    typical_price: number | null;
}

export interface ProductMedia {
    type: 'image' | 'video';
    url: string;
}

export interface OtherSellerPrice {
    delivery: string;
    num_of_ratings: number;
    price: number;
    price_per_unit: number | null;
    seller_name: string;
    seller_rating: number;
    seller_url: string;
    ships_from: string;
    unit: string | null;
}

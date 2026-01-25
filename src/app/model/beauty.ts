export interface Ibeauty {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;

    dimensions: {
        width: number;
        height: number;
        depth: number;
    };

    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;

    reviews: {
        rating: number;
        comment: string;
        date: string; // or Date
        reviewerName: string;
        reviewerEmail: string;
    }[];

    returnPolicy: string;
    minimumOrderQuantity: number;

    meta: {
        createdAt: string; // or Date
        updatedAt: string; // or Date
        barcode: string;
        qrCode: string;
    };

    images: string[];
    thumbnail: string;
}

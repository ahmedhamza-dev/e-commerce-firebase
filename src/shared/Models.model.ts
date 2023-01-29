export interface ProductData{
    id: string;
    productName: string;
    imgUrl: string;
    category: string;
    price: number;
    shortDesc: string;
    description: string;
    reviews: {
        rating: number;
        text: string;
    };
    avgRating: number;
    quantity: number,
    totalPrice: number,
}
export interface UserData {
    displayName: string,
    email: string,
    photoUrl: string,
    uid: string
}
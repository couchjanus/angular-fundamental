export class Product {
    title: string;
    price: number;
    category: string;
    imageUrl: string;
    key: string;
}

export class KeyedProduct extends Product {
    key: string;
}

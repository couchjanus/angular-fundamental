import { ShoppingCartItem } from './shopping-cart-item';
import { Product } from './product';

export class ShoppingCart {
    items: ShoppingCartItem[] = [];

    constructor(private itemsMap: { [key: string]: ShoppingCartItem }) {
        this.itemsMap = itemsMap || {};

        for (const key of Object.keys(this.itemsMap)) {
            const item = this.itemsMap[key];
            this.items.push(new ShoppingCartItem({ key: key, ...item }));
        }
    }

    public get totalItemsCount(): number {
        let itemsCount = 0;
        // tslint:disable-next-line:forin
        for (const productId in this.itemsMap) {
           itemsCount += this.itemsMap[productId].quantity;
        }

        return itemsCount;
    }

    public get totalPrice(): number {
        let total = 0;
        for (const item of this.items) {
            total += item.totalPrice;
        }
        return total;
    }

    getQuantity(product: Product) {
        const item = this.itemsMap[product.key];
        return item ? item.quantity : 0;
    }
}

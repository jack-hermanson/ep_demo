export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
}

export function sortProducts(product1: Product, product2: Product) {
    return product1.title.toLowerCase() < product2.title.toLocaleLowerCase()
        ? -1
        : 1;
}

export function shortenProductName(product: Product): string {
    if (product.title.length < 30) {
        return product.title;
    }

    return product.title.substring(0, 30) + "...";
}

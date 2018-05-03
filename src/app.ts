interface sizes {
    sizes: string[];
}

interface Pizza extends sizes{
    name: string;
    toppings?: number;
    getAvailableSizes(): string[]
}

let pizza : Pizza;

function createPizza(name: string, sizes: string[]) : Pizza {
    return{
        name,
        sizes,
        getAvailableSizes(){
            return this.sizes;
        }
    };
}

pizza = createPizza('veg garden fresh', ['S', 'M', 'L', 'XL']);

console.log(pizza.name);
console.log(pizza.sizes);
console.log(pizza.getAvailableSizes());

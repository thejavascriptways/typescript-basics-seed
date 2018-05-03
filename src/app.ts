interface Pizza{
    name: string;
    sizes: string[];
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


let pizza : { name : string, price: number , getName(): string} = {

    name: 'Veg pizza',
    price: 25,
    getName(){
        return pizza.name
    }
};

console.log(pizza.getName());
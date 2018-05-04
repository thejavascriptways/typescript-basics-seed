class Sizes {

    constructor(public sizes: string[]){};
    
    set availableSizes(sizes: string[]) {
         this.sizes =sizes;
    }

    get availableSizes() {
       return this.sizes;
   }

}


class Pizza extends Sizes{

   toppings: string[] = [];

    constructor (name: string, sizes: string[]) {
        super(sizes);
    }
        

    addToppings(topping: string){

        this.toppings.push(topping);
    }

    removeToppings(){
        this.toppings.pop();
    }

}

const pizza = new Pizza("Garden Fresh", ['S', 'M', 'L']);

console.log(pizza.availableSizes);

pizza.availableSizes= ['L','XL', 'JUMBO'];

console.log(pizza.availableSizes);

pizza.addToppings('Onions');
pizza.addToppings('Tomatoes');
pizza.addToppings('Olives');

console.log(pizza);


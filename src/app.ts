interface SizesInterface{

    availableSizes: string[];
}


abstract class Sizes implements SizesInterface {

    constructor(protected sizes: string[]){};
    
    set availableSizes(sizes: string[]) {
         this.sizes =sizes;
    }

    get availableSizes() {
       return this.sizes;
   }

}

interface PizzaInterface extends SizesInterface {
    readonly name: string;
    toppings: string[];
    addToppings(topping: string): void;
    updateSizes(sizes: string[]): void;
}

class Pizza extends Sizes implements PizzaInterface{

   toppings: string[] = [];

    constructor (readonly name: string, sizes: string[]) {
        super(sizes);
    }
        

    addToppings(topping: string){

        this.toppings.push(topping);
    }

    updateSizes(sizes: string[]){
        this.sizes = sizes;
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

pizza.updateSizes(['JUMBO', "DADDY JUMBO"]);
console.log(pizza);


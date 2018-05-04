class Pizza{

    name: string;

    toppings: string[] = [];

    constructor (name: string) {
        this.name = name;
    }

    addToppings(topping: string){

        this.toppings.push(topping);
    }

    removeToppings(){
        this.toppings.pop();
    }

}

const pizza = new Pizza("Garden Fresh");

pizza.addToppings('Onions');
pizza.addToppings('Tomatoes');
pizza.addToppings('Olives');

console.log(pizza);

pizza.removeToppings();

console.log(pizza);

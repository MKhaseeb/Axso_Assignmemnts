class Ninja{
    constructor(name,health){
        this.name = name
        this.health = health
        this.speed = 5
        this.strength = 3
    }
    sayName(){
        console.log(`Your name is ${this.name}`);
    }
    showStats(){
        console.log(`Ninja name is ${this.name} | Strength: ${this.strength} | Speed: ${this.speed} | Health: ${this.health}`);
    }
    drinkSake(){
        this.health += 10
    }
}
const ninja = new Ninja("Khaseeb", 100);
ninja.sayName();
ninja.showStats();
ninja.drinkSake();
ninja.showStats();

class Sensei extends Ninja{
    constructor(){
        super("sensei",150)
        this.wisdom =  10

    }
    speakWisdom(){
        super.drinkSake();
    }
}
const sensei = new Sensei();
sensei.speakWisdom();
sensei.showStats();
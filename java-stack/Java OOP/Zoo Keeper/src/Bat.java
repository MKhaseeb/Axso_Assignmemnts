public class Bat extends Mammal {

    public void batEnergy(){
        System.out.println("Bat energy: " + energy);
    }

    public void fly() {
        energy = energy - 50;
        System.out.println("Bat mow airborne. Bat's energy: " + energy);

    }

    public void eatHumans() {
        energy = energy + 25;
        System.out.println("The bat feels satisfied. Bat's energy: " + energy);
    }

    public void attackTown(){
        energy = energy - 100;
        System.out.println("The bat attacked town. Bat's energy: " + energy);
    }


}

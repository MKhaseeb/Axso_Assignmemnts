public class Gorilla extends Mammal {

    public void gorillaEnergy(){
        System.out.println("Gorilla energy: " + energy);
    }

    public void throwSomething() {
        energy = energy - 10;
        System.out.println("The gorilla has thrown a rock. Gorilla's energy " + energy);
    }

    public void eatBananas() {
        energy = energy + 10;
        System.out.println("The gorilla has eaten bananas. He's so happy! Gorilla's energy: " + energy);
    }

    public void climb(){
        energy = energy - 10;
        System.out.println("The gorilla has climbed a tree. Gorilla's energy: " + energy);
    }
}

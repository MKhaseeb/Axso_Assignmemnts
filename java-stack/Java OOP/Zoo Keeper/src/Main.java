//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
       System.out.println("------------Gorilla----------");
        Gorilla g = new Gorilla();
        g.setEnergy(100);
        g.gorillaEnergy(); 
        g.throwSomething();
        g.throwSomething();
        g.throwSomething();
        g.eatBananas();
        g.eatBananas();
        g.climb();
        g.gorillaEnergy();
        System.out.println("------------Bat----------");
        Bat t = new Bat();
        t.setEnergy(300);
        t.batEnergy();
        t.attackTown();
        t.attackTown();
        t.attackTown();
        t.eatHumans();
        t.eatHumans();
//        t.fly();
        t.batEnergy();




    }
}
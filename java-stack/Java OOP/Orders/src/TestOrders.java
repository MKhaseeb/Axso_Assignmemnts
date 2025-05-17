import java.util.ArrayList;
public class TestOrders {
    public static void main(String[] args) {

        // Menu items
        item item1 = new item();
        item1.name = "mocha";
        item1.price = 3.50;

        item item2 = new item();
        item2.name = "latte";
        item2.price = 4.50;

        item item3 = new item();
        item3.name = "drip coffe";
        item3.price = 5.50;

        item item4 = new item();
        item4.name = "cappuccino";
        item4.price = 6.50;


        // Order variables -- order1, order2 etc.
        Order order1 = new Order();
        order1.name = "Rami";

        Order order2 = new Order();
        order2.name = "Jimmy";

        Order order3 = new Order();
        order3.name = "Noah";

        Order order4 = new Order();
        order4.name = "Sam";



        // Application Simulations



        order2.items.add(item1);
        order2.total += item1.price;
        order2.ready  = true;

        order3.items.add(item4);
        order3.total += item4.price;

        order4.items.add(item4);
        order4.total += item4.price + item2.price + item2.price;


        order1.ready = true;


        // Use this example code to test various orders' updates
        System.out.println("----- Order1-----");
        System.out.printf("Name: %s\n", order1.name);
        System.out.printf("Total: %s\n", order1.total);
        System.out.printf("Ready: %s\n", order1.ready);

        System.out.println("----- Order2-----");
        System.out.printf("Name: %s\n", order2.name);
        System.out.printf("Total: %s\n", order2.total);
        System.out.printf("Ready: %s\n", order2.ready);

        System.out.println("----- Order3-----");
        System.out.printf("Name: %s\n", order3.name);
        System.out.printf("Total: %s\n", order3.total);
        System.out.printf("Ready: %s\n", order3.ready);

        System.out.println("----- Order4-----");

        System.out.printf("Name: %s\n", order4.name);
        System.out.printf("Total: %s\n", order4.total);
        System.out.printf("Ready: %s\n", order4.ready);

        System.out.println("-------------------------");

    }

}
import java.util.ArrayList;
public class TestOrders {
    public static void main(String[] args) {

        // Menu items
        Item item1 = new Item("mocha", 3.50);


        Item item2 = new Item("latte" , 4.50);


        Item item3 = new Item("drip coffe", 5.50);


        Item item4 = new Item("cappuccino" ,6.50);





        // Order variables -- order1, order2 etc.
        Order order1 = new Order("");
        order1.setName( "Rami");

        Order order2 = new Order();
        order2.setName( "Jimmy");

        Order order3 = new Order();
        order3.setName( "Noah");

        Order order4 = new Order();
        order4.setName( "Sam");




        // Application Simulations



        order2.getItems().add(item1);
        order2.setTotal(order2.getTotal()+item1.getPrice());
        order2.setReady(true);

        order3.getItems().add(item4);
        order3.setTotal(order3.getTotal()+item4.getPrice());


        order4.getItems().add(item4);
        order4.setTotal(order4.getTotal()+item2.getPrice()+item2.getPrice()+item4.getPrice());


        order1.setReady(true);


        // Use this example code to test various orders' updates
       Order.displayOrders(new Order[]{order1, order2, order3, order4});

        System.out.println(order1.getStatusMessage());

    }

}
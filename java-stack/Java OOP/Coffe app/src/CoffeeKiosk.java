import java.util.ArrayList;

public class CoffeeKiosk {
    private ArrayList<Item> menu;
    private ArrayList<Order> orders;

    public CoffeeKiosk() {
        this.menu = new ArrayList<Item>();
        this.orders = new ArrayList<Order>();
    }

    public void newOrder(){

    }



    public ArrayList<Order> getOrders() {
        return orders;
    }

    public ArrayList<Item> getMenu() {
        return menu;
    }

    public CoffeeKiosk(ArrayList<Item> menu, ArrayList<Order> orders) {
        this.menu = menu;
        this.orders = orders;
    }

    public void addMenuItem(String mame,double price) {
        Item newItem = new Item(mame, price);
        newItem.setIndex(menu.size());
        menu.add(newItem);
    }

    public void displayMenu() {
        for (int i = 0; i < this.menu.size(); i++) {
            Item item = this.menu.get(i);
            System.out.println(i + " " + item.getName() + " -- $" + item.getPrice());
        }
    }

    public void newOrder(String mame , double price ) {

        // Shows the user a message prompt and then sets their input to a variable, name
        System.out.println("Please enter customer name for new order:");
        String name = System.console().readLine();

        // Your code:
        Order newOrder = new Order(name);

        // Create a new order with the given input string
        // Show the user the menu, so they can choose items to add.
            displayMenu();
        // Prompts the user to enter an item number
        System.out.println("Please enter a menu item index or q to quit:");
        String itemNumber = System.console().readLine();

        // Write a while loop to collect all user's order items
        while(!itemNumber.equals("q")) {
            int index = Integer.parseInt(itemNumber);
            Item item = this.menu.get(index);
            newOrder.addItem(item);

            System.out.println("Item " + item.getName() + " added to the order");
            System.out.println("Please enter a menu item index or q to quit:");
            itemNumber = System.console().readLine();
            // Get the item object from the menu, and add the item to the order
            // Ask them to enter a new item index or q again, and take their input
        }
        // After you have collected their order, print the order details

    }

}






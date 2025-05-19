import java.util.ArrayList;

public class Order {
    private String name;
    private double total;
    private boolean ready;
    private ArrayList<Item> items;

    public Order(){
        this.name = "Guest";
        this.ready = false;
        this.items = new ArrayList<Item>();
    }

    public Order(String name){
        this.name = name;
        this.ready = false;
        this.items = new ArrayList<Item>();
    }

    public void addItem(Item item){
        this.items.add(item);
    }

    public String getStatusMessage(){
        if(this.ready){
            return "Your order is ready.";
        }
        return "Thank you for waiting. Your order will be ready soon.";
    }
    public double getOrderTotal(){
        double total = 0;
        for(Item order : this.items){
            total += order.getPrice();
        }
        return total;
    }
    public static void Orders(Order[] orders){
        for(Order order : orders){
            System.out.println("-------------------------");
            System.out.printf("Name: %s\n", order.getName());
            System.out.printf("Total: %s\n", order.getTotal());
            System.out.printf("Ready: %s\n", order.isReady());

        }

    }


//    public static void displayOrders(Item[] items){
//        for(Item item : items){
//            System.out.println("-------------------------");
//            System.out.printf("Name: %s\n", item.getName());
//            System.out.printf("Total: %s\n", item.getTotal());
//            System.out.printf("Ready: %s\n", item.isReady());
//
//        }


    public void displayOrder(){
        for (Item item : this.items) {
            System.out.println(item.getName()+": "+item.getPrice());
        }
    }
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getTotal() {
        return total;
    }

    public void setTotal(double total) {
        this.total = total;
    }

    public boolean isReady() {
        return ready;
    }

    public void setReady(boolean ready) {
        this.ready = ready;
    }

    public ArrayList<Item> getItems() {
        return items;
    }

    public void setItems(ArrayList<Item> items) {
        this.items = items;
    }
}


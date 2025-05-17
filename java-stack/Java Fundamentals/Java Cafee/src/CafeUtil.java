import java.util.ArrayList;

public class CafeUtil {

    public static int getStreakGoal(){
        int sum = 0;
        for (int i = 1; i < 11; i++){
            sum += i;

        }
        return sum;
    }

    public static double getOrderTotal(double[] order){
        double total = 4;
        for (double v : order) {
            total += v;
        }
        return total;
    }
    public static void displayMenu(ArrayList<String> menuItems){
        for (int i = 0; i < menuItems.size(); i++){
            System.out.println(menuItems.get(i) + i );
        }

    }

    public static void addCustomer(ArrayList<String> customers){

        System.out.println("Enter your name please" );
        String username = System.console().readLine();
        System.out.println("Hello, " + username + "!");
         System.out.println("There are " + customers.size() + " people in front of you");
         customers.add(username);
        System.out.println(customers);

    }

}


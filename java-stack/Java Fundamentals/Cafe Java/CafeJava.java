public class CafeJava {
    public static void main(String[] args) {
        // APP VARIABLES
        // Lines of text that will appear in the app. 
        String generalGreeting = "Welcome to Cafe Java, ";
        String pendingMessage = ", your order will be ready shortly";
        String readyMessage = ", your order is ready";
        String displayTotalMessage = "Your total is $";
        
        // Menu variables (add yours below)
        double mochaPrice = 3.5;
        double dripCoffe = 12;
        double latte = 6;
        double cappuccino = 8;
    
        // Customer name variables (add yours below)
        String customer1 = "Shatha";
        String customer2 = "Ahmad";
        String customer3 = "Sali";
        String customer4 = "Adam";
    
        // Order completions (add yours below)
        boolean isReadyOrder1 = false;
        boolean isReadyOrder2 = true;
        boolean isReadyOrder3 = false;
        boolean isReadyOrder4 = true;
    
        // APP INTERACTION SIMULATION (Add your code for the challenges below)
        // Example:


    if(isReadyOrder1)  {
        System.out.println(generalGreeting + customer1 + readyMessage + displayTotalMessage + mochaPrice);
    }
    else{
        System.out.println(generalGreeting + customer1 + pendingMessage);
    }
        // ** Your customer interaction print statements will go here ** //

    if(isReadyOrder2)  {
        System.out.println(generalGreeting + customer2 + readyMessage + displayTotalMessage + dripCoffe);
    }
    else{
        System.out.println(generalGreeting + customer2 + pendingMessage);
    }

    if(isReadyOrder3)  {
        System.out.println(generalGreeting + customer3 + readyMessage + displayTotalMessage + latte);
    }
    else{
        System.out.println(generalGreeting + customer3 + pendingMessage);
    }

    if(isReadyOrder4)  {
        System.out.println(generalGreeting + customer4 + readyMessage + displayTotalMessage + cappuccino);
    }
    else{
        System.out.println(generalGreeting + customer4 + pendingMessage);
    }

    }
}
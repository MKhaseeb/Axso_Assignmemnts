public class CafeUtil {

    public int getStreakGoal(){
        int sum = 0;
        for (int i = 1; i < 11; i++){
            sum += i;

        }
        return sum;
    }
}
class Order{
    public double getOrderTotal(double[]order){
        double total = 4;
        for (int j = 0; j < order.length; j++){
            total += order[j];
        }
        return total;
    }
}
//class ArrayList{
//    public ArrayList(<String>){}
//
//}
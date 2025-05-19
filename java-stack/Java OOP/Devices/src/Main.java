//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main extends Phone{
    public static void main(String[] args) {
        Device phone = new Device();
        Phone p = new Phone();

        System.out.println("Remaining battery: " + p.getBattery());

        System.out.println("i made a phone call: " + p.makeCall());

        System.out.println("i made a phone call: " + p.makeCall());

        System.out.println("i made a phone call: " + p.makeCall());

        System.out.println("I played a game: " + p.playGame());

        System.out.println("I played a game: " + p.playGame());

        System.out.println("I charged the phone: " + p.charge());

        System.out.println("Remaining battery: " + p.getBattery());
    }
}
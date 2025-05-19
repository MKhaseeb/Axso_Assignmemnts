public class Phone extends Device {

    public int makeCall(){
        battery = battery - 5;
        return battery;
    }

    public int playGame(){
        battery = battery - 20;
        return battery;
    }

    public int charge(){
        if (battery < 50)
            battery = battery + 50;
        else
            setBattery(100);
        return battery;
    }



}

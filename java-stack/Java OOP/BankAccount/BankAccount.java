public class BankAccount {
    // MEMBER VARIABLES
    private double checkingBalance;
    private double savingsBalance;

    private static int accounts;
    private static double totalMoney; // refers to the sum of all bank account checking and savings balances
    
    // CONSTRUCTOR
    
    public BankAccount(double checkingBalance, double savingsBalance) {
        this.checkingBalance = checkingBalance;
        this.savingsBalance = savingsBalance;
    }
    // Be sure to increment the number of accounts
    
    // GETTERS
    public double getCheckingBalance() {
        return checkingBalance;
    }

    public void setCheckingBalance(double checkingBalance) {
        this.checkingBalance = checkingBalance;
    }

    public double getSavingsBalance() {
        return savingsBalance;
    }

    public void setSavingsBalance(double savingsBalance) {
        this.savingsBalance = savingsBalance;
    }

    public static int getAccounts() {
        return accounts;
    }

    public static void setAccounts(int accounts) {
        BankAccount.accounts = accounts;
    }

    public static double getTotalMoney() {
        return totalMoney;
    }

    public static void setTotalMoney(double totalMoney) {
        BankAccount.totalMoney = totalMoney;
    }

    
    // for checking, savings, accounts, and totalMoney

    // METHODS
    // deposit
    public void depositToChecking(double amount){
        double balance = getCheckingBalance();
        setCheckingBalance(balance+amount);
    }
    public void depositToSavings(double amount){
        double balance = getSavingsBalance();
        setSavingsBalance(balance+amount);
    }
    // - users should be able to deposit money into their checking or savings account
    // withdraw 
    public void withdrawFromChecking(double amount){
        double balance = getCheckingBalance();
        setCheckingBalance(balance-amount);
    }
    public void withdrawFromSavings(double amount){
        double balance = getSavingsBalance();
        if(balance<amount){
            System.out.println("not enough money");
        }
        else{
            setSavingsBalance(balance-amount);
        }
    }
    public double totalMoney(){
        checkingBalance =getCheckingBalance();
        savingsBalance = getSavingsBalance();
        return checkingBalance+savingsBalance; 
    }
    // - users should be able to withdraw money from their checking or savings account
    // - do not allow them to withdraw money if there are insufficient funds
    // - all deposits and withdrawals should affect totalMoney
    // getBalance
    // - display total balance for checking and savings of a particular bank account
}


// Made by Khaseeb
// Made by Khaseeb
// Made by Khaseeb
// Made by Khaseeb
// Made by Khaseeb
// Made by Khaseeb
// Made by Khaseeb
// Made by Khaseeb
// Made by Khaseeb
// Made by Khaseeb
// Made by Khaseeb
// Made by Khaseeb
// Made by Khaseeb
// Made by Khaseeb 
// Bahha was useless
// Bahha was useless
// Bahha was useless
// Bahha was useless
// Bahha was useless
// Bahha was useless
public class BankAccount {
    // MEMBER VARIABLES
    private int accountNumber;
    private double balance;
    private String accountHolder;
    private double checkingBalance;
    private double savingsBalance;
    private static int accounts;
    private static double totalMoney; // refers to the sum of all bank account checking and savings balances

    // CONSTRUCTOR
    // Be sure to increment the number of accounts

    public BankAccount(int accountNumber, double savingsBalance,String accountHolder, double balance) {
        this.accountNumber = accountNumber;
        this.savingsBalance = savingsBalance;
        this.accountHolder = accountHolder;
        this.balance = balance;

        accounts++;
        totalMoney += checkingBalance + savingsBalance;
    }

    // GETTERS

    public static int getAccounts() {

        return accounts;
    }

    public double getSavingsBalance() {
        return savingsBalance;
    }

    public static double getTotalMoney() {
        return totalMoney;
    }

    public double getCheckingBalance() {

        return balance + savingsBalance;
//        return savingsBalance;

    }


    // for checking, savings, accounts, and totalMoney

    // METHODS
    // deposit
    public void deposit(double amount) {
        balance += amount;
        totalMoney += amount;
    }
    // - users should be able to deposit money into their checking or savings account

    // withdraw
    public void withdraw(double amount) {
        if (amount > balance) {
            System.out.println("Insufficient funds");
        }
        balance -= amount;
        totalMoney -= amount;
        savingsBalance -= amount;
    }
    // - users should be able to withdraw money from their checking or savings account
    // - do not allow them to withdraw money if there are insufficient funds
    // - all deposits and withdrawals should affect totalMoney
    // getBalance
    public double getBalance() {
        return totalMoney;
    }
    // - display total balance for checking and savings of a particular bank account
}
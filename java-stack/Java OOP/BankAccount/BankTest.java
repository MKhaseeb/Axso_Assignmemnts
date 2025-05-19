public class BankTest {
    public static void main(String[] args) {
        // Create 3 bank accounts
        BankAccount bankaccount1 = new BankAccount(0, 0);
        BankAccount bankaccount2 = new BankAccount(0, 0);
        BankAccount bankaccount3 = new BankAccount(0, 0);
        // Deposit Test
        // - deposit some money into each bank account's checking or savings account and
        // display the balance each time
        bankaccount1.depositToChecking(1000);
        bankaccount1.depositToSavings(1000);
        bankaccount2.depositToChecking(1000);
        bankaccount2.depositToSavings(1000);
        bankaccount3.depositToChecking(1000);
        bankaccount3.depositToSavings(1000);
        System.out.println("Ahmad your balance is" + bankaccount1.totalMoney());
        System.out.println("Bahaa your balance is" + bankaccount2.totalMoney());
        System.out.println("Khaseeb your balance is" + bankaccount3.totalMoney());

        // - each deposit should increase the amount of totalMoney

        // Withdrawal Test
        bankaccount1.withdrawFromChecking(500);
        bankaccount2.withdrawFromChecking(700);
        bankaccount3.withdrawFromChecking(600);
        // - withdraw some money from each bank account's checking or savings account
        // and display the remaining balance
        System.out.println("Ahmad your balance is" + bankaccount1.totalMoney());
        System.out.println("Bahaa your balance is" + bankaccount2.totalMoney());
        System.out.println("Khaseeb your balance is" + bankaccount3.totalMoney());
        // - each withdrawal should decrease the amount of totalMoney

        // Static Test (print the number of bank accounts and the totalMoney)

    }
}
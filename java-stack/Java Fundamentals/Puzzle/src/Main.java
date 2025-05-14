//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        PuzzleJava puzzle = new PuzzleJava();
//        int[] nums=puzzle.getTenRolls();
//        for(int i=0;i<nums.length;i++) {
//            System.out.println(nums[i]);
//        }
//        System.out.println(puzzle.getRandomLetter());
//        System.out.println(puzzle.generatePassword());

        String[] password=puzzle.getNewPasswordSet(3);
        for(int i=0;i<password.length;i++){
            System.out.println(password[i]);
        }
    }


}
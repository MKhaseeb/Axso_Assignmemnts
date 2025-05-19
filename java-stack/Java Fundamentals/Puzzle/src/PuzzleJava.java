import java.util.Random;

public class PuzzleJava {

    public int[] getTenRolls(){
        Random rand = new Random();
        int[] r = new int[10];
        for(int i = 0; i < 10; i++){
            r[i] = rand.nextInt(20)+1;
        }
        return r;
    }
    public char getRandomLetter(){
        char [] letters = new char[26];
        Random rand = new Random();
        for(int i = 0; i < letters.length; i++){
            letters[i] = (char)('a' + i);
        }
        return letters[rand.nextInt(letters.length)];
    }

    public String generatePassword(){
        char [] letters = new char[26];
        Random rand = new Random();
        for(int i = 0; i < letters.length; i++){
            letters[i] = (char)('a' + i);
        }

        char[] password = new char[8];
        for(int i = 0; i < password.length; i++){
            password[i] = letters[rand.nextInt(letters.length)];
        }
        return new String(password);
    }
    public String[] getNewPasswordSet(int x){
        String[] passwordSet = new String[x];
        char [] letters = new char[26];
        Random rand = new Random();
        for(int i = 0; i < letters.length; i++){
            letters[i] = (char)('a' + i);
        }

        char[] password = new char[8];


        for(int j = 0; j < x; j++){
            for(int i = 0; i < password.length; i++){
                password[i] = letters[rand.nextInt(letters.length)];
            }
            passwordSet[j] = new String(password);
        }
        return passwordSet;
    }

}

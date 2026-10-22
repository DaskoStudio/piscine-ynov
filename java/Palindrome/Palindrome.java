public class Palindrome {
    public static boolean isPalindrome(String s) {
        if (s == null) return false;
        
        String lower = s.toLowerCase();
        int left  = 0;
        int right = lower.length() - 1;

        while (left < right) {
            if (lower.charAt(left) != lower.charAt(right)) return false;
            left++;
            right--;
        }

        return true;
    }
}
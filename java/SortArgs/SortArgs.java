import java.util.Arrays;

public class SortArgs {
    public static void sort(String[] args) {
        if (args == null || args.length == 0) {
            System.out.println();
            return;
        }

        double[] nums = new double[args.length];
        for (int i = 0; i < args.length; i++) {
            nums[i] = Double.parseDouble(args[i]);
        }

        Arrays.sort(nums);

        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < nums.length; i++) {
            if (i > 0) sb.append(' ');
            // Print as int if whole number, otherwise as decimal
            if (nums[i] == (long) nums[i]) sb.append((long) nums[i]);
            else sb.append(nums[i]);
        }
        System.out.println(sb);
    }
}
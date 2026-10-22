public class DoOp {
    public static String operate(String[] args) {
        if (args == null || args.length != 3) return "Error";

        long left  = Long.parseLong(args[0]);
        String op  = args[1];
        long right = Long.parseLong(args[2]);

        switch (op) {
            case "+": return String.valueOf(left + right);
            case "-": return String.valueOf(left - right);
            case "*": return String.valueOf(left * right);
            case "/": return right == 0 ? "Error" : String.valueOf(left / right);
            case "%": return right == 0 ? "Error" : String.valueOf(left % right);
            default:  return "Error";
        }
    }
}
import java.io.*;

public class Capitalize {
    public static void capitalize(String[] args) throws IOException {
        if (args.length < 2) {
            return;
        }

        try (
            BufferedReader reader = new BufferedReader(new FileReader(args[0]));
            BufferedWriter writer = new BufferedWriter(new FileWriter(args[1]))
        ) {
            String line;
            boolean firstLine = true;
            while ((line = reader.readLine()) != null) {
                if (!firstLine) writer.write('\n');
                firstLine = false;
                
                String[] words = line.trim().split("\\s+");
                StringBuilder result = new StringBuilder();

                for (String word : words) {
                    if (!word.isEmpty()) {
                        if (result.length() > 0) result.append(' ');
                        result.append(String.valueOf(word.charAt(0)).toUpperCase());
                        result.append(word.substring(1).toLowerCase());
                    }
                }

                writer.write(result.toString());
            }
        }
    }
}
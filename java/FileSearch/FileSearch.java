import java.io.*;

public class FileSearch {
    public static String searchFile(String fileName) {
        return search(new File("documents"), fileName);
    }

    private static String search(File dir, String fileName) {
        File[] files = dir.listFiles();
        if (files == null) return null;

        for (File f : files) {
            if (f.isDirectory()) {
                String found = search(f, fileName);
                if (found != null) return found;
            } else if (f.getName().equals(fileName)) {
                return f.getPath();
            }
        }
        return null;
    }
}
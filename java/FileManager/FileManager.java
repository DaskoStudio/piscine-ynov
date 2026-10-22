import java.io.*;
import java.nio.file.*;

public class FileManager {
    public static void createFile(String fileName, String content) throws IOException {
        Files.writeString(Paths.get(fileName), content);
    }

    public static String getContentFile(String fileName) throws IOException {
        return Files.readString(Paths.get(fileName));
    }

    public static void deleteFile(String fileName) {
        new File(fileName).delete();
    }
}
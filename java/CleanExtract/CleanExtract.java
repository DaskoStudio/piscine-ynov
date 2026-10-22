public class CleanExtract {
    public static String extract(String s) {
        String[] parts = s.split("\\|");
        StringBuilder result = new StringBuilder();

        for (String part : parts) {
            String trimmed = part.trim();
            if (trimmed.isEmpty()) continue;

            int firstDot = trimmed.indexOf('.');
            int lastDot  = trimmed.lastIndexOf('.');

            String extracted;
            if (firstDot == -1) {
                // No dots at all — keep the whole trimmed substring
                extracted = trimmed;
            } else if (firstDot == lastDot) {
                // Exactly one dot — take everything after it
                extracted = trimmed.substring(firstDot + 1).trim();
            } else {
                // Multiple dots — take between first and last (exclusive)
                extracted = trimmed.substring(firstDot + 1, lastDot).trim();
            }

            if (!extracted.isEmpty()) {
                if (result.length() > 0) result.append(' ');
                result.append(extracted);
            }
        }

        return result.toString();
    }
}
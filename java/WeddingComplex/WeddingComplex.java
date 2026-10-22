import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Queue;

public class WeddingComplex {
    public static Map<String, String> createBestCouple(Map<String, List<String>> first, Map<String, List<String>> second) {
        Map<String, String> coupleFirstToSecond = new HashMap<>();
        Map<String, String> coupleSecondToFirst = new HashMap<>();
        Map<String, Integer> nextProposal = new HashMap<>();

        Queue<String> free = new LinkedList<>(first.keySet());
        for (String name : first.keySet()) nextProposal.put(name, 0);

        while (!free.isEmpty()) {
            String proposer = free.poll();
            List<String> prefs = first.get(proposer);
            int idx = nextProposal.get(proposer);
            String candidate = prefs.get(idx);
            nextProposal.put(proposer, idx + 1);

            if (!coupleSecondToFirst.containsKey(candidate)) {
                coupleFirstToSecond.put(proposer, candidate);
                coupleSecondToFirst.put(candidate, proposer);
            } else {
                String current = coupleSecondToFirst.get(candidate);
                List<String> candPrefs = second.get(candidate);
                if (candPrefs.indexOf(proposer) < candPrefs.indexOf(current)) {
                    coupleFirstToSecond.put(proposer, candidate);
                    coupleSecondToFirst.put(candidate, proposer);
                    coupleFirstToSecond.remove(current);
                    free.add(current);
                } else {
                    free.add(proposer);
                }
            }
        }
        return coupleFirstToSecond;
    }
}
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;

public class Wedding {
    public static Map<String, String> createCouple(Set<String> first, Set<String> second) {
        Map<String, String> result = new HashMap<>();
        Iterator<String> it1 = first.iterator();
        Iterator<String> it2 = second.iterator();
        while (it1.hasNext() && it2.hasNext()) {
            result.put(it1.next(), it2.next());
        }
        return result;
    }
}
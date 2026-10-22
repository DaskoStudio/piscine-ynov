import java.util.ArrayList;
import java.util.List;

public class ListSearchIndex {
    public static Integer findLastIndex(List<Integer> list, Integer value) {
        if (list == null) return null;
        int idx = list.lastIndexOf(value);
        return idx == -1 ? null : idx;
    }

    public static Integer findFirstIndex(List<Integer> list, Integer value) {
        if (list == null) return null;
        int idx = list.indexOf(value);
        return idx == -1 ? null : idx;
    }

    public static List<Integer> findAllIndexes(List<Integer> list, Integer value) {
        if (list == null) return new ArrayList<>();
        List<Integer> result = new ArrayList<>();
        for (int i = 0; i < list.size(); i++) {
            if (list.get(i).equals(value)) result.add(i);
        }
        return result;
    }
}
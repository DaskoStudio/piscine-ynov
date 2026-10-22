import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.TreeSet;

public class KeepTheChange {
    public static List<Integer> computeChange(int amount, Set<Integer> coins) {
        List<Integer> result = new ArrayList<>();
        List<Integer> sortedCoins = new ArrayList<>(new TreeSet<>(coins));
        sortedCoins.sort((a, b) -> b - a);
        for (int coin : sortedCoins) {
            while (amount >= coin) {
                result.add(coin);
                amount -= coin;
            }
        }
        return result;
    }
}
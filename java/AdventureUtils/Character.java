public class Character {
    private final int maxHealth;
    private int currentHealth;
    private final String name;
    private static java.util.List<Character> allCharacters = new java.util.ArrayList<>();

    public Character(String name, int maxHealth) {
        this.name = name;
        this.maxHealth = maxHealth;
        this.currentHealth = maxHealth;
        allCharacters.add(this);
    }

    public int getMaxHealth() { return maxHealth; }
    public int getCurrentHealth() { return currentHealth; }
    public String getName() { return name; }

    @Override
    public String toString() {
        if (currentHealth == 0) return name + " : KO";
        return name + " : " + currentHealth + "/" + maxHealth;
    }

    public void takeDamage(int amount) {
        currentHealth = Math.max(0, currentHealth - amount);
    }

    public void attack(Character target) {
        target.takeDamage(9);
    }

    public static String printStatus() {
        StringBuilder sb = new StringBuilder();
        sb.append("------------------------------------------\n");
        if (allCharacters.isEmpty()) {
            sb.append("Nobody's fighting right now !\n");
        } else {
            sb.append("Characters currently fighting :\n");
            for (Character c : allCharacters) {
                sb.append(" - ").append(c.toString()).append("\n");
            }
        }
        sb.append("------------------------------------------\n");
        return sb.toString();
    }

    public static Character fight(Character a, Character b) {
        while (a.currentHealth > 0 && b.currentHealth > 0) {
            a.attack(b);
            if (b.currentHealth == 0) break;
            b.attack(a);
        }
        return a.currentHealth > 0 ? a : b;
    }
}

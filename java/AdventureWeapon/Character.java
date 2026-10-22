public abstract class Character {
    private final int maxHealth;
    private int currentHealth;
    private final String name;
    private final Weapon weapon;
    private static java.util.List<Character> allCharacters = new java.util.ArrayList<>();

    public Character(String name, int maxHealth, Weapon weapon) {
        this.name = name;
        this.maxHealth = maxHealth;
        this.currentHealth = maxHealth;
        this.weapon = weapon;
        allCharacters.add(this);
    }

    public int getMaxHealth() { return maxHealth; }
    public int getCurrentHealth() { return currentHealth; }
    public String getName() { return name; }
    public Weapon getWeapon() { return weapon; }
    protected void setCurrentHealth(int health) { this.currentHealth = health; }

    public abstract void attack(Character target);
    public abstract void takeDamage(int amount);

    @Override
    public String toString() {
        if (currentHealth == 0) return name + " : KO";
        return name + " : " + currentHealth + "/" + maxHealth;
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

    public static void resetCharacters() {
        allCharacters.clear();
    }

    public static Character fight(Character a, Character b) {
        while (a.getCurrentHealth() > 0 && b.getCurrentHealth() > 0) {
            a.attack(b);
            if (b.getCurrentHealth() == 0) break;
            b.attack(a);
        }
        return a.getCurrentHealth() > 0 ? a : b;
    }
}
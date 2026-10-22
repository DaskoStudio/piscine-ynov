public class Sorcerer extends Character implements Healer {
    private final int healCapacity;

    public Sorcerer(String name, int maxHealth, int healCapacity, Weapon weapon) {
        super(name, maxHealth, weapon);
        this.healCapacity = healCapacity;
    }

    @Override
    public int getHealCapacity() { return healCapacity; }

    @Override
    public void heal(Character target) {
        target.setCurrentHealth(Math.min(target.getMaxHealth(), target.getCurrentHealth() + healCapacity));
    }

    @Override
    public void attack(Character target) {
        heal(this);
        int dmg = getWeapon() != null ? getWeapon().getDamage() : 10;
        target.takeDamage(dmg);
    }

    @Override
    public void takeDamage(int amount) {
        setCurrentHealth(Math.max(0, getCurrentHealth() - amount));
    }

    @Override
    public String toString() {
        String base = getCurrentHealth() == 0
            ? getName() + " is a dead sorcerer. So bad, it could heal " + healCapacity + " HP."
            : getName() + " is a sorcerer with " + getCurrentHealth() + " HP. It can heal " + healCapacity + " HP.";
        if (getWeapon() != null) base += " He has the weapon " + getWeapon().toString();
        return base;
    }
}
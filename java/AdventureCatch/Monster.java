public class Monster extends Character {

    public Monster(String name, int maxHealth, Weapon weapon) {
        super(name, maxHealth, weapon);
    }

    @Override
    public void attack(Character target) throws DeadCharacterException {
        if (getCurrentHealth() == 0) throw new DeadCharacterException(this);
        int dmg = getWeapon() != null ? getWeapon().getDamage() : 7;
        target.takeDamage(dmg);
    }

    @Override
    public void takeDamage(int amount) throws DeadCharacterException {
        if (getCurrentHealth() == 0) throw new DeadCharacterException(this);
        setCurrentHealth(Math.max(0, getCurrentHealth() - (int)(amount * 0.8)));
    }

    @Override
    public String toString() {
        String base = getCurrentHealth() == 0
            ? getName() + " is a monster and is dead"
            : getName() + " is a monster with " + getCurrentHealth() + " HP";
        if (getWeapon() != null) base += ". He has the weapon " + getWeapon().toString();
        return base;
    }
}
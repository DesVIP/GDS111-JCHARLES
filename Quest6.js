class Player {
    constructor() {
        this.health = 0;
        this.armor = 0;
        this.weapon = 0;
        this.name = "";
    }

    setHealth(newHealth) {
        this.health = newHealth;
    }
    getHealth() {
        return this.health;
    }
    setArmor(newArmor) {
        this.armor = newArmor;
    }
    getArmor() {
        return this.armor;
    }
    setWeapon(newWeapon) {
        this.weapon = newWeapon;
    }
    getWeapon() {
        return this.weapon;
    }
    setName(newName) {
        this.name = newName;
    }
    getName() {
        return this.name;
    }
}

const Sora = new Player();
Sora.setHealth(10);
Sora.setArmor(0);
Sora.setWeapon(1000);
Sora.setName("Sora");
console.log("health: " + Sora.getHealth())
console.log("armor: " + Sora.getArmor())
console.log("weapon: " + Sora.getWeapon())
console.log("name: " + Sora.getName())

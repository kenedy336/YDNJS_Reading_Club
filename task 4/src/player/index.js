class Player {
    constructor({ health = 100, attack = 10, manna = 20 }, skills){
        this.health = health;
        this.attack = attack;
        this.baseArmor = 1.1;
        this.manna = manna;

        this.bodyParts = ["HEAD", "CHEST", "ARMS", "LEGS"];        

    }

    calculateAttack(){
        return this.attack + Math.random()*4 - 2;
    }

    calculateDamage(initialDamage){
        return initialDamage / this.baseArmor
    }

}


export default Player
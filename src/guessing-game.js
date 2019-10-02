class GuessingGame {
    constructor() {
        this.left ;
        this.rigth ;
        this.res ;
    }
    setRange(min, max) {
        this.left = min;
        this.rigth = max;
    }

    guess() {
        if((this.left+this.rigth)%2==1){
            this.res = Math.ceil((this.left+this.rigth)/2);
            return this.res;
        }
        else{
            this.res = (this.left+this.rigth)/2;
            return this.res;
        }
       
    }

    lower() {
       this.rigth = this.res;
    }

    greater() {
        this.left = this.res;
    }
}

module.exports = GuessingGame;

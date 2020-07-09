"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enemy = exports.Player = exports.Action = void 0;
//encapsulate
class Action {
    constructor(name) {
        this.ammo = 10;
        this.name = name;
    }
    shoot() {
        this.ammo = this.ammo - 1;
        console.log(this.name + "is shooting" + this.ammo + 'ammo');
    }
}
exports.Action = Action;
class Player extends Action {
}
exports.Player = Player;
class Enemy extends Action {
}
exports.Enemy = Enemy;
const player1 = new Player('Soumik');
const player2 = new Player('enemy');
player1.shoot();
player2.shoot();
//# sourceMappingURL=polyencapabs.js.map
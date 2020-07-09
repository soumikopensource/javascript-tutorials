
//encapsulate
export class Action{
    private readonly name;//encapsulate 
    private ammo=10;
constructor(name: string){
    this.name=name;
}
shoot(){
    this.ammo=this.ammo-1;
    console.log(this.name+"is shooting"+this.ammo+'ammo');
}
}

export class Player extends Action{

}

export class Enemy extends Action {

}
const player1=new Player('Soumik');
const player2=new Player('enemy');
player1.shoot();
player2.shoot();

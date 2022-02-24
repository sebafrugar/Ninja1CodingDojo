
class Ninja {
    constructor(name){
        this.name = name;
        this.salud = 60 ;
        this.velocidad = 3;
        this.fuerza = 3;
    }
        sayName() {
            console.log(`el Nombre del ninja es ${this.name}`);
        }

        showStats() {
            console.log(`nombre: ${this.name} , fuerza: ${this.fuerza} , velocidad: ${this.velocidad} , salud : ${this.salud}`)
        }

        drinkSake(){
            this.salud += 10;
            console.log(`Que rico sake !!! ... ahora la salud del ninja ahora es de ${this.salud}`)
        }

}
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

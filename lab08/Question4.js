function Animal(name, speed){
this.name=name;
this.speed=speed;
}

Animal.prototype.run = function(speed){
    this.speed += speed
    return this.speed;
}

Animal.compareBySpeed = function(a1,a2){
return a1.speed - a2.speed;
}

function Rabbit(name, speed){
    Animal.call(this, name, speed);
}
Rabbit.prototype.hide= function(){
   return this.name+" hides";
}

Object.setPrototypeOf(Rabbit, Animal);
Object.setPrototypeOf(Rabbit.prototype, Animal.prototype)


let rab1 = new Rabbit("rabbit1", 23);
let rab2 = new Rabbit("rabbit2", 17);

console.log(rab1.hide());
console.log(rab2.hide());

let rabits=[rab1,rab2];
// sorting the Rabbits by their speed before increasing their speed
console.log(rabits.sort(Animal.compareBySpeed));

console.log("rabit 1 increase speed to ", rab1.run(11));
console.log("rabit 2 increase speed to ", rab2.run(7));

// sorting the Rabbits by their speed after increasing their speed
console.log(rabits.sort(Animal.compareBySpeed));
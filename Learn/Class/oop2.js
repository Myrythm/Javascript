class Animal{

  constructor(name, age, isMammal){
      this.name = name;
      this.age= age
      this.isMammal = isMammal;
  }

}

class Rabbit extends Animal{

  constructor(name, age, isMammal, ){

        super(name, age, isMammal);

        this.isMammal = true;
        this.food =  "apel";
  }

eat(){

    return `${this.name} sudah makan! ${food}`;
}
umur(){
  
  return `${this.name} berumur ${this.age} tahun`
}

}



class Eagle extends Animal{

  constructor(name, age, isMamal){

      super(name, age, isMamal);

        this.isMammal= false;

  }

fly(){

    return `${this.name} sedang terbang!`

}

}



const myRabbit = new Rabbit("Labi",2);
const rabbit = new Rabbit("Udo",17);
const myEagle = new Eagle("Elo",4);


console.log(myRabbit.eat());
console.log(rabbit.umur());
console.log(myEagle.fly());


/**

* Jangan hapus kode di bawah ini

*/



module.exports = {

Animal, Rabbit, Eagle, myRabbit, myEagle,

};
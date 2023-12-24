const profile = {
    name: "Muhammad Azka Adhitama",
    age: 19,
    adress: "Jalan Peta",
    "Education":{
        univ: "UPI",
        kelas: "2B",

}

}
//destruct
const {name, age, adress, Education: {univ, kelas}} = profile
console.log(name, age, adress, univ, kelas);

const capital = new Map([
    ["Jakarta", "Indonesia"],
    ["London", "England"],
    ["Tokyo", "Japan"]
]);

console.log(capital.size);
console.log(capital.get("London"));
capital.set("New Delhi", "India");
console.log(capital.size);
console.log(capital.get("New Delhi"));


const mobil = new Map ([
    ["Toyota", "Inova", "Avanza"],
    ["Hyundai", "Palisade", "Creta"],
    ["BMW", ""]
])
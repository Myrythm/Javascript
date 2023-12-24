const user = {
    id: 24,
    displayName: 'kren',
    fullName: 'Kylo Ren',
};

function introduce({displayName, fullName}) {
    console.log(`${displayName} is ${fullName}`);
}

introduce(user);

function sayName(nama) {
    console.log('Halo ', (nama));
}

sayName("Adit");

const namae = namamu => console.log('Nama saya ', (namamu));
namae("Sopo")


/* output
kren is Kylo Ren
*/
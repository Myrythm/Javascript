/*
Pure Function merupakan konsep dari pembuatan fungsi yang mengharuskan 
fungsi untuk tidak bergantung terhadap nilai yang berada di luar fungsi atau parameternya.

*/

//impure function
const hitungLuasLingkaran = (jariJari) => {
    return PI * (jariJari * jariJari); 
  }
  
  let PI = 3.14;
  console.log(hitungLuasLingkaran(4)); // 50.24
  
  PI = 5; // tidak sengaja nilai PI berubah
  
  console.log(hitungLuasLingkaran(4)); // 80

  //Pure function

  const lLingkaran = (r) => {
    return 3.14 * r**2
  }

  console.log(lLingkaran(4)); //50.24
  console.log(lLingkaran(8)); //50.24
  
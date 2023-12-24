const name = 'Udin'
const faktorial = (a) => {

    if (a == 1) {
        return 1;
    }

    else if (a == 0) {
        return 0
    }
    else {
        return a * faktorial(a - 1);

    }
    
  } 
  
  console.log(faktorial(5));

console.log(`COUNTDOWN ${name}`);

  const count = (a) => {
    console.log(a);

    if (a > 0) count (a - 1);
  };

  count(5)
function even_or_odd(number) {
  if (number % 2 == 0){
    return "Even"
  }
  else if (number % 2 !== 0){
    console.log(`${number} is Odd` );
  }
}

even_or_odd(2);
even_or_odd(7);
function areYouPlayingBanjo(name) {
    // Implement me
    if(name.toLowerCase().charAt(0) == 'r' || name.toLowerCase().charAt(0) == 'R' ){
      return name + " plays bajo"
    }
    else{
      return name + " does not play banjo";
    }
    return name;
  }
  
  console.log(areYouPlayingBanjo("Ronaldo"));
  console.log(areYouPlayingBanjo("Penaldo"));
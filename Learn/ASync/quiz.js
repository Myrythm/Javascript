// TODO: 1

const fetchingUserFromInternet = (isOffline) => {

    return new Promise((resolve, reject) => {
  
      setTimeout(() => {
  
        if (isOffline){
  
          reject(new NetworkError('Gagal mendapatkan data dari internet'));}
  
        else{
  
          resolve({name: 'John', age: 18});}
  
      }, 500);
  
    });
  
  };
  
        
  
  
  
  
  
  // TODO: 2
  
  async function gettingUserName(isOffline){
  
    try{
  
      const result = await fetchingUserFromInternet(isOffline);
  
      return result.name;
  
    } catch (error){
  
      return error.message;
  
    }
  
  };
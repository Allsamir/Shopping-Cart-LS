const getItemFromLocalStorage = ():[] => {
          const localStorageData = localStorage.getItem('cart');
          if(localStorageData) {
                    return JSON.parse(localStorageData)
          }
          return []
}

const addToLS = (id: string) => {
          const dataFromLS: Array<string> = getItemFromLocalStorage();
          dataFromLS.push(id)
          saveToLS(dataFromLS)
}

const removeFromLS = (cartID: string): Array<string> => {
          let dataFromLS:Array<string> = getItemFromLocalStorage();
          dataFromLS = dataFromLS.filter(data => data !== cartID);
          saveToLS(dataFromLS)
          return dataFromLS
}

const saveToLS = (anArrayOfBottleID: Array<string>) => {
          const JSONData = JSON.stringify(anArrayOfBottleID)
          localStorage.setItem('cart', JSONData)
}         

export {addToLS, getItemFromLocalStorage, removeFromLS}
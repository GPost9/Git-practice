const objectifier = (array) => {
    let output = {}
    
   for (let i = 0; i < array.length; i++) {
       let key = array[i][0]
       output[key] = {}
       let values = array[i][1]

       for (let j = 0; j < values.length; j++) {
           if (j % 2 === 0) {
               output[key][values[j]] = values[j + 1]
           }
       }
   }
   return output
}
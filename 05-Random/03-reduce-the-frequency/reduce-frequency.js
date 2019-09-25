const strFrequency = (strings) => {
   return strings.reduce((obj, elem) => {
       if (obj[elem]) {
           obj[elem]++
       } else {
           obj[elem] = 1
       }

       return obj
   }, {})
}

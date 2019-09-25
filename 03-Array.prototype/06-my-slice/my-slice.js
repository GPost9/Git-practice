const mySlice = (array, begin = 0, end = array.length) => {
   let output = []

   if (begin < 0) begin = array.length + begin
   if (end < 0) end = array.length + end

   for (let i = begin; i < end; i++) {
       let currentVal = array[i]

       output.push(currentVal)
   }
   return output
}
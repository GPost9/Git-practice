const setPropsOnObj = (object) => {
   object.x = 7
   object['y'] = 8

   object.onePlus = function (val) {
       return val + 1
   }
}

const setPropsOnArr = (arrayObject) => {
    arrayObject.hello = function () {
        return 'Hello!'
    }

    arrayObject['full'] = 'stack'
    arrayObject[0] = 5

    arrayObject.twoTimes = function (val) {
        return val * 2
    }
}


const setPropsOnFunc = (functionObj) => {
  functionObj.year = '20??'
  functionObj.divideByTwo = function (num) {
    return num / 2
  }
}
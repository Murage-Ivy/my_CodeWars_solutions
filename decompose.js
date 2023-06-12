function decompose(num) {
    let count = 2;
    let array = []
    
    if(num === 0) {
      return [[], 0]
    }
    while(num != 0) {
      const floor = Math.floor(Math.log(num)/ Math.log(count))
      if(floor <= 1) {
        return [[...array], num]
      
      }
        
      else{
           array.push(floor)
  
      }
  
      
      if(num > 0) {
           num =   num - Math.pow(count, floor)
      count = count + 1
        if(num === 0) {
          return [[...array], num]
        }
      }
      
    
    }
  // return array
  }
  console.log(decompose(3))
  
  // console.log(Math.floor(Math.log(0)/ Math.log(3)))
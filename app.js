console.log('app started')

function numSums (nums, target){
 let arr =[]
 const filterLargerNumbers = nums.filter (num=>num< target). sort();
 filterLargerNumbers. some((item,i)=> {
  const index = nums.indexOf(target-item)

  if( index!=-1 || index >i){
    arr.push(item,nums[ index])
    return true
  }
  })
  console. log( arr)
  }
  numSums([3,5,11,10],8)
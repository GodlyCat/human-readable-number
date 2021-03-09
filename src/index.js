module.exports = function toReadable (number) {
    let myNumber = number.toString().split("").reverse();
    let arr = [];
    myNumber.map((item,index)=>{
       
           if(index===0 && +item!==0)  arr.push( n1(item));
           else if(myNumber[1]===undefined && +item===0) arr.push('zero')
           if(index===1 && +item===1) {arr[0]=""; arr.push( n2(item, myNumber[0]));}
           else if(index===1) arr.push( n2(item));
           if(index===2)  arr.push( n3(item));
       
    })
  
    
    return arr.reverse().filter((item)=>item===""?false:true).join(" ");
  
    function n1(item){
        switch(+item){
            case 1: return "one"
            case 2: return "two"
            case 3: return "three"
            case 4: return "four"
            case 5: return "five"
            case 6: return "six"
            case 7: return "seven"
            case 8: return "eight"
            case 9: return "nine"
            default: return ""
        }
    }
    function n2(item, sideItem){
        if(+item===1) switch(+sideItem){
          case 1: return "eleven"
          case 2: return "twelve"
          case 3: return "thirteen"
          case 4: return "fourteen"
          case 5: return "fifteen"
          case 6: return "sixteen"
          case 7: return "seventeen"
          case 8: return "eighteen"
          case 9: return "nineteen"
          case 0: return "ten"
      }
      else switch(+item){
          case 2: return "twenty"
          case 3: return "thirty"
          case 4: return "forty"
          case 5: return "fifty"
          case 6: return "sixty"
          case 7: return "seventy"
          case 8: return "eighty"
          case 9: return "ninety"
          default: return ""
      }
        
  }
  function n3(item){
      let sub= "";
      switch(+item){
          case 1: sub = "one"; break
          case 2: sub = "two" ; break
          case 3: sub = "three"; break
          case 4: sub = "four"; break
          case 5: sub = "five"; break
          case 6: sub = "six"; break
          case 7: sub = "seven"; break
          case 8: sub = "eight"; break
          case 9: sub = "nine"; break
          default: sub = ""; break
      }
      if (sub!=="") return sub+" hundred"
  }
  }
  
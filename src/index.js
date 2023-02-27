module.exports = function check(str, bracketsConfig) {
  const openBrackets = ['(','[','{', '|']; // указываем какие бывают открывающиеся скобки
    
  const bracketsPair = { // пара для скобок
      [')']: '(',
      [']']: '[',
      ['}']: '{',
      ['|']: '|',
  }
  
  function checkFirst(str) {
    
    const stack = [];
  
      for(let i=0; i<str.length; i++){
  
          const indexSymble = str[i];
  
          if(openBrackets.includes(indexSymble)){ // Метод includes() определяет, содержит ли массив определённый элемент, возвращая в зависимости от этого true или false.
              if(indexSymble == '|' && str.length !== 0){
                  let topElementSrack = stack[stack.length-1];
                  if(bracketsPair[indexSymble] == topElementSrack ){
                      stack.pop();
                    } else {
                      stack.push(indexSymble);
                  }
              } else {
                  stack.push(indexSymble);
              }
              
          } else {
              if (stack.length === 0) {
              return false;
              } else {
                  let topElementSrack = stack[stack.length-1];
  
                  if(bracketsPair[indexSymble] == topElementSrack ){
                    stack.pop();
                  } else {
                  return false;
                  }
  
              }
  
          }
   
          
      } 
      return stack.length == 0;
  }
  
  function checkSecond(bracketsConfig) {
  
      for (let j=0; j<bracketsConfig.length; j++){
  
          const stack = [];
  
          for(let i=0; i<bracketsConfig[j].length; i++){
  
          const indexSymble = bracketsConfig[j][i];
  
          if(openBrackets.includes(indexSymble)){ // Метод includes() определяет, содержит ли массив определённый элемент, возвращая в зависимости от этого true или false.
              if(indexSymble == '|' && str.length !== 0){
                  let topElementSrack = stack[stack.length-1];
                  if(bracketsPair[indexSymble] == topElementSrack ){
                      stack.pop();
                    } else {
                      stack.push(indexSymble);
                  }
              } else {
                  stack.push(indexSymble);
              }
          } else {
              if (stack.length === 0) {
              return false;
              } else {
                  let topElementSrack = stack[stack.length-1];
  
                  if(bracketsPair[indexSymble] == topElementSrack ){
                    stack.pop();
                  } else {
                  return false;
                  }
  
              }
  
          }
          
          } 
  
          return stack.length == 0;
      }
  
  }

  if (checkFirst(str) == true && checkSecond(bracketsConfig) == true) {
      return true;
  } else {
      return false;
  }

}

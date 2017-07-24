'use strict';

function collectSameElements(collectionA, collectionB) {
  let result=[];
  let k=0;
  for(let i=0;i<collectionA.length;i++){
    for(let j=0;j<collectionB.value.length;j++){
      if(collectionA[i].key===collectionB.value[j]){
      result[k]=collectionA[i].key;
      k++;
      }
    }
  }
  return result;
  ;
}
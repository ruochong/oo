
function countSameElements(collectionA,objectB) {

  for(let i=0;i<collectionA.length;i++){
    for(let j=0;j<objectB.value.length;j++){
        if((collectionA[i].key===objectB.value[j])&&collectionA[i].count>=3){
          collectionA[i].count=collectionA[i].count-parseInt(collectionA[j].count/3);
        }
    }
  }
  return  collectionA;
}

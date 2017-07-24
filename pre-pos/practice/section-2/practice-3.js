'use strict';

function countSameElements(collection) {
  const result= new Array();
  var result_num=0;
  var a=collection[i];
  var counta=1;
  for(var i=0;i<collection.length;i++){


    if(a.length>1){

      var countb=0;
      for(var p=0;p<a.length;p++){
        if(a[p]<='9'&&a[p]>='0')
          countb=countb*10+parseInt(a[p]);
      }
      counta=countb;
    }
    collection[i]=a[0];



    var numb=-1;
    for(var j=0;j<result.length;j++){
      if(collection[i]==result[j].name){
        result[j].summary+=counta;//便利result数组中有没有collecction中的元素，有的话，直接加
        numb=j;
      }
    }
    if(numb==-1){
      var obj= new Object();
      obj.name=collection[i];
      obj.summary=counta;
      result[result_num++]=obj;
    }

  }
  return result;
}

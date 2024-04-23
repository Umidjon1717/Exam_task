function IdentifyMatrix(len){
    if(len<=0){
        return []
    }
    // agar nolga teng yoki kichik bolsa bo'sh array qaytaradi
    let result=[]
    for(let i=0; i<len; i++){
        new_arr=[]
        // bu yerda yangi array ochib boramiz va uni ichiga kiritiladi
       for(let j=0; j<len; j++){
          new_arr.push(0) 
        //   bu yerda dastlab hammasini nolga to'ldiramiz
       }
    //    keyin esa i-indeksdagi yani diagonallarni 1 ga tenglashtiramiz
       new_arr[i]=1
       result.push(new_arr)
    //    bu yerda esa result arrayga har bir kichik arraylarni qo'shib chiqamiz
    }
    return result
}
console.log(IdentifyMatrix(5));
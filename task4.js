function removeABC(str){
    let result=''
    let abc=['a','b','c']
    // yangi array ga a,b,c harflarini qo'shib oldik ularni ichidan tekshirish uchun
    for(i of str){
        if(abc.includes(i.toLowerCase())){
            result+=' '
            // result ga space qo'shiladi agarda lower casedagi harf arrayda uchrasa
        }
        else{
            result+=i
            // bulmasa harfni o'zi qo'shiladi
        }
    }
    if(result===str){
        return null
        // oxirida tekshiramiz result str ga teng bulsa bu degani a b c harflari uchramagan
    }
    else return result;
}
console.log(removeABC('Apple'));
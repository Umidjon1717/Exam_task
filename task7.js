function isAnagram(str1,str2){
    let arr=[...str1]
    let arr2=[...str2]
    // bu yerda har bir stringni arrayga o'tkazib olamiz
    if(arr.sort().toString()===arr2.sort().toString()){
        return true
        // har bir sonni sortlangan shaklini stringga o'tkazganimizda bir xil bolsa true boladi
    }
    else return false;
}
console.log(isAnagram("olma", "almo"));
console.log(isAnagram("olma", "rgtr"));

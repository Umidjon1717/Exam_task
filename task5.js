function odamSoni(arr){
    let result=0
    for(i of arr){
       result+=i[0]
    // Kirgan odamlar arrayni nolinchi indeksda bulgani uchun qo'shildi resultga
       result-=i[1]
    // Tushgan odamlar arrayni 1-indeksda bulgani uchun ayrildi
    }
    return result
}
console.log(odamSoni([
    [3, 0],
    [9, 1],
    [4, 8],
    [12, 2],
    [6, 1],
    [7, 8]
]))
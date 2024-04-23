function calculateSum(arr){
    // result va array nomli o'zgaruvchilar ochib olindi 
    let result=0
    let temp_arr=[]
    // temp_arr bu har safar push qilaverganimizda ichida nechta qatnashganini bilib olish uchun
    for(i of arr){
       if(i!=0){
        temp_arr.push(i)
        let count=1
        // bu yerda count ni 1 ga tenglaganimzni sababi u yerda allaqachon oush qiligan son bor
        for(let j=0; j<temp_arr.length-1; j++){
            if(temp_arr[j]===i){
                count++
            }
            // countni topib oldik yani temp arraydagi push qilingan sonlarni
        }
        result+=Math.pow(i,count)
        // darajaga ko'tarib resultga qo'shib ketdik
       }
       else break;
    }
    return result
}

console.log(calculateSum([2,3,2,4,2,3,0,1,2]));
function reverseInput(input){
    // kirgandan 2 ta shart tekshiriladi input yoki number yoki stringligi
    if(typeof input==='number'){
        let result_num=''
        // bu yerda raqamni dastlab sting undan keyin arrayga o'tib oldim
        let arr=[...input.toString()]
        for(let i=arr.length-1; i>=0; i--){
            // arrayni ichidagi raqamlarni teskarisida yangi o'zgaruvchiga jiyladim
            result_num+=arr[i]
        }
        return +result_num
        // oxirida esa number formatiga o'tildi
    }
    else if(typeof input==='string'){
        let arr=[]
        // bu yerda yangi array ochib oldib stringni spacegacha split qilib unshift qildim yani boshidan qo'shadi, shunda so'z teskari bo'lib qoladi
        for(i of input.split(' ')){
            arr.unshift(i)
        }
        let result_str=''
        // bu yerda esa arrayning har bir so'zini yangi string formatiga o'tkazdim
        for(i of arr){
            result_str+=i+' '
        }
        return result_str
    }
    else return "Notog`ri kirish ma`lumot! Faqat matn yoki raqam kiriting.";
}

console.log(reverseInput(343546));
console.log(reverseInput('How are you?'));
console.log(reverseInput(true));


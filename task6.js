function Factorize(number){
    let result=[]
    for(let i=0; i<=number; i++){
        // bu yerda usha songacha limit olib har bir sonni unga bulib chiqib qoldiq nolga tenglarini arrayga push qilamiz
       if(number%i===0){
        // qoldiq nolga tenglarini arrayga push qilamiz
        result.push(i)
       }
    }
    return result
}
console.log(Factorize(15));
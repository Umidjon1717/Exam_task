function doubleFactorial(num){
    // funksiyaga kirgan zahodi son juft yoki toqligini aniqlab oldik chunki juft kiriilsa shartiga to'g'ri kelmaydi yani faqat toqlarni kopaytirish kerak
    if(num%2!=0){
        if(num<=0){
            return 1
        }
        // bu yerda rekursiyadan foydalanib ikkini ayirib rekursiya qildik
        return result=num*doubleFactorial(num-2)
    }
    else {
        // else da yani juft son kiritilganda undan birni ayirib yani toqqa o'tkazib ishimizni davom etdik
        num=num-1
        if(num<=0){
            return 1
            // agar noldan kichik yoki teng bulib qolsa 1 qaytaradi
        }
        return result=num*doubleFactorial(num-2)
        
    }
}
console.log(doubleFactorial(6));
console.log(doubleFactorial(9));


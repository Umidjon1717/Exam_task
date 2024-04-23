url=new URL('https://api.breakingbadquotes.xyz/v1/quotes/100')

async function smth(){
    json=await fetch(url)
    t=await JSON(json)
    console.log(t);
}
smth()
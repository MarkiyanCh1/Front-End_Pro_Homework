function generateKey(length, characters){
    let key = "";
    for (let i=0; i<length; i++){
    key += characters[Math.round(Math.random()*length)];
    }
    return key;
}

const characters = "abcdefghklmop12345678";
const key = generateKey(17, characters);

 console.log(`Your set of characters is: ${key}`);
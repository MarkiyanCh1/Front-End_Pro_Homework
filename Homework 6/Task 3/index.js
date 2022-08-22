// 3. Создать функцию, которая удаляет из строки все символы, переданные вторым аргументом. 'func("hello world", ['l', 'd'])' вернет нам "heo wor"


function delSymbols(str = "hello world", deleteElement = ['l', 'd']){
    let strArr = str.split("");
    let newstring = strArr.reduce( (newarr, item) => {if (!deleteElement.includes(item)) newarr.push(item);
        return newarr;} , []);

    return newstring.join("");
}

 result = delSymbols();
console.log(result);
const name = "Zakk",
    age = 26,
    gender = "male"

const sayHi = (name, age, gender?) => {
    console.log(`Hello ${name}, you are ${age}, your a ${gender}`);
}

sayHi(name, age, gender);
sayHi(name, age);

export {};
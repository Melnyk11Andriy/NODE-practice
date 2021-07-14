
// - у вас є масив юзрів (до 10), з такими полями наприклад - const users = [
//     { name: 'olya', gender: 'female', age: 20 }
//         ...
// ], вам потрібно написати метод який створює файлики - де назва файлику - це імя вашого юзера (наприклад - Olya.txt),
// вміст це сам ваш юзер - { name: 'olya', gender: 'female', age: 20 }
// перед тим створити 4 папки - наприклад - manOlder20, manYounger20, womanOlder20, womanYounger20
// і розподілити ваших юзерів саме по відповідних папках

const fs = require('fs');
const path = require('path');

const users = [
    {name: 'Jasmine', age: 19, gender: 'female'},
    {name: 'Jane', age: 30, gender: 'female'},
    {name: 'Jorge', age: 33, gender: 'male'},
    {name: 'Jeremy', age: 17, gender: 'male'},
    {name: 'Johanna', age: 22, gender: 'female'},
    {name: 'Janet', age: 27, gender: 'female'},
    {name: 'Jacob', age: 28, gender: 'male'},
    {name: 'Jack', age: 18, gender: 'male'}
];


function directUsers(users) {
    users.forEach(user => {
        let {age, gender, name} = user;
        if (age > 20 && gender === 'male') {
            fs.mkdir(path.join(__dirname, 'menOlder20'), {recursive: true}, err => {
                if (err) throw err;
                console.log('menOlder20 dir have been created');
            });
            fs.writeFile(path.join(__dirname, 'menOlder20', name + '.txt'), JSON.stringify(user), err => {
                if (err) throw err;
                console.log('menOlder20 files have been successfully created')
            });
        } else if (age < 20 && gender === 'male') {
            fs.mkdir(path.join(__dirname, 'menYounger20'), {recursive: true}, err => {
                if (err) throw err;
                console.log('menYounger20 dir have been successfully created');
            });
            fs.writeFile(path.join(__dirname, 'menYounger20', name + '.txt'), JSON.stringify(user), err => {
                if (err) throw err;
                console.log('menYounger20 files have been successfully created');
            });
        } else if (age > 20 && gender === 'female') {
            fs.mkdir(path.join(__dirname, 'womenOlder20'), {recursive: true}, err => {
                if (err) throw err;
                console.log('womenOlder20 dir have been successfully created');
            });
            fs.writeFile(path.join(__dirname, 'womenOlder20', name + '.txt'), JSON.stringify(user), err => {
                if (err) throw err;
                console.log('womenOlder20 files have been successfully created');
            });
        } else if (age < 20 && gender === 'female') {
            fs.mkdir(path.join(__dirname, 'womenYounger20'), {recursive: true}, err => {
                if (err) throw err;
                console.log('womenYounger20 dir have  been successfully created');
            });
            fs.writeFile(path.join(__dirname, 'womenYounger20', name + '.txt'), JSON.stringify(user), err => {
                if (err) throw err;
                console.log('womenYounger20 files have been successfully created as well');
            });
        }
    });
}

directUsers(users);

import * as fs from 'fs';
function loadJSON(fileName = ''){return JSON.parse(fs.existsSync(fileName)?fs.readFileSync(fileName).toString():'null')}

function saveJSON(fileName = '', json='""'){return fs.writeFileSync(fileName,JSON.stringify(json, null, 2))}

// let users = [];


export const getAll = (req, res) => {
    const data = loadJSON('user.json');
    res.send(data);
}
export const createUser = (req, res) => {
    const userAdd = req.body;
    const data = loadJSON('user.json');
    data.push(userAdd);
    saveJSON('user.json',data);
    res.send(`User Added with Name: ${userAdd.name} `);
}

export const getUser = (req, res) =>{
    const { id } = req.params;
    const data = loadJSON('user.json');
    const userFound = data.find((user) => user.id == id); 

    res.send(userFound);
}
export const deleteUser = (req, res) => {
    const { id } = req.params;
    let data = loadJSON('user.json')
    data = data.filter((user) => user.id != id);
    saveJSON('user.json',data);
    res.send(`User with the id ${id} deleted.`);
}

export const updateUser = (req, res) => {
    const { id } = req.params;
    const { name, password, gender, birthdate, age, country, phone} = req.body;
    let data = loadJSON('user.json');
    const user = data.find((user) => user.id == id);
    if(name) user.name = name;
    if(password) user.password = password;
    if(gender) user.gender = gender;
    if(birthdate) user.birthdate = birthdate;
    if(age) user.age = age;
    if(country) user.country = country;
    if(phone) user.phone = phone;
    saveJSON('user.json',data);
    res.send(`User with id ${id} Updated`);
}
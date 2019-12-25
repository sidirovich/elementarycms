const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('./api/models/db.json');
const db = low(adapter);

const util = require('util');

async function userShow(id){
    return db.get('users[' + id + ']').value();
}

async function userAdd(user){
    if(db.has('users').value())
    {
        db.get('users').push(user).write();
    }
    else{
        db.defaults({ users: [] }).write();
        db.get('users').push(user).write();
    }
}

async function userHas(user){
    let userMail = db.get('users[0].email').value();
    let userPassword = db.get('users[0].password').value();
    
    if(user.email == userMail && user.password == userPassword){
        return Promise.resolve(true);
    }
    else{
        return Promise.resolve(false);
    }
}

async function userUpdate(user){
    db.set('users[0].email', user.email).write();
    db.set('users[0].password', user.password).write();
    
    //db.update('users[0].email', user.email).write();
    //db.update('users[0].password', user.password).write();
}

async function passwordUpdate(strPassword){
    db.set('users[0].password', strPassword)
    .write();
}

module.exports = {
    userAdd,
    userHas,
    userUpdate,
};
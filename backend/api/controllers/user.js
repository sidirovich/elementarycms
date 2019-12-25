"use strict";
const util = require('util');

const userModel = require('../models/userModel');

async function showUser (ctx) {
    ctx.body = 'Action showUser user';
    console.log('Action show user');
}

async function validUser (ctx){
    userModel.userHas(ctx.request.body).then((res => {
        console.log(res);
        if(res){
            ctx.session.auth = true;
            ctx.body = true;
            console.log('User is confirmed and session is open.');
        }
        else{
            ctx.session.auth = false;
            ctx.body = false;
            console.log('User did not match and access to the session is closed');
        }
    }));
}

async function updateUser (ctx) {
    if(ctx.session.auth){
        userModel.userUpdate(ctx.request.body);
        ctx.body = 'Set new user data';
        console.log('Set new user data');
    }
    else{
        ctx.body = 'Access level error';
        console.log('Access level error');
    }
}

module.exports = {
    showUser,
    validUser,
    updateUser
};
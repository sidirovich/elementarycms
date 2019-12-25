"use strict";
const util = require('util');

const elementModel = require('../models/elementModel');

// GetList, CreateList, ReadElement, ChangeElement, DeleteElement

async function GetList (ctx) {
    elementModel.GetList().then(data => {
        ctx.body = data;
    });
    console.log('API.Request GetList');
}

async function CreateElement (ctx) {
    elementModel.CreateElement(ctx.request.body);
    ctx.body = 'API.Request CreateElement';
    console.log('API.Request CreateElement');
}

async function ReadElement (ctx) {
    ctx.body = 'API.Request ReadElement element id: ' + ctx.params.id;
    console.log('API.Request ReadElement element id: ' + ctx.params.id);
}

async function ChangeElement (ctx) {
    ctx.body = 'API.Request ChangeElement element id: ' + ctx.params.id;
    console.log('API.Request ChangeElement element id: ' + ctx.params.id);
}

async function DeleteElement (ctx) {
    elementModel.DeleteElement(ctx.params.id);
    ctx.body = 'API.Request DeleteElement element id: ' + ctx.params.id + ', key: ' + ctx.params.key;
    console.log('API.Request DeleteElement element id: ' + ctx.params.id + ', key: ' + ctx.params.key);
}

module.exports = {
    GetList,
    CreateElement,
    ReadElement,
    ChangeElement,
    DeleteElement,
};
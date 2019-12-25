const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const shortid = require('shortid')
const adapter = new FileSync('./api/models/elementsdb.json');
const db = low(adapter);

async function GetList(){
    if(db.has('elements').value())
    {
        return db.get('elements').value();
    }
    else{
        db.defaults({ elements: [] }).write();
        return db.get('elements').value();
    }
}

async function CreateElement(element){
    let dbsize;
    if(db.has('elements').value())
    {
        //dbsize = db.get('elements').size().value();
        db.get('elements').push({ id: shortid.generate(), name: element.name, parent: element.parent, alias: element.alias, type: element.type }).write();
    }
    else{
        db.defaults({ elements: [] }).write();
        //dbsize = db.get('elements').size().value();
        db.get('elements').push({ id: shortid.generate(), name: element.name, parent: element.parent, alias: element.alias,  type: element.type }).write();
    }
}

async function ChangeElement(id, array){
    if(db.has('elements').value())
    {
        db.get('elements')
        .push({ id: array.id, name: array.name, alias: array.alias, parent: array.parent, type: array.type })
        .write();
        return true;
    }
    else{
        return false;
    }
}

async function DeleteElement(ctxid){
    db.get('elements').remove({'id': ctxid}).write();
}


module.exports = {
    GetList,
    CreateElement,
    ChangeElement,
    DeleteElement,
};

const { request, response } = require('express');

const usersGet = (req = request, res = response) => {
    
    const { q, nombre = "No name", apikey, page = '1', limit } = req.query;
    res.json({
        msg: 'get API - controller',
        q,
        nombre,
        page,
        apikey,
        limit
    });
}

const userPut = (req, res) => {
    

    const { id } = req.params;

    res.json({
        msg: 'put API',
        id
    });
}

const userPost = (req, res) => {
    
    const { nombre, edad } = req.body;

    res.json({
        msg: 'post API',
        nombre,
        edad
    });
}

const userDelete = (req, res) => {
    
    res.json({
        msg: 'delete API'
    });
}

const userPatch = (req, res) => {
    res.json({
        msg: 'patch API'
    });
}

module.exports = {
    usersGet,
    userPut,
    userPost,
    userDelete,
    userPatch
}
const express = require('express');
const router = express.Router();
const { db } = require('../database/db')


router.get('/', (req, res)=>{
    let sql = 'SELECT * FROM users';
    db.query(sql, (err, result) =>{
        if (err){
            return console.log(err);
        }
        res.send(result);
    })
});

router.get('/:id', (req, res)=>{
    let id = req.params.id;
    let sql = 'SELECT * FROM users where id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) return console.log(err);

        res.send(result);
    })
});

router.delete('/:id', (req, res)=>{
    let id = req.params.id;
    let sql = 'DELETE FROM users where id = ?';
    db.query(sql, [id], (err) => {
        if (err) return console.log(err);

        res.send({message: "Delete Success" });
    })
});

router.put('/:id', (req, res)=>{
    let id = req.params.id;
    let users = req.body;
    let sql = 'UPDATE users SET name = ?, age = ?, email = ? where id = ?';
    let usersObj = [
            users.name,
            users.age,
            users.email,
            parseInt(id)
    ]
    db.query(sql, usersObj, (err) => {
        if (err) return console.log(err);

        res.send({message: "Update Success" });
    })
});

router.post('/', (req, res)=>{
    let users = req.body;

    let sql = 'INSERT INTO users (name, age, email) VALUE ?';
    let usersOdj = [
        [
            users.name,
            users.age,
            users.email
        ]
    ]
    db.query(sql, [usersOdj], (err) => {
        if (err) return console.log(err);

        res.send({message: "Insert Success" });
    })
});

module.exports = router;
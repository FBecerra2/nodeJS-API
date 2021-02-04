const express = require('express');
const router  = express.Router();
const mysqlConnection = require('../database.js');

//select all
router.get('/', (req, res) => {
    mysqlConnection.query('SELECT * FROM employees', (err, rows, fields) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
        }

    });

});

//select por ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  console.log(id);
  mysqlConnection.query('SELECT * FROM employees WHERE id = ?', [id], (err, rows, fields) => {
         if(!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
  });
});

//insertar empleado
router.post('/', (req,res) => {
    const { id, name, salary } = req.body;
    console.log(id, name, salary);
    mysqlConnection.query('INSERT INTO employees (id, name, salary) value (?,?,?);',[id, name, salary], (err, rows,fields) => {
        if(!err) {
            res.json({Status: 'Se agrego el dato'});
        } else {
            console.log(err);
        }

    });
});

//Actualizar datos
router.put('/:id', (req,res) => {
    const { id } = req.params;
    const { name, salary } = req.body;
    console.log(id, name, salary);
    mysqlConnection.query('UPDATE employees SET name =?, salary =? WHERE id =?;', [ id, name, salary], (err, rows,fields) => {
        if(!err) {
            res.json({Status: 'Se modifico el dato'});
        } else {
            console.log(err);
        }

    });
});

//Borrar empleados
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    console.log(id);
    mysqlConnection.query('DELETE FROM employees WHERE id = ?', [id], (err, rows, fields) => {
           if(!err) {
              res.json({Status: 'Se Borro el dato'});
          } else {
              console.log(err);
          }
    });
  });
module.exports = router;
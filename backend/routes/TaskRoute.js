const { Router } = require('express');
const { getTasks, updateTask, saveTask, deleteTask, getTaskById } = require('../controllers/TaskControllers');
const router = Router();


router.get('/get', getTasks);
router.get('/details/:id',getTaskById)
router.post('/save', saveTask);
router.put('/update/:id', updateTask);
router.delete('/delete/:id', deleteTask);


module.exports = router
const TaskModel = require('../models/TaskModel');

module.exports.getTasks = async (req,res)=>{
    const tasks = await TaskModel.find();
    res.send(tasks);
}

module.exports.getTaskById = async (req,res)=>{
    const { id } = req.params;
    const task = await TaskModel.findById(id);
    res.send(task);
}

module.exports.saveTask = async (req,res)=>{
    const {name,email,phone,active} = req.body;
    console.log('save->',req.body);

    // TaskModel.create(data)
    const taskModel = new TaskModel({ name,email,phone,active })
    try {
        await taskModel.save();
        console.log('saved Successfully');
        return res.status(201).send({message:'Success'});
    } catch (err) {
        console.log('Err:',err);
        return res.send({error:err,message:'Something went wrong'});
    }

    // .then((data)=>{
    //     console.log('saved Successfully');
    //     res.status(201).send(data);
    // }).catch((err)=>{
    //     console.log('Err:',err);
    //     res.send({error:err,message:'Something went wrong'});
    // })
}

module.exports.updateTask = (req,res)=>{
    const { id } = req.params;
    const data = req.body;
    console.log('--req:',id,'\n',data);
    TaskModel.findByIdAndUpdate(id,data,{ new: true})
    .then((req,res)=>res.send('updated successfully'))
    .catch((err)=>{
        console.log('Err:',err);
        res.send({error:err,message:'Something went wrong'});
    })
}

module.exports.deleteTask = (req,res)=>{
    const { id } = req.params;
    const { task } = req.body;
    TaskModel.findByIdAndDelete(id).then((req,res)=>{
        res.send('deleted successfully')
    }).catch((err)=>{
        console.log('Err:',err);
        res.send({error:err,message:'Something went wrong'});
    })
}
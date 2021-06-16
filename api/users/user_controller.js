const {create, requestUsers, requestUserById, updateUserInfo, deleteUserInfo} = require('./user_service');
const {genSaltSync, hashSync} = require('bcrypt');

module.exports = {
    createUser: (req,res)=>{
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password,salt);
        create(body,(error,results)=>{
            if(error){
                console.log(error.message);
                res.json({message: `failed to insert item because\n${error.message}`});
            }else{
                res.json({results});
            }
        });
    },
    getUsers:(req,res)=>{
        requestUsers((error,results)=>{
            if(error){
                console.log(error.message);
                res.json({message: `failed to get users because\n${error.message}`});
            }else{
                res.json({results});
            }
        });
    },
    //passed through url 
    getUserById:(req,res)=>{
        const id = req.params.id;
        requestUserById(id,(error,results)=>{
            if(error){
                console.log(error.message);
                res.json({message: `failed to get user by id because\n${error.message}`});
            }else{
                res.json({results});
            }
        });
    },
    updateUser:(req,res)=>{
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password,salt);
        updateUserInfo(body,(error,results)=>{
            if(error){
                console.log(error.message);
                res.json({message: `failed to update user info because\n${error.message}`});
            }else{
                res.json({results});
            }
        });
    },
    deleteUser:(req,res)=>{
        const body = req.body;
        deleteUserInfo(body,(error,results)=>{
            if(error){
                console.log(error.message);
                res.json({message: `failed to delete user info because\n${error.message}`});
                return;
            }else{
                res.json({message: "user successfully deleted."});
            }
        });
    }
};
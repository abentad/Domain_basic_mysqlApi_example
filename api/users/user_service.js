const express = require('express');
const pool = require('../../config/database');

//this exports many methods which includes creating a new user and so on

const tableName = "registration";
module.exports = {
    create: (data, callBack)=>{
        //pool.query can accept three params 1. the sql query 2. can be the values 3. the call back function to handle errors and results
        pool.query(
            `insert into ${tableName}(user_name,age,email,password) values(?,?,?,?)`,
            [
                data.user_name,
                data.age,
                data.email,
                data.password,
            ],
            (error,results,fields)=>{
                if(error){
                    callBack(error);
                }else{
                    return callBack(null,results);
                }
            }
        );
    },
    requestUsers: callBack =>{
        pool.query(
            `select * from ${tableName}`,
            [],
            (error,results,fields)=>{
                if(error){
                    callBack(error);
                }else{
                    callBack(null,results);
                }
            }
        )
    },
    requestUserById: (id,callBack)=>{
        pool.query(
            `select * from ${tableName} where id = ?`,
            [id],
            (error,results,fields)=>{
                if(error){
                    callBack(error);
                }else{
                    callBack(null,results[0]);
                }
            }
        )
    },
    updateUserInfo:(data,callBack)=>{
        pool.query(
            `update ${tableName} set user_name=?, age=?, email=?, password=? where id = ?`,
            [
                data.user_name,
                data.age,
                data.email,
                data.password,
                data.id
            ],
            (error,results)=>{
                if(error){
                    callBack(error);
                }else{
                    callBack(null,results[0]);
                }
            }
        );
    },
    deleteUserInfo:(data,callBack)=>{
        pool.query(
            `delete from ${tableName} where id = ?`,
            [data.id],
            (error,results)=>{
                if(error){
                    callBack(error);
                }else{
                    callBack(null,results[0]);
                }
            }
        )
    }
};
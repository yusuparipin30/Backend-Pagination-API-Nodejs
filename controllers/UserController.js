//1. import modelnya
import User from "../models/UserModel.js";
import {Op} from "sequelize";

//2. membuat function
export const getUsers = async(req, res) =>{
    //3.query parameter, parseInt untuk merubah mnjadi integer
    const page = parseInt(req.query.page) || 0;
    //4.limit adalah batas data yang mau kita tampilkan
    const limit = parseInt(req.query.limit) || 6;
    //5.berfungsi untuk menampung yang di ketik oleh user
    const search = req.query.search_query || "";
    const offset = limit * page;
    //6.mengambil total dari keseluruhan data
    const totalRows = await User.count({
        where:{
        [Op.or]: [
         {nama:{
            [Op.like]: '%'+search+'%'
        }},
        {alamat_domisili:{
            [Op.like]: '%'+search+'%'
        }},
        {kepemilikan:{
            [Op.like]: '%'+search+'%'
        }},
        {jenis_kelamin:{
            [Op.like]: '%'+search+'%'
        }},
         {status_perkawinan:{
            [Op.like]: '%'+search+'%'
        }}]
        }
    });
     //7.variabel untuk menampilkan total halaman atau total pagenya
     const totalPage = Math.ceil(totalRows / limit);
     //8.menampilkan jumlah datanya
     const result = await User.findAll({
        //9.opsi kata depan atau belakang
        where:{
            [Op.or]: [
             {nama:{
                [Op.like]: '%'+search+'%'
            }},
            {alamat_domisili:{
                [Op.like]: '%'+search+'%'
            }},
            {kepemilikan:{
                [Op.like]: '%'+search+'%'
            }},
             {jenis_kelamin:{
                [Op.like]: '%'+search+'%'
            }},
            {status_perkawinan:{
                [Op.like]: '%'+search+'%'
            }}]
            },
            offset: offset,
            limit: limit,
            //opsi mengurutkan data berdasarkan data yang terbaru, agar nanti data yang terbaru akan di tampilkan di halaman terdepan
            order: [
                ['id', 'DESC']
            ]
     });
    res.json({
        result: result,
        page: page,
        limit: limit,
        totalRows: totalRows,
        totalPage: totalPage
    });
}

//membuat method untuk mengambil single data
//tampil data user
export const getUserById = async(req, res) => {
    try {
        const response = await User.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    }catch (error) {
        console.log(error.message);
    }
}

//tambah data user
export const createUser = async(req, res) => {
    try {
       await User.create(req.body);
        res.status(201).json({msg:"User Created"});
    }catch (error) {
        console.log(error.message);
    }
}

//update data user
export const updateUser = async(req, res) => {
    try {
       await User.update(req.body,{
        where:{
            id:req.params.id
        }
       });
        res.status(200).json({msg:"User Updated"});
    }catch (error) {
        console.log(error.message);
    }
}

//delete user
export const deleteUser = async(req, res) => {
    try {
       await User.destroy({
        where:{
            id:req.params.id
        }
       });
        res.status(200).json({msg:"User Deleted"});
    }catch (error) {
        console.log(error.message);
    }
}



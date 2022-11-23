//1. import modelnya
import User from "../models/UserModel.js";
import {Op} from "sequelize";

//2. membuat function
export const getUsers = async(req, res) =>{
    //3.query parameter, parseInt untuk merubah mnjadi integer
    const page = parseInt(req.query.page) || 0;
    //4.limit adalah batas data yang mau kita tampilkan
    const limit = parseInt(req.query.limit) || 10;
    //5.berfungsi untuk menampung yang di ketik oleh user
    const search = req.query.search_query || "";
    const offset = limit * page;
    //6.mengambil total dari keseluruhan data
    const totalRows = await User.count({
        where:{
        [Op.or]: [
         {name:{
            [Op.like]: '%'+search+'%'
        }},
        {gender:{
            [Op.like]: '%'+search+'%'
        }},
         {email:{
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
             {name:{
                [Op.like]: '%'+search+'%'
            }},
            {gender:{
                [Op.like]: '%'+search+'%'
            }},
             {email:{
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
        tatalPage: totalPage
    });
}

import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

//membuat tabel= parameter 1 ada table users, parameter ke 2 ada file{}, parameter ke 3 terdpt opsi(freezeTableName:true)
const User = db.define('users',{
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING
},{
    freezeTableName:true
});

export default User;


//fungsi apabila tabel user tdk terdpat di database paginate_db
(async ()=>{
    await db.sync();
})();
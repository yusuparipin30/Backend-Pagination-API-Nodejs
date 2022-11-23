//1.import sequelize
import {Sequelize} from "sequelize";
//2.import koneksi database
import db from "../config/Database.js";
//3.
const {DataTypes} = Sequelize;

//4.membuat tabel= parameter 1 ada table users, parameter ke 2 ada file{}, parameter ke 3 terdpt opsi(freezeTableName:true)
const User = db.define('users',{
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING
},{
    //5.opsi
    freezeTableName:true
});

export default User;


//6.fungsi membuat tabel user apabila tabel user tdk terdpat di database paginate_db
(async ()=>{
    await db.sync();
})();
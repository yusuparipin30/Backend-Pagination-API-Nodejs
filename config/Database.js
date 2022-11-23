//1.create a database connection
import {Sequelize} from "sequelize";

//2.membuat database paginate_db, usernya=root, passwordnya='' kosong
const db = new Sequelize ('paginate_db', 'root','',{
    host: "localhost",
    dialect: "mysql"
});

export default db;
//add theaters CRUD functions here
const theatersService = require("./theaters_service");

async function list(req, res){
    const data = await theatersService.list();
    res.json({ data })
}

module.exports = {
    list,
}
const Student = require('../model/studentModel.js');


const sendDataMongoController = {
    async sendDataMongo(req, res, next) {
        data = req.body;
        const student = new Student({
            roll: data.roll_no,
            name: data.name,
            branch: data.branch
        })
        const result = await student.save();
        res.status(200).send({ "status": "OK", "result": result })
    }
}


module.exports = sendDataMongoController;
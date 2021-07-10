const sendDataController = {
    async sendData(req, res, next) {
        res.status(200).send({ "status": "OK" })
    }
}



module.exports = sendDataController;
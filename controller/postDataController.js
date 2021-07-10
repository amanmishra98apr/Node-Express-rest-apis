const postDataController = {
    async postData(req, res, next) {
        try {
            let data = req.body;
            console.log(data);
            res.status(200).send({ "status": "OK", "data": data })
        } catch (err) {
            res.status(500).send({ "error": err.message })
        }
    }
}



module.exports = postDataController;
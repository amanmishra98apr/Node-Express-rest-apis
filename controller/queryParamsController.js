const queryParamsController = {
    async queryParams(req, res, next) {
        let data = req.query;
        console.log(data);
        res.status(200).send({ "status": "OK", "roll no": data.rollno, "name": data.name })
    }
}



module.exports = queryParamsController;
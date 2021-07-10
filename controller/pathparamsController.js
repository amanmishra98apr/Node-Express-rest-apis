const pathParamsController = {
    async pathParams(req, res, next) {
        let data = req.params;
        console.log(data);
        res.status(200).send({ "status": "OK", "id": data.id, "name": data.name })
    }
}



module.exports = pathParamsController;
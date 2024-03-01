const router = require('express').Router();

router.get("/test", (req, res) => {
    return res.status(200).send({
        message: "Hello World",
        data: [
            {
                name: "John",
                age: 25
            },
            {
                name: "Deepak",
                age: 22
            },
            {
                name: "Amanjot",
                age: 22
            }
        ]

    });
});
module.exports = router;


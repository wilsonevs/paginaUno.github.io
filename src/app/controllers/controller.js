const connection =require("../../config/conectionDB");

const getIndex = (req, res) => {
    try {
        res.render("index.ejs");
    } catch (error) {
        console.log("Mostar el error: "+error);
    }
}

const getError404 = (req, res) => {
    try {
        res.render("404.ejs");
    } catch (error) {
        console.log("Mostar el error: "+error);
    }
}

module.exports = {
    // Index
    getIndex,

    // Error
    getError404,
}
const app = require("../../config/server");
const {
    // Inicio
    getIndex,
    getError404,
}= require("../controllers/controller");

// index
module.exports = (app) => {
    // index
    app.get('/', getIndex);

    // Error
    app.get('/*', getError404);

}
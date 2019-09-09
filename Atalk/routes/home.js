module.exports = function(app){
    var home = app.controllers.home; //xta se referenciando ao arquivo controllers/home.js
    app.get('/', home.index);
};

import express from "express";
import homeController from "../controllers/homeController";
let router = express.Router();

let initWebRoutes =(app)=>{
    router.get('/',homeController.getHomePage);
    router.get('/hoi',homeController.getAboutPage);
    router.get('/crud',homeController.getCRUD);
    router.post('/post-crud',homeController.postCRUD);
    return app.use("/",router);
    //rest api

}

module.exports = initWebRoutes;
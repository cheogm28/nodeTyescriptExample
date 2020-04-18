import express from "express";
import bodyParser from "body-parser";
import * as path from "path";
import http from "http";
import routes from "./routes";
import {OpenApiValidator} from "express-openapi-validator";

const port = 8080; // default port to listen
const options =  {
    apiSpec: path.join(__dirname+"/openapi.yml"),
    validateRequests: true,
    validateResponses: true,
}
export default  class Server {
   async  execute(){
        process.stdout.write("-****************setting up server ******************----\n");
        try{
            process.stdout.write("creating app\n");
            const app = express();

            process.stdout.write("adding middleware\n");
            app.use(bodyParser.json());
            app.use(bodyParser.text());
            app.use(bodyParser.urlencoded({ extended: false }));
            await new OpenApiValidator(options).install(app);

            process.stdout.write("adding routes\n");
            routes(app);
            app.get("/spec", express.static(path.join(__dirname,"/openapi.yml")));
            process.stdout.write("adding error handlers in app\n");
            app.use((err:any, req:any, res:any, next:any) => {
                // format error
                res.status(err.status || 500).json({
                    errors: err.errors,
                    message: err.message,
                });
            });
            http.createServer(app).listen(port);
        }catch(e){
            process.stdout.write("ERROR ");
            process.stdout.write(e);
            return new Error(e);
        }
    };
};
import  Server   from "../src/server";

try{
    new Server().execute();
}catch(e){
    process.stdout.write("ERROR server initialization");
    process.stdout.write(e);
}
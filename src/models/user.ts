export default class User{
    private name: string;
    private id: number;
    public toString = () : string => {
        return `(id: ${this.id}, name: ${this.name})`;
    }

    constructor(id:number, name:string){
        this.name = name;
        this.id = id;
    }

    public getName(): string {
        return this.name
    }

    public setName(name:string) {
        this.name = name;
    }



}
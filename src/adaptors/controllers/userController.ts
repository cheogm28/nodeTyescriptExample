import User from "../../models/user";

const users = new Array<User>();

export function getUsers(): User[]{
    return users;
}

export function getUserById(id:number): User{
    const newUser:User =  new User(id, "test");
    users.push(newUser);
    return newUser;
}
import { UserModel } from "./auth.model";

export async function findUserByEmail(email:string) {
    return UserModel.findOne({email});
}

export async function createUser(data: {
    email: string;
    password: string;
    name: string;
}) {
    return UserModel.create(data)
}

export async function findUserById(id:string) {
    return UserModel.findById(id)
}
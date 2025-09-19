import mongoose, { Document, Schema, Model } from "mongoose";
import bcrypt from "bcrypt";

export interface IUsuario extends Document{
    _id:string; // Vou precisar do _id no view - evita erro no código
    username: string;
    password?: string; //que pode ser nulo (nao vaou retornar a senha)
    comparePassword(cuserPassword:string): Promise<boolean>;
}


// Criação do schema do mongodb (construtor)
const UsuarioSchema: Schema<IUsuario> = new Schema({
    username:{type:String, required:true, unique:true},
    password:{type:String, required:true, select:false}
    // Select impede que a senha retorne por padrão
});

//Middleware para hashear a senha
// Serve para criptografar a senha quando for armazenar o usuário no BD
UsuarioSchema.pre<IUsuario>('save', async function (next){
    if(!this.isModified('password') || !this.password) return next();
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error:any) {
        next(error);
    }
})

// Método para comparar senha 
// Quando o usuário for fazer login (compara a senha digitada e criptografada com a senha criptografada do banco)
UsuarioSchema.methods.comparePassword = function (userPassword:string):Promise<boolean>{
    return bcrypt.compare(userPassword, this.password);
}

// to e from
const Usuario: Model<IUsuario> = mongoose.models.Usuario || mongoose.model<IUsuario>("Usuario", UsuarioSchema);

export default Usuario;
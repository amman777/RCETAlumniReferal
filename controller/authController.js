import userModel from "../models/userModel.js";

export const regiseterController = async (req,res,next) => {
    console.log("Inside API1");
        const {name,email,password} = req.body;
        //validate
        if(!name || !email || !password){
            if(!name){
                next("Name is require")
            }
            if(!email){
                next("email is require")
            }
            if(!password){
                next("Password is require")
            }
            
        }

        const existingUser = await userModel.findOne({email})
        if(existingUser){
            next("email already in use")    
        }

        const user = await userModel.create({name,email,password})
        const token =  user.createJWT()
        res.status(201).send({
            sucess: true,
            message: "User Create Successfully",
            user:{
                name:user.name,
                lastName: user.lastName,
                email: user.email,
                location: user.location,
            },
            token
        });
    
};



export const loginController = async(req,res,next) => {
    const {email, password} = req.body
    //validation 
    if(!email || !password){
        next('Provide all fields');
    }
    //find user by email
    const user = await userModel.findOne({email}).select("+password");
    if(!user){
        next('Invalid Credential')
    }
    //compare password
    const isMatch = await user.comparePassword(password)
    if(!isMatch){
        next('Invalid username or password')
    }
    user.password = undefined
    const token = user.createJWT()
    res.status(200).json({
        sucess: true,
        message: "Login successfully",
        user,
        token,
    })
}
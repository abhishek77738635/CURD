import userModal from "../modules/users.js"

class userController {
    static getAllUsers = async (req,res) => {
        try{
            const allusers = await userModal.find({})
            if (allusers) {
                return res.status(200).json(allusers);
            }

        } catch (error){
            return res.status(400).json(error);
        }
    }

    static createUser = async (req,res) => {
        const {name,email,age} = req.body
        try{
          if(name && email && age){
            const newUser = userModal({
                name:name,
                email:email,
                age:age
            });
            const save_user = await newUser.save();
            if(save_user){
                return res.status(200).json(save_user);
            }else{
                return res.status(400).json({message:"somthing went wrong"});
            }
          }else{
            return res.status(400).json({message:"all fields are required!"});

          }

        } catch (error){
            return res.status(400).json(error);
        }
    }

    static singleUser = async (req,res) => {
        const {id} = req.params
        try{
          if(id){
            const user = await userModal.findById(id)
            if(user){
                return res.status(200).json(user);

            }else{
                return res.status(400).json({message:"somthing went wrong"});
            }
          }else{
            return res.status(400).json({message:"id not found"});

          }

        } catch (error){
            return res.status(400).json(error);
        }
    }

    static updateUser = async (req,res) => {
        const {id} = req.params
        try{
          if(id){
            const user = await userModal.findByIdAndUpdate(id,req.body)
            if(user){
                return res.status(200).json(user);

            }else{
                return res.status(400).json({message:"somthing went wrong"});
            }
          }else{
            return res.status(400).json({message:"id not found"});
          }

        } catch (error){
            return res.status(400).json(error);
        }
    }

    static deleteUser = async (req,res) => {
        const {id} = req.params
        try{
          if(id){
            const user = await userModal.findByIdAndDelete(id)
            if(user){
                return res.status(200).json(user);

            }else{
                return res.status(400).json({message:"somthing went wrong"});
            }
          }else{
            return res.status(400).json({message:"id not found"});
          }

        } catch (error){
            return res.status(400).json(error);
        }
    }
}

export default userController
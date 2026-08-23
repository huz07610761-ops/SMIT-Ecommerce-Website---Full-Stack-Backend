const UserModel = require('../models/Product')

const createProduct = (req,res) =>{
    try {
        const {name,price,delPrice,rating,img} = req.body

    if(!name || !price || !delPrice || !rating || !img){
        res.json({message:"Please fill all field"}).status(401)
    }

    const product = UserModel.create({
        name,
        price,
        delPrice,
        rating,
        img
    })

    res.send({message:"Product Create Successfully",productData:product}).status(201)
    } catch (error) {
        console.log(error)
    }

}

const getData = async(req,res) =>{
    try{
        const product = await UserModel.find();

        res.status(200).json({
            message:"Product fetch successfully",
            product
        })
    }catch(error){
        console.log(error)
    }
}
module.exports = {
    createProduct,
    getData
}
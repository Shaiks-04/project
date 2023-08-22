const cart = require("../Model/cartStructure");
const product = require('../Model/productStructure');
const jwt=require('jsonwebtoken')
const secretKey='shaik'

const addtocart = async (req, res) => {
    const token = req.headers.authorization.split(' ')[1]; 
    const decodedToken = jwt.verify(token, secretKey);
    const { userid } = decodedToken;

    const _id = req.params.product_id;

    const existingCart = await cart.findOne({ userid: userid, "products._id": _id });

    if (existingCart) {
        // Update the quantity of the existing product in the cart
        await cart.updateOne(
            { userid: userid, "products._id": _id },
            { $inc: { "products.$.quantity": 1 } }
        );
    } else {
        const productData = await product.findById(_id);
        if (!productData) {
            return res.status(404).send("Product not found");
        }

        // Add the new product to the cart
        await cart.updateOne(
            { userid: userid },
            {
                $push: {
                    products: {
                        _id: productData._id,
                        quantity: 1,
                        productData: productData.toObject()
                    }
                }
            },
            { upsert: true }
        );
    }

    const updatedCart = await cart.findOne({ userid: userid })
        .populate("products._id")
        .populate("products.productData");
    
    return res.send({updatedCart,msg:"Added to cart"});
};


const fetchcart = async (req, res) => {
    const token = req.headers.authorization.split(' ')[1]; 
    const decodedToken = jwt.verify(token, secretKey);
    const { userid } = decodedToken;
    if(!token){
        return res.send({msg:'Please log in to fetch the cart.'})
    }
    else{
    try {
        const userCart = await cart.findOne({ userid: userid })
            .populate("products._id")
            .populate("products.productData");

        if (!userCart) {
            return res.status(404).send("Cart not found for the user");
        }

        res.send(userCart);
    } catch (error) {
        res.status(500).send("Internal server error");
    }
    }
};

const cartincrement = async (req, res) => {
    const token = req.headers.authorization.split(' ')[1]; 
    const decodedToken = jwt.verify(token, secretKey);
    const { userid } = decodedToken;
    try {
        const _id = req.params.product_id;
        // console.log("Before increment: Fetching cart...");
        const initialCart = await cart.findOne({ userid: userid }).populate("products._id");
        // console.log("Initial Cart:", initialCart);
        
        await cart.updateOne(
            { userid: userid, "products._id": _id },
            { $inc: { "products.$.quantity": 1 } }
        );
        
        const updatedCart = await cart.findOne({ userid: userid }).populate("products._id");
        res.send(updatedCart);
    } catch (error) {
        res.status(500).send("Internal server error");
    }
};

const cartdecrement = async (req, res) => {
    const token = req.headers.authorization.split(' ')[1]; 
        const decodedToken = jwt.verify(token, secretKey);
        const { userid } = decodedToken;
    try {
        const _id = req.params.product_id;
        
        const existingCart = await cart.findOne({ userid: userid, "products._id": _id });
        if (existingCart) {
            const productToUpdate = existingCart.products.find(product => product._id.toString() === _id);
            if (productToUpdate.quantity > 1) {
                await cart.updateOne(
                    { userid: userid, "products._id": _id },
                    { $inc: { "products.$.quantity": -1 } }
                );
            } else {
                await cart.updateOne(
                    { userid: userid },
                    { $pull: { products: { _id: _id } } }
                );
            }
        }
        
        const updatedCart = await cart.findOne({ userid: userid })
            .populate("products._id")
            .populate("products.productData");
        
        res.send(updatedCart);
    } catch (error) {
        res.status(500).send("Internal server error");
    }
};

const totalCartDelete = async (req, res) => {
    const token = req.headers.authorization.split(' ')[1]; 
        const decodedToken = jwt.verify(token, secretKey);
        const { userid } = decodedToken;
    try {
        await cart.updateOne(
            { userid: userid },
            { $set: { products: [] } }
        );
        res.send({ msg: "Cart is empty now" });
    } catch (error) {
        res.status(500).send("Internal server error");
    }
};


const removeFromCart = async (req, res) => {
    const token = req.headers.authorization.split(' ')[1]; 
        const decodedToken = jwt.verify(token, secretKey);
        const { userid } = decodedToken;
    try {
        const _id = req.params.product_id;

        await cart.updateOne(
            { userid: userid },
            { $pull: { products: { _id: _id } } }
        );

        const updatedCart = await cart.findOne({ userid: userid })
            .populate("products._id")
            .populate("products.productData");

        res.send(updatedCart);
    } catch (error) {
        res.status(500).send("Internal server error");
    }
};
const fetchquantity = async (req, res) => {
    const token = req.headers.authorization.split(' ')[1]; 
    const decodedToken = jwt.verify(token, secretKey);
    const { userid } = decodedToken;
    try {
        const userCart = await cart.findOne({ userid: userid })
            .populate("products._id")
            .populate("products.productData");

        if (!userCart) {
            return res.status(404).send("Cart not found for the user");
        }

        // Calculate the total quantity of all items in the cart
        let totalQuantity = 0;
        for (const product of userCart.products) {
            totalQuantity += product.quantity;
    console.log(totalQuantity)

        }

        res.send({ totalQuantity });
    } catch (error) {
        res.status(500).send("Internal server error");
    }
};

module.exports = { addtocart, fetchcart, cartincrement, cartdecrement, totalCartDelete, removeFromCart,fetchquantity };


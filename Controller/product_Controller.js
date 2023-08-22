const productsData = require("../Controller/productsData");
const Product = require("../Model/productStructure");

const insertProduct = async (req, res) => {
    const result = await Product.insertMany(productsData);
    res.send(result);
};
const fetchProduct=async (req,res)=>{
    const {category}=req.params
    const result=await Product.find({$or: [{ category: category },{ maincategory: category }]
    })
    return res.send(result)
}

const search= async (req, res) => {
    const keyword  = req.params.keyword; // Get the search keyword from the query parameter
  
    try {
    //   const products = await product.find({
    //     name: { $regex: keyword, $options: 'i' } // Perform a case-insensitive search using regular expression
    //   });

      const products = await product.find({
        $or: [
          { name: { $regex: keyword, $options: 'i' } },
          { category: { $regex: keyword, $options: 'i' } }
        ]
      });
  
      res.send(products);
    } catch (error) {
      console.error(error);
      res.send({ message: 'Internal server error' });
    }
}

module.exports = { insertProduct,fetchProduct,search };

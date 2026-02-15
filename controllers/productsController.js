

const GetAllProducts = (req, res) => {
    try {
        console.log("working")
         res.status(200).json({ message: "Products Received"});
    } catch (error) {
         res.status(500).json({ message: "error occured",error});
    }
}

module.exports = {GetAllProducts}  
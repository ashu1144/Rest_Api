const productModel = require('../model/Product.js')

const getAllProducts = async(req,res)=>{
    res.status(200).json({msg:"i am the product"})

}

const getAllProductsTesting = async(req,res)=>{    
    const{price , company , name, sort , select } = req.query
    const queryObject = {}
    if(name){
        queryObject.name = {$regex:name , $options:"i"}  
    }
     if(company){
        queryObject.company = company
    }
     if(price){
        queryObject.price = price
    }
    
    let api=productModel.find(queryObject)
    
    if(sort){
        let sortfix = sort.split(",").join(" ")
        api = api.sort(sortfix)
    }
    if(select){
        let fixselect = select.split(",").join(" ")
        api=api.select(fixselect) 
    }

    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 10;

    let skip =(page-1)*limit;

    api = api.skip(skip).limit(limit)



    try{
        const Results = await api
        return res.status(200).json({Results , nbHits:Results.length})
        
    }
    catch(err){
        return res.status(500).json({ err: "Server error" });
    
    }

}


module.exports={getAllProducts,getAllProductsTesting}
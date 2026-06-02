const externalApiService =
require("../Services/externalApiService");

const getRandomUser =
async(req,res)=>{

    try{

        const data =
        await externalApiService
        .getRandomUser();

        res.status(200).json({
            success:true,
            data
        });

    }catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }

};

module.exports = {
    getRandomUser
};
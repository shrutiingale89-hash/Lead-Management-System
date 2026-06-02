const leadService =
require("../Services/leadService");

const createLead =
async(req,res)=>{

    try{

        const lead =
        await leadService.createLead(
            req.body,
            req.user.id
        );

        res.status(201).json({
            success:true,
            data:lead
        });

    }catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }

};

const getAllLeads = async(req,res)=>{

    try{

       const leads =
       await leadService.getAllLeads(
       req.query,
       req.user
);

        res.status(200).json({
            success:true,
            data:leads
        });

    }catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }

};

const getLeadById = async(req,res)=>{

    try{

        const lead =
        await leadService.getLeadById(
            req.params.id,
            req.user
        );

        if(!lead){
            return res.status(404).json({
                success:false,
                message:"Lead not found"
            });
        }

        res.status(200).json({
            success:true,
            data:lead
        });

    }catch(error){

        if(error.message === "Access Denied"){
            return res.status(403).json({
                success:false,
                message:"Access Denied"
            });
        }

        res.status(500).json({
            success:false,
            message:error.message
        });

    }

};

const updateLead = async(req,res)=>{

    try{

        const lead =
        await leadService.updateLead(
            req.params.id,
            req.body,
            req.user.id
        );

        res.status(200).json({
            success:true,
            data:lead
        });

    }catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }

};

const deleteLead = async(req,res)=>{

    try{

        await leadService.deleteLead(
            req.params.id
        );

        res.status(200).json({
            success:true,
            message:"Lead Deleted"
        });

    }catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }

};

module.exports = {
    createLead,
    getAllLeads,
    getLeadById,
    updateLead,
    deleteLead
};

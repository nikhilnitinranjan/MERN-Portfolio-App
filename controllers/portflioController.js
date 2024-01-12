const sendEmailController = (req,res) =>{
    try{
        return res.status(200).send({
            success:true,
            message:'your message has been sent',
        })

    }
    catch(err){
        console.log(err);
        return res.status(500).send({
            success:false,
            message:'send Email API server error',
            error

        })
    }
};

module.exports = {sendEmailController};
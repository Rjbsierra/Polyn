const getuser = async (req,res) =>{
    console.log('hay is user')
    
    res.status(200).json({mgs:"hey"})
}


module.exports = {getuser}
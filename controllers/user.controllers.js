const {Users, Article} = require('../sequelize/models')



const read = async (req, res, next) => {
    // res.render('index', {title: 'Read User Data'})
    try {
        const userData = await User.findAll({
            where : {
                isDeleted : false
            },
            include: [{
                model : Article
            }],
            attributes:['title', 'decription']
        })
        return res.status(200).json({
            message : 'Success Get All Data Users',
            data : userData
        })
    } catch (error) {
        return res.status(200).json({
            message : 'Failed Get All Data Users',
            error : error
        })
    }
}

module.exports = {
    read
}
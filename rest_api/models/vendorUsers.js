module.exports=(sequelize,Sequelize)=>{
    const VendorUsers=sequelize.define("VendorUsers",{
        VendorOrganizationId :{type:Sequelize.INTEGER},
        UserName:{type:Sequelize.STRING},
        name:{type:Sequelize.STRING},
        role:{type:Sequelize.STRING}
    })
    return VendorUsers
}
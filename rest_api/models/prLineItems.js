module.exports=(sequelize,Sequelize)=>{
    const PrLineItems=sequelize.define("PrLineItems",{
        suppliers:{type:Sequelize.STRING},
        custOrgId:{type:Sequelize.INTEGER},
        purchaseRequestId:{type:Sequelize.INTEGER}
    })
    return PrLineItems
}
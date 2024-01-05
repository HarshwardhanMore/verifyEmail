module.exports = (sequelize, DataTypes)=>{
    
    const EmailVerificationToken = sequelize.define('EmailVerificationToken', {
        
        userId: {
            type: DataTypes.STRING,
            allowNull: true
        },
        token: {
            type: DataTypes.STRING,
            allowNull: true,
        },

    });
 
    return EmailVerificationToken;
}
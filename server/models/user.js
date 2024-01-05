module.exports = (sequelize, DataTypes)=>{
    
    const User = sequelize.define('User', {
        
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        isVerified: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false
        },
              
    });
 
    return User;
}
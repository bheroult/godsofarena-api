module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Modifier', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        options: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false
        }
    }, {
        timestamps: false
    });
}

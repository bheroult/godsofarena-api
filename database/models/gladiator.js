module.exports = (sequelize, DataTypes) => {
    const Gladiator = sequelize.define('Gladiator', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        type: {
            type: DataTypes.ENUM('Epéiste', 'Lancier', 'Cavalier', 'Archer', 'Animal'),
            allowNull: false,
            defaultValue: 'Epéiste'
        }
    }, {
        timestamps: false
    });
    Gladiator.associate = models => {
        Gladiator.belongsTo(models.Modifier);
        models.Modifier.hasMany(Gladiator);
    };
    return Gladiator;
}

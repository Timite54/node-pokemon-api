module.exports = (sequelize, DataTypes) =>{
    return sequelize.define('Pokemon',{
            id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
            name: {type: DataTypes.STRING, allowNull: false, required: true},
            hp: {type: DataTypes.INTEGER, allowNull: false, required: true},
            cp: {type: DataTypes.INTEGER, allowNull: false, required: true},
            picture: {type: DataTypes.STRING, allowNull: false, required: true},
            types: {
                type: DataTypes.STRING,
                allowNull: false,
                required: true,
                get() {
                    return this.getDataValue('types').split(',')
                },
                set(types) {
                    this.setDataValue('types', types.join(','))
                }
            },
            created: {type: DataTypes.DATE, allowNull: false, required: true}
        },
        {
            freezeTableName: true,
            timestamps: true,
            createdAt: 'created',
            updatedAt: false,
        }
    )
}
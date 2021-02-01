module.exports = (sequelize, DataTypes) => {
  const NotaryInformation = sequelize.define(
    'NotaryInformation',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      officeName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      webSite: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      digitalRecordId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'DigitalRecords',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
    },
    {
      tableName: 'NotaryInformations',
    }
  )

  NotaryInformation.associate = models => {
    NotaryInformation.belongsTo(models.DigitalRecord, {
      foreignKey: 'digitalRecordId',
    })
  }

  return NotaryInformation
}

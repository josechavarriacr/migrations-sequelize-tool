module.exports = (sequelize, DataTypes) => {
  const MeetingConfiguration = sequelize.define(
    'MeetingConfiguration',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      roleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Role',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      locationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Location',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      institutionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Institution',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      lastAssignedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      tableName: 'MeetingConfigurations',
    }
  )
  MeetingConfiguration.associate = models => {
    MeetingConfiguration.belongsTo(models.Role, {
      foreignKey: 'roleId',
    })
    MeetingConfiguration.belongsTo(models.Institution, {
      foreignKey: 'institutionId',
    })
    MeetingConfiguration.belongsTo(models.Location, {
      foreignKey: 'locationId',
    })
  }
  return MeetingConfiguration
}

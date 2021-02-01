module.exports = (sequelize, DataTypes) => {
  const MeetingDefinition = sequelize.define(
    'MeetingDefinition',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
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
      daysFromNow: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      maxDaysToAssign: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      daysForSearch: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        enum: (-1, 0, 1),
      },
      registeredBy: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'User',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      updatedBy: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'User',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
    },
    {
      tableName: 'MeetingDefinitions',
    }
  )
  MeetingDefinition.associate = models => {
    MeetingDefinition.belongsTo(models.Institution, {
      foreignKey: 'institutionId',
    })
    MeetingDefinition.belongsTo(models.User, {
      foreignKey: 'registeredBy',
      as: 'registered',
    })
    MeetingDefinition.belongsTo(models.User, {
      foreignKey: 'updatedBy',
      as: 'updated',
    })
  }
  return MeetingDefinition
}

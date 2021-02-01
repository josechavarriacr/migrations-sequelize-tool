module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define(
    'Appointment',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      identification: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      identificationType: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      identificationTypeCode: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      director: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      name: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      lastName: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      secondLastName: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      position: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      positionCode: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      direction: {
        type: DataTypes.STRING(240),
        allowNull: true,
      },
      directionInCR: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      representation: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      representationCode: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      startDate: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      dueDate: {
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
      organizationId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Organizations',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      procedureId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Procedures',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
    },
    {
      tableName: 'Appointments',
    }
  )

  Appointment.associate = models => {
    Appointment.belongsTo(models.Procedure, {
      foreignKey: 'procedureId',
    })
    Appointment.belongsTo(models.DigitalRecord, {
      foreignKey: 'digitalRecordId',
    })
    Appointment.belongsTo(models.Organization, {
      foreignKey: 'organizationId',
    })
  }

  // Lifecycle Callbacks
  Appointment.afterFind(result => {
    const tempResult = result
    if (tempResult && !tempResult.secondLastName) {
      tempResult.secondLastName = ''
    }
    return tempResult
  })

  Appointment.afterUpdate(result => {
    const tempResult = result
    if (tempResult && !tempResult.secondLastName) {
      tempResult.secondLastName = ''
    }
    return tempResult
  })

  return Appointment
}

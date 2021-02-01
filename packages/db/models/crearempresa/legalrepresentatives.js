module.exports = (sequelize, DataTypes) => {
  const LegalRepresentative = sequelize.define(
    'LegalRepresentative',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      identification: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      position: {
        // CARGO
        type: DataTypes.STRING,
        allowNull: false,
      },
      duesPercentage: {
        // % TENENCIA DE CUOTAS
        type: DataTypes.STRING,
        allowNull: false,
      },
      representation: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      directive: {
        // PERTENCE A LA DIRECTIVA
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      inscriptionDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      validityStart: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      validityEnd: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      validFrom: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      validTo: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      legalStatusId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'LegalStatuses',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      organizationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Organizations',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
    },
    {
      tableName: 'LegalRepresentatives',
    }
  )

  LegalRepresentative.associate = models => {
    LegalRepresentative.belongsTo(models.Organization, {
      foreignKey: 'organizationId',
    })
    LegalRepresentative.belongsTo(models.LegalStatus, {
      foreignKey: 'legalStatusId',
    })
  }

  return LegalRepresentative
}

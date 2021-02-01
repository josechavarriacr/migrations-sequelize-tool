module.exports = (sequelize, DataTypes) => {
  const StayInformation = sequelize.define(
    'StayInformation',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      guestHotelName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      personResponsibleExpensive: {
        type: DataTypes.STRING,
        allowNull: false,
        enum: ('Solicitante', 'Persona que acoge', 'Familiar'),
      },
      livelihoods: {
        type: DataTypes.STRING,
        allowNull: false,
        enum: ('Cheques de Viajero', 'Tarjeta de crédito', 'Efectivo'),
      },
      reasonTrip: {
        type: DataTypes.STRING,
        allowNull: false,
        enum: ('Turismo', 'Visita Familiar', 'Otro'),
      },
      otherReasonTrip: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      firstVisitCR: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastEntryCR: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dayslastTripCR: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dateEntryCountry: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dateDepartureCountry: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      timePermanence: {
        type: DataTypes.STRING,
        allowNull: false,
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
      tableName: 'StayInformation',
    }
  )

  return StayInformation
}

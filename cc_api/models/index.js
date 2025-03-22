// const Sequelize = require('sequelize');
// const sequelize = require('../config/db');
//
// const User = require('./User')(sequelize, Sequelize);
// const Appointment = require('./Appointment')(sequelize, Sequelize);
// const Medication = require('./Medication')(sequelize, Sequelize);
// const Notification = require('./Notification')(sequelize, Sequelize);
// const Assignment = require('./Assignment')(sequelize, Sequelize);
//
// User.hasMany(Appointment, { foreignKey: 'patient_id' });
// User.hasMany(Appointment, { foreignKey: 'caregiver_id' });
// User.hasMany(Medication, { foreignKey: 'patient_id' });
// User.hasMany(Notification, { foreignKey: 'user_id' });
//
// Assignment.belongsTo(User, { as: 'caregiver', foreignKey: 'caregiver_id' });
// Assignment.belongsTo(User, { as: 'patient', foreignKey: 'patient_id' });
//
// module.exports = { sequelize, User, Appointment, Medication, Notification, Assignment };

module.exports = {
    sequelize: { sync: async () => console.log('⚠️ [MOCK] DB-Sync übersprungen') },
    User: {
        create: async (data) => ({ id: 1, ...data }),
    },
    Appointment: {
        create: async () => console.log('⚠️ [MOCK] Termin erstellt')
    },
    Medication: {
        create: async () => console.log('⚠️ [MOCK] Medikament erstellt')
    },
    Notification: {
        create: async () => console.log('⚠️ [MOCK] Benachrichtigung erstellt')
    },
    Assignment: {
        create: async () => console.log('⚠️ [MOCK] Zuweisung erstellt')
    }
};

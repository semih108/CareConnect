const express = require('express');
const dotenv = require('dotenv');
const { sequelize } = require('./models');

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');
const medicationRoutes = require('./routes/medicationRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const assignmentRoutes = require('./routes/assignmentRoutes');

dotenv.config();
const app = express();

app.use(express.json());

// Routen-Mounting
app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/appointments', appointmentRoutes);
app.use('/medications', medicationRoutes);
app.use('/notifications', notificationRoutes);
app.use('/caregivers', assignmentRoutes);

// Server-Start & DB-Sync
const PORT = process.env.PORT || 3000;
sequelize.sync({ force: true }).then(() => {
    console.log('✅ Datenbank synchronisiert');

    app.listen(PORT, () => {
        console.log(`🚀 CareConnect API läuft auf http://localhost:${PORT}`);
    });
});
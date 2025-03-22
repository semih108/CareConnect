exports.getAllAppointments = (req, res) => res.send('Alle Termine');
exports.getAppointmentById = (req, res) => res.send('Einzeltermin');
exports.getAppointmentLocation = (req, res) => res.send('Ort des Termins');
exports.getAppointmentParticipants = (req, res) => res.send('Teilnehmer des Termins');
exports.createAppointment = (req, res) => res.send('Termin erstellen');
exports.updateAppointment = (req, res) => res.send('Termin aktualisieren');
exports.deleteAppointment = (req, res) => res.send('Termin löschen');
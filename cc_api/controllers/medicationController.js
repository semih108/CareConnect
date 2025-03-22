exports.getAllMedications = (req, res) => res.send('Alle Medikamente');
exports.getMedicationById = (req, res) => res.send('Medikament anzeigen');
exports.addMedication = (req, res) => res.send('Medikament hinzufügen');
exports.updateMedication = (req, res) => res.send('Medikament aktualisieren');
exports.deleteMedication = (req, res) => res.send('Medikament löschen');
exports.getMedicationsOfPatient = (req, res) => res.send('Medikamente eines Patienten');
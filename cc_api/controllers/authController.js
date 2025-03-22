const { User } = require('../models');
const bcrypt = require('bcryptjs');
const generateToken = require('../utils/token');

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(404).json({ error: 'Benutzer nicht gefunden' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ error: 'Falsches Passwort' });
        }

        const token = generateToken(user);

        return res.status(200).json({
            message: 'Login erfolgreich',
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });

    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Interner Serverfehler' });
    }
};

exports.registerUser = async (req, res) => {
    const { name, email, password, phone, address, role } = req.body;

    try {
        // Duplikatprüfung
        const existing = await User.findOne({ where: { email } });
        if (existing) {
            return res.status(409).json({ error: 'E-Mail bereits vergeben' });
        }

        // Passwort hashen
        const hashedPassword = await bcrypt.hash(password, 10);

        // Benutzer erstellen
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            phone,
            address,
            role
        });

        // Erfolgsmeldung zurückgeben
        res.status(201).json({
            message: 'Benutzer erfolgreich registriert',
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Interner Serverfehler bei Registrierung' });
    }
};


exports.logoutUser = (req, res) => {
    // Kein echtes Logout nötig bei JWT, aber hier für API-Vollständigkeit
    res.status(200).json({ message: 'Logout erfolgreich' });
};

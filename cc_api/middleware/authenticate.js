const jwt = require('jsonwebtoken');
module.exports = function authenticate(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Kein Token vorhanden' });
    }
    try {
        const token = authHeader.split(' ')[1];
        req.user = jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch {
        return res.status(403).json({ error: 'Ungültiger Token' });
    }
};
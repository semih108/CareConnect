module.exports = function authorize(roles = []) {
    return (req, res, next) => {
        if (!req.user || !roles.includes(req.user.role)) {
            return res.status(403).json({ error: 'Zugriff verweigert' });
        }
        next();
    };
};
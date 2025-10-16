// const jwt = require("jsonwebtoken");
// const User = require("../models/admin"); // adjust path if needed

// const verifyAdmin = async (req, res, next) => {
//     try {
//         const authHeader = req.headers.authorization;
//         if (!authHeader || !authHeader.startsWith("Bearer ")) {
//             return res.status(401).json({ message: "Unauthorized access" });
//         }

//         const token = authHeader.split(" ")[1];
//         const decoded = jwt.verify(token, process.env.SECRET_KEY);

//         const user = await User.findById(decoded.id);

//         if (!user) {
//             return res.status(401).json({ message: "Invalid token: user not found" });
//         }

//         if (user.role !== "admin") {
//             return res.status(403).json({ message: "Forbidden: Admins only" });
//         }

//         req.user = user; // attach user to request object
//         next();
//     } catch (e) {
//         return res.status(401).json({ message: "Invalid or expired token" });
//     }
// };

// module.exports = verifyAdmin;

const jwt = require("jsonwebtoken")
const users = require("../models/admin")

const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        const user = await users.findById(decoded.id)

        if (!user) return res.status(401).json({ message: "User not found" })

        req.user = user
        next()
    } catch (err) {
        return res.status(401).json({ message: "Auth failed" })
    }
}

module.exports = auth

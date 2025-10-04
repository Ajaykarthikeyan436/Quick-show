const { clerkClient } = require('@clerk/express')

const protectAdmin = async (req, res, next) => {
    try {
        const { userId } = req.auth();
        console.log(userId)

        const user = await clerkClient.users.getUser(userId)
        console.log("🔐 Private metadata:", user.privateMetadata);

        if(user.privateMetadata.role !== 'admin') {
            return res.json({ success: false, message: "Not Authorized" })
        }

        next();
    } catch (error) {
        return res.json({ success: false, message: "Not Authorized" })
    }
}

module.exports = protectAdmin
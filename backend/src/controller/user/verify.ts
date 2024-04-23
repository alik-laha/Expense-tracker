import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import User from "../../model/userModel.js"; // Assuming you have a UserDocument type/interface

const Verify = async (req: Request, res: Response) => {
    try {
        const token = req.cookies.token;
        const userid = req.cookies.user;
        if (!token || !userid) {

            return res.status(401).json({ error: 'Unauthorized' });
        }
        const verified = jwt.verify(token, process.env.JWT_SECRET!);
        if (!verified) {

            return res.status(401).json({ error: 'Unauthorized' });
        }
        const user: any = await User.findOne({ where: { userid } });
        if (!user) {

            return res.status(404).json({ error: 'User not found' });
        }
        if (user.isVerifyed) { // Corrected property name to "isVerified"
            return res.status(200).json({ message: 'User verified', verified: true });
        } else {
            return res.status(401).json({ error: 'Unauthorized' });
        }
    } catch (err) {
        console.error(err);
        localStorage.clear();
        return res.status(500).json({ error: 'Server error' });
    }
}

export default Verify;
import User from "../../model/userModel.js";
import { Request, Response } from "express";


const emailVerify = async (req: Request, res: Response) => {
    try {
        const userid = req.cookies.user;

        if (!userid) {
            return res.status(401).json({ error: 'Unauthorized' });
        }
        const user: any = await User.findOne({ where: { userid } });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        if (user.isVerifyed) {
            return res.status(200).json({ message: 'User is already verified' });
        }
        user.isVerifyed = true;
        await user.save();
        return res.status(200).json({ message: 'User verified' });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Server error' });
    }
}

export default emailVerify;
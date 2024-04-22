import User from "../../model/userModel.js";
import { Request, Response } from "express";
import crypto from "crypto";
import { ResetPassword } from "../../helper/mailer.js";

const forgotPassword = async (req: Request, res: Response) => {
    try {
        const { email } = req.body;
        const user: any = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(404).json({ error: "check the email this email is not registered" });
        }
        const verificationCode = crypto.randomBytes(4).toString('hex');
        const Mail = await ResetPassword({ email, id: verificationCode });
        if (Mail) {
            res.cookie('reset', verificationCode, { httpOnly: true })
            res.cookie('user', user.userid, { httpOnly: true });
            return res.status(200).json({ message: "Verification code sent to your email" });
        }
        else {
            return res.status(400).json({ error: "Verification code not sent" });
        }
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Server error' });
    }
}
export default forgotPassword;
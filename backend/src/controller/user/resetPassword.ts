import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../../model/userModel.js";
import { Request, Response } from "express";

const ResetPassword = async (req: Request, res: Response) => {
    try {
        const { password, confirmPass, token } = req.body;
        const code = req.cookies.reset;
        const userid = req.cookies.user;
        const user: any = await User.findOne({ where: { userid } });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        if (password !== confirmPass) {
            return res.status(400).json({ error: 'Password not matched' });
        }
        if (code !== token) {
            return res.status(400).json({ error: 'Invalid token' });
        }
        const validPass = await bcrypt.hash(password, 10);
        if (validPass) {
            const user: any = await User.update({ password: validPass }, { where: { userid } });
            if (user) {
                jwt.sign({ id: user.id }, process.env.JWT_SECRET!, { expiresIn: process.env.JWT_Time }, (err, token) => {
                    if (err) {
                        return res.status(500).json({ error: 'Server error' });
                    }
                    jwt.sign({ id: user.id }, process.env.JWT_SECRET!, { expiresIn: process.env.JWT_Time }, (err, token) => {
                        if (err) {
                            return res.status(500).json({ error: 'Server error' });
                        }
                        res.clearCookie('reset');
                        res.cookie('token', token, { httpOnly: true });
                        return res.status(201).json({ message: 'User password hasbeen reseted' });
                    });
                });
            }

        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Server error' });
    }
}

export default ResetPassword;
import User from "../../model/userModel";
import bcrypt from "bcryptjs";
import { Request, Response } from "express";
import crypto from "crypto";
import { VerifyEmail } from "../../helper/mailer";
import jwt from "jsonwebtoken";

const Signup = async (req: Request, res: Response) => {
    const { name, email, password, confirmPass } = req.body;
    try {
        const id = crypto.randomBytes(8).toString("hex")
        const pass = await bcrypt.hash(password, 10);
        const oldUser = await User.findOne({ where: { email: email } });
        if (oldUser) {
            return res.status(409).json({ error: 'User already exists' });
        }
        const newUser = await User.create({
            userid: id,
            username: name,
            email: email,
            password: pass,
        });
        if (newUser) {
            const Mail = await VerifyEmail({ email, id });
            if (Mail) {
                jwt.sign({ id: id }, process.env.JWT_SECRET!, { expiresIn: process.env.JWT_Time }, (err, token) => {
                    if (err) {
                        return res.status(500).json({ error: 'Server error' });
                    }
                    res.cookie('token', token, { httpOnly: true });
                    res.cookie('user', id, { httpOnly: true });
                    return res.status(201).json({ message: 'User created successfully' });
                });
            }
            else {
                await User.destroy({ where: { email: email } });
                return res.status(400).json({ error: 'User not created' });
            }
        }
        else {
            return res.status(400).json({ error: 'User not created' });
        }
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Server error' });
    }
}
export default Signup;
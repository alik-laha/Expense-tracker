import { Request, Response } from "express";

const logout = async (req: Request, res: Response) => {
    try {
        res.clearCookie('user');
        res.clearCookie('token');
        return res.status(200).json({ message: 'Logout successful' });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Server error' });
    }
}

export default logout;
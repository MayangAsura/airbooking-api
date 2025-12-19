import { allowedOrigins } from "./allowedOrigins.js";

export const credentials = (req, res, next) => {
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        res.header('Access-Control-Allow-Origin', origin);   // wajib
        res.header('Access-Control-Allow-Credentials', 'true');
    } else {
        console.warn(`Blocked CORS request from origin: ${origin}`);
    }
    next();
};
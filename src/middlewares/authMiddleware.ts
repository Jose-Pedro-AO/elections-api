import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import AuthConfig from '../config/auth';

interface ITokenPayload {
  id: string;
  iat: number;
  exp: number;
}

export default function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'not authorized' });
  }

  const token = authorization.replace('Bearer', '').trim();

  try {
    // const data = jwt.verify(
    //   token,
    //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Impvc2VwZWRyb0BnbWFpbC5jb20iLCJpYXQiOjE2NjE3MDA3NzYsImV4cCI6MTY2MTc4NzE3Niwic3ViIjoiZmY3MWMyMDEtMTNiNS00ZmE2LTkxMjItZGZjN2JkMmY5MTdkIn0.xAEtFUrLZC4J2a8lj6dBKy_VbOIlVaBoI8l8HLzJ4jw'
    // );
    const data = jwt.verify(token, String(process.env.JWT_SECRET));

    const { id } = data as ITokenPayload;

    // req.params.id = id;

    return next();
  } catch (err) {
    return res.status(401).json({ message: err });
  }
}

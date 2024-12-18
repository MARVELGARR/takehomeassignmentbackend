import { Router, Request, Response } from 'express';
import { getProperties } from '../actions/getProperties';


const router = Router();

router.get("/properties", getProperties);

export default router;
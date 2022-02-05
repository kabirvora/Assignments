import express from 'express';
import { getAll, createUser, getUser, deleteUser, updateUser } from '../controllers/users.js';

const router = express.Router();



router.get('/', getAll);

router.post('/', createUser);

router.get('/:id', getUser);   

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser)

export default router;
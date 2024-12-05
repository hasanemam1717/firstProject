import express from 'express'
import { createStudentValidationSchema } from '../student/student.validation';
import { UserControllers } from './user.controller';
import validateRequest from '../../middleware/validateRequest';

const router = express.Router()

// user routes
router.post(
    '/create-student',
    validateRequest(createStudentValidationSchema),
    UserControllers.createStudent
);


export const UserRoutes = router;
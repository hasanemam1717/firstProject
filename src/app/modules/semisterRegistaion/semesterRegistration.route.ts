import express from 'express';
import { AcademicSemesterValidations } from './semesterRegistration.validation';
import { AcademicSemesterControllers } from './semesterRegistration.controller';
import validateRequest from '../../middleware/validateRequest';

const router = express.Router();

router.post(
    '/create-academic-semester',
    validateRequest(
        AcademicSemesterValidations.createAcdemicSemesterValidationSchema,
    ),
    AcademicSemesterControllers.createAcademicSemester,
);

router.get('/:courseId', AcademicSemesterControllers.getSingleAcademicSemester);

router.patch(
    '/:courseId',
    validateRequest(
        AcademicSemesterValidations.updateAcademicSemesterValidationSchema,
    ),
    AcademicSemesterControllers.updateAcademicSemester,
);

router.get('/', AcademicSemesterControllers.getAllAcademicSemesters);

export const AcademicSemesterRoutes = router;
import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { AcademicSemesterValidations } from './academicSemister.validation';
import { AcademicSemesterControllers } from './academicSemister.controller';

const router = express.Router();

router.post(
    '/create-academic-semester',
    validateRequest(
        AcademicSemesterValidations.createAcdemicSemesterValidationSchema,
    ),
    AcademicSemesterControllers.createAcademicSemester,
);

router.get(
    '/:semesterId',
    AcademicSemesterControllers.getSingleAcademicSemester,
);

router.patch(
    '/:semesterId',
    validateRequest(
        AcademicSemesterValidations.updateAcademicSemesterValidationSchema,
    ),
    AcademicSemesterControllers.updateAcademicSemester,
);

router.get('/', AcademicSemesterControllers.getAllAcademicSemesters);

export const AcademicSemesterRoutes = router;
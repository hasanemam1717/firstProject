import express from 'express';
import { CourseControllers } from './course.controller';
import { CourseValidations } from './course.validation';
import auth from '../../middleware/auth';
import validateRequest from '../../middleware/validateRequest';

const router = express.Router();

router.post(
    '/create-course',
    auth('admin'),
    validateRequest(CourseValidations.createCourseValidationSchema),
    CourseControllers.createCourse,
);

router.get(
    '/:id',
    auth('student', 'faculty', 'admin'),
    CourseControllers.getSingleCourse,
);

router.patch(
    '/:id',
    auth('admin'),
    validateRequest(CourseValidations.updateCourseValidationSchema),
    CourseControllers.updateCourse,
);

router.delete('/:id', auth('admin'), CourseControllers.deleteCourse);

router.put(
    '/:courseId/assign-faculties',
    validateRequest(CourseValidations.facultiesWithCourseValidationSchema),
    CourseControllers.assignFacultiesWithCourse,
);

router.delete(
    '/:courseId/remove-faculties',
    validateRequest(CourseValidations.facultiesWithCourseValidationSchema),
    CourseControllers.removeFacultiesFromCourse,
);

router.get('/', CourseControllers.getAllCourses);

export const CourseRoutes = router;
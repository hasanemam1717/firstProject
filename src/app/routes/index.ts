import { Router } from 'express';
import { AdminRoutes } from '../modules/Admin/admin.route';
import { AuthRoutes } from '../modules/Auth/auth.route';
import { offeredCourseRoutes } from '../modules/OfferedCourse/OfferedCourse.route';
import { AcademicDepartmentRoutes } from '../modules/academicDepartment/academicDepartment.route';
import { AcademicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.route';
import { StudentRoutes } from '../modules/student/student.route';
import { UserRoutes } from '../modules/user/user.route';
import { FacultyRoutes } from '../modules/faculty/faculty.route';
import { AcademicSemesterRoutes } from '../modules/academicSemister/academicSemister.route';
import { CourseRoutes } from '../modules/course/course.route';

const router = Router();

const moduleRoutes = [
    {
        path: '/users',
        route: UserRoutes,
    },
    {
        path: '/students',
        route: StudentRoutes,
    },
    {
        path: '/faculties',
        route: FacultyRoutes,
    },
    {
        path: '/admins',
        route: AdminRoutes,
    },
    {
        path: '/academic-semesters',
        route: AcademicSemesterRoutes,
    },
    {
        path: '/academic-faculties',
        route: AcademicFacultyRoutes,
    },
    {
        path: '/academic-departments',
        route: AcademicDepartmentRoutes,
    },
    {
        path: '/courses',
        route: CourseRoutes,
    },
    //   {
    //     path: '/semester-registrations',
    //     route: semesterRegistrationRoute,
    //   },
    {
        path: '/offered-courses',
        route: offeredCourseRoutes,
    },
    {
        path: '/auth',
        route: AuthRoutes,
    },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
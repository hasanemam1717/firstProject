import { Router } from "express";
import { StudentRoutes } from "../modules/student/student.route";
import { UserRoutes } from "../modules/user/user.route";
import { AcademicSemesterRoutes } from "../modules/academicSemister/academicSemister.route";

export const router = Router()

const modulesRoute = [
    {
        path: '/students',
        route: StudentRoutes
    },
    {
        path: '/users',
        route: UserRoutes
    },
    {
        path: '/academic-semesters',
        route: AcademicSemesterRoutes,
    },
]

modulesRoute.forEach(route => router.use(route.path, route.route))
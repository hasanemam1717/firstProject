import { Router } from "express";
import { StudentRoutes } from "../modules/student/student.route";
import { UserRoutes } from "../modules/user/user.route";

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
]

modulesRoute.forEach(route => router.use(route.path, route.route))
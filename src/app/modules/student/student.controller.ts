
import { Request, Response } from "express";
import { StudentService } from "./student.service";

const createStudent = async (req: Request, res: Response) => {
    console.log(req.body);
    try {
        const { student: studentData } = req.body
        const result = await StudentService.createStudentIntoDB(studentData);

        console.log("Data", result)
        res.status(200).json({ success: true, massage: "student is created successfully", data: result })
    }
    catch (err) {

        res.status(500).json({ status: false, massage: "something went wrong", error: err })

    }
}
export const StudentControllers = {
    createStudent
}

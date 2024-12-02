import { NextFunction, Request, Response } from "express";
import { UserServices } from "./user.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";


const createStudent = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { password, student: studentData } = req.body;
        // const zodParsedData = studentValidationSchema.parse(studentData);


        const result = await UserServices.createStudentIntoDB(password, studentData);

        // res.status(200).json({
        //     success: true,
        //     message: 'Student is created succesfully',
        //     data: result,
        // });
        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: "Student created successfully",
            data: result

        })
    } catch (err) {
        next(err)
    }
};


export const UserController = {
    createStudent
}
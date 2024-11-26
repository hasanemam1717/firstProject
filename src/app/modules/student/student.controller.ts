import { Request, Response } from 'express';
import { StudentService } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  console.log(req.body);
  try {
    const { student: studentData } = req.body;
    const result = await StudentService.createStudentIntoDB(studentData);

    console.log('Data', result);
    res
      .status(200)
      .json({
        success: true,
        massage: 'student is created successfully',
        data: result,
      });
  } catch (error) {
    res
      .status(500)
      .json({ status: false, massage: 'something went wrong', error: error });
  }
};

const getAllStudent = async (req: Request, res: Response) => {
  try {
    const result = await StudentService.getAllStudentFromDB();
    res
      .status(200)
      .json({
        success: true,
        massage: 'student are retrived successfully',
        data: result,
      });
  } catch (error) {
    res
      .status(500)
      .json({ status: false, massage: 'something went wrong', error: error });
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await StudentService.getSingleStudent(id);
    res
      .status(200)
      .json({
        success: true,
        massage: 'student are retrived successfully',
        data: result,
      });
  } catch (error) {
    res
      .status(500)
      .json({ status: false, massage: 'something went wrong', error: error });
  }
};
export const StudentControllers = {
  createStudent,
  getAllStudent,
  getSingleStudent,
};

import { Request, Response } from 'express';
import { StudentService } from './student.service';
import Joi from 'joi'

const createStudent = async (req: Request, res: Response) => {
  console.log(req.body);
  try {
    //creating uses joy 
    const userNameSchema = Joi.object({
      firstName: Joi.string()
        .required()
        .pattern(/^[A-Z][a-z]*$/)
        .messages({
          "string.empty": "First name is required",
          "string.pattern.base": "First name must start with a capital letter",
        }),
      middleName: Joi.string().optional(),
      lastName: Joi.string()
        .required()
        .alphanum()
        .messages({
          "string.empty": "Last name is required",
          "string.alphanum": "Last name must be alphanumeric",
        }),
    });

    const localGuardianSchema = Joi.object({
      name: Joi.string().required().messages({ "string.empty": "Guardian name is required" }),
      occupation: Joi.string().required().messages({ "string.empty": "Guardian occupation is required" }),
      contactNo: Joi.string().required().messages({ "string.empty": "Guardian contact number is required" }),
      address: Joi.string().required().messages({ "string.empty": "Guardian address is required" }),
    });

    const guardianSchema = Joi.object({
      fatherName: Joi.string().trim().required().messages({ "string.empty": "Father's name is required" }),
      fatherOccupation: Joi.string().required().messages({ "string.empty": "Father's occupation is required" }),
      fatherContactNo: Joi.string().required().messages({ "string.empty": "Father's contact number is required" }),
      motherName: Joi.string().required().messages({ "string.empty": "Mother's name is required" }),
      motherOccupation: Joi.string().required().messages({ "string.empty": "Mother's occupation is required" }),
      motherContactNo: Joi.string().required().messages({ "string.empty": "Mother's contact number is required" }),
    });

    const studentSchema = Joi.object({
      id: Joi.string().required().messages({ "string.empty": "Student ID is required" }),
      name: userNameSchema.required().messages({ "object.base": "Name is required" }),
      gender: Joi.string()
        .valid('male', 'female')
        .required()
        .messages({
          "any.only": "Gender must be either 'male' or 'female'",
          "string.empty": "Gender is required",
        }),
      dateOfBirth: Joi.string().optional(),
      email: Joi.string()
        .email()
        .required()
        .messages({
          "string.email": "Email must be a valid email",
          "string.empty": "Email is required",
        }),
      contactNo: Joi.string().required().messages({ "string.empty": "Contact number is required" }),
      emergencyContactNo: Joi.string().required().messages({ "string.empty": "Emergency contact number is required" }),
      bloodGroup: Joi.string()
        .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
        .optional()
        .messages({
          "any.only": "Blood group must be one of 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'",
        }),
      presentAddress: Joi.string().required().messages({ "string.empty": "Present address is required" }),
      permanentAddress: Joi.string().required().messages({ "string.empty": "Permanent address is required" }),
      guardian: guardianSchema.required().messages({ "object.base": "Guardian information is required" }),
      localGuardian: localGuardianSchema.required().messages({ "object.base": "Local guardian information is required" }),
      profileImg: Joi.string().uri().optional().messages({ "string.uri": "Profile image must be a valid URL" }),
      isActive: Joi.string()
        .valid('active', 'blocked')
        .default('active')
        .messages({
          "any.only": "Status must be either 'active' or 'blocked'",
        }),
    });




    const { student: studentData } = req.body;
    const { error, value } = studentSchema.validate(studentData)
    console.log(error, value);
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

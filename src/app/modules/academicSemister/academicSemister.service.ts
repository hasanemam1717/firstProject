import { TAcademicSemester } from "./academicSemister.interface";
import { academicSemesterNameCodeMapper } from "./academicSemister.constant";
import { AcademicSemester } from "./academicSemister.model";

const createAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {
    // semester name --> semester code
    // academicSemesterNameCodeMapper['Fall']
    if (academicSemesterNameCodeMapper[payload.name] !== payload.code) {
        throw new Error('Invalid Semester Code');
    }

    const result = await AcademicSemester.create(payload);
    return result;
};

const getAllAcademicSemestersFromDB = async () => {
    const result = await AcademicSemester.find();
    return result;
};

const getSingleAcademicSemesterFromDB = async (id: string) => {
    const result = await AcademicSemester.findById(id);
    return result;
};

const updateAcademicSemesterIntoDB = async (
    id: string,
    payload: Partial<TAcademicSemester>,
) => {
    if (
        payload.name &&
        payload.code &&
        academicSemesterNameCodeMapper[payload.name] !== payload.code
    ) {
        throw new Error('Invalid Semester Code');
    }

    const result = await AcademicSemester.findOneAndUpdate({ _id: id }, payload, {
        new: true,
    });
    return result;
};

export const AcademicSemesterServices = {
    createAcademicSemesterIntoDB,
    getAllAcademicSemestersFromDB,
    getSingleAcademicSemesterFromDB,
    updateAcademicSemesterIntoDB,
};
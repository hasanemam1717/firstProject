export type TUser = {
    id: string;
    password: string;
    needsPasswordChange: string;
    role: 'student' | 'faculty' | 'admin';
    isDeleted: boolean;
    status: 'in-progress' | 'blocked'
}
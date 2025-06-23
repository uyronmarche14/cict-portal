export interface RegistrationFormData {
  studentId: string;
  lastName: string;
  firstName: string;
  middleName: string;
  course: string;
  section: string;
}

export interface LoginFormData {
  studentId: string;
  password: string;
}

export interface LoginFormProps {
  onSubmit: (data: LoginFormData) => void;
  isLoading?: boolean;
}

import { RegistrationFormData } from "@/app/types/auth";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export const registerStudent = async (formData: RegistrationFormData) => {
  try {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Registration failed");
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};

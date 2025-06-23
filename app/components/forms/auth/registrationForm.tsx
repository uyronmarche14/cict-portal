"use client";
import Image from "next/image";
import Link from "next/link";
import { User, BookOpen, GraduationCap } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import bg from "@/public/maganda.jpg";
import cict from "@/public/cict.png";
import tcu from "@/public/tcu.png";
import Input from "@/app/components/ui/inputField";
import Button from "@/app/components/ui/button";
import { RegistrationFormData } from "@/app/types/auth";

export default function RegistrationForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<RegistrationFormData>>({});
  const [formData, setFormData] = useState<RegistrationFormData>({
    studentId: "",
    lastName: "",
    firstName: "",
    middleName: "",
    course: "",
    section: "",
  });

  const validateForm = (): boolean => {
    const newErrors: Partial<RegistrationFormData> = {};

    if (!formData.studentId) newErrors.studentId = "Student ID is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.course) newErrors.course = "Course is required";
    if (!formData.section) newErrors.section = "Section is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      setIsLoading(true);
      // TODO: Replace with actual API call
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulated API call
      router.push("/dashboard"); // Redirect after successful registration
    } catch (error) {
      console.error("Registration error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name as keyof RegistrationFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const LeftPanel = () => (
    <div className="relative w-full h-screen hidden lg:block overflow-hidden">
      <Image
        src={bg}
        alt="CICT Background"
        fill
        priority
        className="object-cover brightness-[0.3] scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-blue-900/30 to-transparent" />
      <div className="absolute inset-0 flex flex-col justify-center items-start px-16 text-white z-10">
        <div className="space-y-6 max-w-lg">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <Image
                src={cict}
                alt="CICT Logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <Image
                src={tcu}
                alt="TCU Logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
          </div>
          <h1 className="text-6xl font-bold leading-tight tracking-tight">
            CICT Portal
          </h1>
          <div className="space-y-2">
            <p className="text-xl font-medium opacity-95">
              College of Information and Communications Technology
            </p>
            <p className="text-lg opacity-80">Taguig City University</p>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-white to-white/50 rounded-full mt-8"></div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-2">
      <LeftPanel />

      {/* Right Form Panel */}
      <div className="flex items-center justify-center min-h-screen px-8 lg:px-16 py-12 bg-base">
        <div className="w-full max-w-md space-y-8">
          {/* Mobile Logo Header */}
          <div className="flex justify-center items-center gap-4 lg:hidden mb-8">
            <Image
              src={cict}
              alt="CICT Logo"
              width={48}
              height={48}
              className="object-contain"
            />
            <Image
              src={tcu}
              alt="TCU Logo"
              width={48}
              height={48}
              className="object-contain"
            />
          </div>

          {/* Header */}
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-bold text-headline tracking-tight">
              Student Registration
            </h2>
            <p className="text-paragraph text-base">
              Register for portal access
            </p>
          </div>

          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-4">
              <Input
                label="Student ID"
                type="text"
                placeholder="Enter your student ID"
                id="studentId"
                name="studentId"
                value={formData.studentId}
                onChange={handleChange}
                error={errors.studentId}
                size="lg"
                className="text-base"
                icon={<User className="text-gray-400" size={20} />}
                disabled={isLoading}
              />

              <Input
                label="Last Name"
                type="text"
                placeholder="Enter your last name"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                error={errors.lastName}
                size="lg"
                className="text-base"
                icon={<User className="text-gray-400" size={20} />}
                disabled={isLoading}
              />

              <Input
                label="First Name"
                type="text"
                placeholder="Enter your first name"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                error={errors.firstName}
                size="lg"
                className="text-base"
                icon={<User className="text-gray-400" size={20} />}
                disabled={isLoading}
              />

              <Input
                label="Middle Name"
                type="text"
                placeholder="Enter your middle name (optional)"
                id="middleName"
                name="middleName"
                value={formData.middleName}
                onChange={handleChange}
                size="lg"
                className="text-base"
                icon={<User className="text-gray-400" size={20} />}
                disabled={isLoading}
              />

              <Input
                label="Course"
                type="text"
                placeholder="Enter your course (e.g., BSIT)"
                id="course"
                name="course"
                value={formData.course}
                onChange={handleChange}
                error={errors.course}
                size="lg"
                className="text-base"
                icon={<BookOpen className="text-gray-400" size={20} />}
                disabled={isLoading}
              />

              <Input
                label="Section"
                type="text"
                placeholder="Enter your section (e.g., 3A)"
                id="section"
                name="section"
                value={formData.section}
                onChange={handleChange}
                error={errors.section}
                size="lg"
                className="text-base"
                icon={<GraduationCap className="text-gray-400" size={20} />}
                disabled={isLoading}
              />
            </div>

            <Button
              type="submit"
              label={isLoading ? "Submitting..." : "Submit Registration"}
              variant="primary"
              size="lg"
              fullWidth
              className="bg-accent hover:bg-white text-c font-semibold border-0 shadow-sm transition"
              disabled={isLoading}
            />
          </form>

          {/* Footer */}
          <div className="text-center space-y-4">
            <p className="text-sm text-paragraph">
              Already have an account?{" "}
              <Link
                href="/auth/login"
                className="font-medium text-accent hover:text-secondary transition-colors"
              >
                Sign in
              </Link>
            </p>

            <p className="text-xs text-gray-500 leading-relaxed">
              By registering, you agree to our{" "}
              <Link href="/terms" className="underline hover:no-underline">
                Terms of service
              </Link>{" "}
              &{" "}
              <Link href="/privacy" className="underline hover:no-underline">
                Privacy policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
import Image from "next/image";
import Link from "next/link";
import { User, Lock } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import bg from "@/public/maganda.jpg";
import cict from "@/public/cict.png";
import tcu from "@/public/tcu.png";
import Input from "@/app/components/ui/inputField";
import Button from "@/app/components/ui/button";
import { LoginFormData } from "@/app/types/auth";

export default function LoginForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<LoginFormData>>({});
  const [formData, setFormData] = useState<LoginFormData>({
    studentId: "",
    password: "",
  });

  const validateForm = (): boolean => {
    const newErrors: Partial<LoginFormData> = {};

    if (!formData.studentId) {
      newErrors.studentId = "Student ID is required";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    }

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
      router.push("/dashboard"); // Redirect after successful login
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name as keyof LoginFormData]) {
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
              Welcome back
            </h2>
            <p className="text-paragraph text-base">
              Sign in to your student portal
            </p>
          </div>

          {/* Login Form */}
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
                label="Password"
                type="password"
                placeholder="Enter your password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                error={errors.password}
                size="lg"
                className="text-base"
                icon={<Lock className="text-gray-400" size={20} />}
                disabled={isLoading}
              />
            </div>

            <div className="flex justify-end">
              <Link
                href="/forgot-password"
                className="text-sm font-medium text-accent hover:text-secondary transition-colors"
              >
                Forgot password?
              </Link>
            </div>

            <Button
              type="submit"
              label={isLoading ? "Signing in..." : "Sign in"}
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
              Don't have an account?{" "}
              <Link
                href="/auth/registration"
                className="font-medium text-accent hover:text-secondary transition-colors"
              >
                Register Now
              </Link>
            </p>

            <p className="text-xs text-gray-500 leading-relaxed">
              By signing in, you agree to our{" "}
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

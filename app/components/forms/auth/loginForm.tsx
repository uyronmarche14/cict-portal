"use client";
import Image from "next/image";
import { User, Lock, LogIn } from "lucide-react";
import { useState } from "react";
import bg from "@/public/maganda.jpg";
import cict from "@/public/cict.png";
import tcu from "@/public/tcu.png";
import Input from "@/app/components/ui/inputField";
import Button from "@/app/components/ui/button";
import { LoginFormData } from "@/app/types/auth";

export default function LoginForm() {
  const [formData, setFormData] = useState<LoginFormData>({
    studentId: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("cute");
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-2">
      {/* Left Panel with Image and Overlay */}
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
                size="lg"
                className="text-base"
                icon={<User className="text-gray-400" size={20} />}
              />

              <Input
                label="Password"
                type="password"
                placeholder="Enter your password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                size="lg"
                className="text-base"
                icon={<Lock className="text-gray-400" size={20} />}
              />
            </div>

            <div className="flex justify-end">
              <a
                href="#"
                className="text-sm font-medium text-accent hover:text-secondary transition-colors"
              >
                Forgot password?
              </a>
            </div>

            <Button
              type="submit"
              label="Continue with email"
              variant="primary"
              size="lg"
              fullWidth
              className="bg-accent hover:bg-white text-gray-800 font-semibold border-0 shadow-sm transition"
            />
          </form>

          {/* Footer */}
          <div className="text-center space-y-4">
            <p className="text-sm text-paragraph">
              Already have an account?{" "}
              <a
                href="#"
                className="font-medium text-accent hover:text-secondary transition-colors"
              >
                Sign in
              </a>
            </p>

            <p className="text-xs text-gray-500 leading-relaxed">
              By signing up, you agree to our{" "}
              <a href="#" className="underline hover:no-underline">
                Terms of service
              </a>{" "}
              &{" "}
              <a href="#" className="underline hover:no-underline">
                Privacy policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

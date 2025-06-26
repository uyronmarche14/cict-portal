// app/page.tsx
import { redirect } from "next/navigation";

import AuthLogin from "@/app/auth/login/page";

export default function Home() {
  return (
    <main className="min-h-screen min-w-screen">
      <AuthLogin />
    </main>
  );
}

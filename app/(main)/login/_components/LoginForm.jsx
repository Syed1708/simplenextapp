"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function LoginForm() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    setTimeout(() => {
      if (status === "authenticated" && session?.user) {
        const { role } = session.user;

        if (role === "admin") {
          setSuccess("Login successful!");
          toast.success("Login success as Admin");
          router.push("/dashboard/admin");
        } else if (role === "user") {
          setSuccess("Login successful!");
          toast.success("Login success");
          router.push("/dashboard");
        } else {
          toast.error("Unauthorized role");
          router.push("/unauthorized");
        }
      }
    }, 1500);
  }, [status, session, router]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await signIn("credentials", {
        email: form.email,
        password: form.password,
        redirect: false,
      });

      if (response?.error) {
        toast.error(response.error);
        setError(response.error);
      } else {
        setForm({ email: "", password: "" });
      }
    } catch (err) {
      setError(err.message || "Something went wrong");
    }
  };

  return (
        <>
      {status === "loading" && (
        <p className="text-center py-8 text-gray-500">Loading...</p>
      )}

      {status !== "loading" && (
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && <p className="text-red-600 text-sm">{error}</p>}
{success && <p className="text-green-600 text-sm">{success}</p>}
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              placeholder="••••••••"
              required
            />
          </div>

          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
      )}
    </>

  );
}

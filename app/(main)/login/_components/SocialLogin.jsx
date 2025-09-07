"use client";

import { signIn, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaFacebook } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useEffect } from "react";

export default function SocialLogin() {
  const router = useRouter();
  const { data: session, status } = useSession();

  // const handleLogin = async (provider) => {
  //   const result = await signIn(provider, {
  //     callbackUrl: "/dashboard",
  //     redirect: false,
  //   });

  // //   if (result?.url) {
  // //     window.location.href = result.url;
  // //   }
  //   if (result?.url) {
  //     toast.success("Login success !!")
  //     setTimeout(() => {
  //       router.push(result.url);
  //     }, 3000);

  //   }
  // };

  const handleLogin = (provider) => {
    signIn(provider);
    // signIn(provider, { callbackUrl: "/" }); 
    // await signIn(provider, { redirect: false }); 
  };

  useEffect(() => {
    if (status === "authenticated" && session?.user) {
      const { role, provider } = session.user;

      if (role === "admin") {
        // router.push("/dashboard/admin");
        toast.success(`Login success with ${provider} (Admin)`);
          setTimeout(() => router.push("/dashboard/admin"), 500);
      } else if (role === "user") {
        // router.push("/dashboard");
        toast.success(`Login success with ${provider}`);
          setTimeout(() => router.push("/dashboard"), 500);
      } else {
        toast.error("Unauthorized role");
        router.push("/unauthorized");
      }
    }
  }, [status, session, router]);

  return (
    <div className="flex flex-col gap-3 w-full">
      <Button
        variant="outline"
        className="w-full flex items-center gap-2 cursor-pointer"
        onClick={() => handleLogin("google")}
      >
        <FcGoogle size={20} />
        Continue with Google
      </Button>
    </div>
  );
}

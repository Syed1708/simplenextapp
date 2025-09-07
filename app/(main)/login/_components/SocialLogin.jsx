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
  const session = useSession();

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
  };

  useEffect(() => {
    if (session?.data?.user && session?.data?.user?.provider == "google") {
      //  console.log(session);
      router.push("/");
      toast.success("Login Success with google");
    }
  }, [session?.data?.user]);

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

  
  "use client";

import { signIn } from "next-auth/react";
// import { useRouter } from "next/router";

  


export default function LoginButton() {
//   const router = useRouter();
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [error, setError] = useState();
//   const [loading, setLoading] = useState(false);

//   async function handleSubmit(e) {
//     e.preventDefault();

//     setLoading(true); // start loading
//     setError(null);
//     const res = await signIn("credentials", {
//       redirect: false,
//       email: form.email,
//       password: form.password,
//     });

//     if (!res.error) {
//       toast.success("Login Success");
//       router.push("/");
//     } else {
//       // alert(res.error)
//       setError(res.error);
//     }
//   }
  return (
    // <Button type="submit" className="w-full" disabled={loading}>
    <Button onClick={()=>signIn()} className="w-full">
          {loading ? "Logging in..." : "Login"}
          {/* {error && <p className="text-red-500 text-sm text-center">{error}</p>} */}
    </Button>
  )
}

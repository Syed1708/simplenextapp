
import LoginButton from "./_components/LoginButton";

export default function LoginPage() {


  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="w-80 p-6 border rounded space-y-4"
      >
        <h1 className="text-xl font-bold">Login</h1>
        <Input
          placeholder="Email"
          type="email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <Input
          placeholder="Password"
          type="password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <LoginButton/>
        {/* <Button type="button" onClick={() => signIn("google")} className="w-full bg-red-500">
          Sign in with Google
        </Button> */}
        {/* Optional inline error below form */}
      </form>
    </div>
  );
}

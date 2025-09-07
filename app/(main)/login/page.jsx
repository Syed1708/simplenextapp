
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import LoginForm from "./_components/LoginForm"
import SocialLogin from "./_components/SocialLogin"


export default function Login() {


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-sm shadow-lg rounded-2xl">
        <CardHeader>
          <CardTitle className="text-center text-xl font-semibold">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <LoginForm/>
          <SocialLogin/>
        </CardContent>
      </Card>
    </div>
  )
}

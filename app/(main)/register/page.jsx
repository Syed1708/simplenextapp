
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import RegisterForm from "./_components/RegisterForm"

export default function Register() {


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-sm shadow-lg rounded-2xl">
        <CardHeader>
          <CardTitle className="text-center text-xl font-semibold">Register</CardTitle>
        </CardHeader>
        <CardContent>
          <RegisterForm/>
        </CardContent>
      </Card>
    </div>
  )
}

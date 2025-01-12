import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const LoginPage = () => {
  return (
    <main className="min-h-[100vh] pt-60 text-center bg-[#889090]">
      {/* Login Section */}
      <section>
        <div className="container mx-auto flex justify-center items-center">
          <Card className="w-[400px] shadow-lg">
            <CardHeader>
              <CardTitle>Sign to Continue</CardTitle>
              <CardDescription>Use your Google Account</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="bg-[#5B5251] hover:bg-[#4a3f3e]">
                Continue with Google
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
};

export default LoginPage;

import { SignIn } from "@clerk/nextjs";

// This is the sign-in page for the application. It 
export default function Page() {
  return (
    <div className="flex justify-center items-center h-screen">
      <SignIn />
    </div>
  );
}

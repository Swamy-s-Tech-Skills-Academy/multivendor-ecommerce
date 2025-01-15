import ThemeToggle from "@/components/shared/theme-toggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="p-4">
      <div className="w-100 flex justify-end">
        <ThemeToggle />
      </div>
      <h1 className="text-blue-500">Welcome to the couse !!</h1>
      <h1 className="text-blue-500 font-barlow">Welcome to the couse !!</h1>

      <Button variant="destructive">Shad CN Button</Button>
    </div>
  );
}

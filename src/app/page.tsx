import {Button} from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      Coucou ! 
      <Button variant="slack">Cliquez-moi !</Button>
    </div>
  );
}

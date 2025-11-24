import { Button } from "@/components/ui/button";
import Image from "next/image";

/**
 * Default page of the application
 * @returns 
 */

export default function Home() {
  return (
    <div className="font-inter text-2xl uppercase">
      Welcome
      <Button>
        Subscribe
      </Button>
    </div>
  );
}

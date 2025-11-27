import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const UpgradeToPro = () => {
  return (
    <div className="mt-8 flex items-center flex-col p-5 border-4 rounded-2xl">
      <Image src="/logo.png" alt="logo" width={50} height={50} />
      <h2 className="text-3xl font-game">Upgrade to Pro</h2>
      <p className="font-game text-gray-500 text-xl text-center">
        Join Pro Membership and get all course access
      </p>
      <Link href={"/pricing"}>
        <Button variant={"pixel"} className="font-game text-lg mt-2">
          Upgrade
        </Button>
      </Link>
    </div>
  );
};

export default UpgradeToPro;

import { exploreMoreOptions } from "@/data/explore";
import Image from "next/image";

const ExploreMore = () => {
  return (
    <div className="mt-8">
      <h2 className="text-3xl font-game mb-2">Explore More</h2>
      <div className="grid grid-cols-2 gap-5">
        {exploreMoreOptions.map((option, index) => (
          <div key={option.id} className="flex gap-2 p-2 border rounded-xl bg-zinc-900">
            <Image
              src={option?.icon}
              alt={option?.title}
              width={80}
              height={80}
            />
            <div>
              <h2 className="font-medium text-2xl font-game">{option?.title}</h2>
              <p className="font-game text-gray-400">{option.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreMore;

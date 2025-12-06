import { Button } from "@/components/ui/button"

const CommunityHelpSection = () => {
  return (
    <div className="font-game p-4 border-4 rounded-xl mt-7 flex flex-col items-center">
      <h2 className="text-3xl">
        Need Help?
      </h2>
      <p className="text-2xl">Ask question in your community?</p>
      <Button className="text-2xl mt-3" variant={'pixel'} size={'lg'}>
        Go to community
      </Button>
    </div>
  )
}

export default CommunityHelpSection

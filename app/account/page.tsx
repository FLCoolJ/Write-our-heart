import Link from "next/link"
import { Button } from "@/components/ui/button"

const AccountPage = async () => {
  return (
    <div className="container relative h-[calc(100vh-80px)]">
      <div className="flex flex-col items-start justify-start space-y-2">
        <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight">Account</h1>
        <p className="text-sm text-muted-foreground">Join our waiting list for early access.</p>
      </div>
      <div className="flex flex-col items-center justify-center space-y-4">
        <p>Cards expire after 2 months</p>
        <p>Additional cards: $4.99 each</p>
        <Link href="https://launch.writeourheart.com">
          <Button className="w-full">Join Waiting List</Button>
        </Link>
      </div>
    </div>
  )
}

export default AccountPage

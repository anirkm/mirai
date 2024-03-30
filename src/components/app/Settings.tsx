import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Separator } from "@radix-ui/react-separator";
export default function SettingsComponenet() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
      className="flex *:w-[50vw] justify-center"
    >
      <Tabs defaultValue="account">
        <TabsList className="w-full">
          <TabsTrigger value="account" className="w-full">
            Account
          </TabsTrigger>
          <TabsTrigger value="billing" className="w-full">
            Billing
          </TabsTrigger>
          <TabsTrigger value="team" className="w-full">
            Team
          </TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <div className="flex flex-col space-y-8 bg-zinc-900 p-4 rounded-lg border-2">
            <div className="flex flex-col space-y-0.5">
              <p className="font-bold text-xl">Profile</p>
              <p className="text-base text-gray-300">
                This displays your public profile on the site.
              </p>
            </div>
            <div className="flex flex-row space-x-4 items-center bg-zinc-950 p-4 rounded-lg border-2">
              <div>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
              <div className="flex flex-col space-y-1">
                <p className="font-semibold">Yatsuki</p>
                <div className="text-sm text-gray-400">
                  <p>pro plan</p>
                  <p>yatsu@email.moe</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-0.5">
              <p className="font-bold text-xl">2 Factor Authentification</p>
              <p className="text-base text-gray-300">
                Setup 2FA for a more secure experience.
              </p>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="team">
          <div className="flex flex-col space-y-8 bg-zinc-900 p-4 rounded-lg border-2">
            <div className="flex flex-col space-y-0.5">
              <p className="font-bold text-xl">Teams</p>
              <p className="text-base text-gray-300">
                Manage and invite Team Members.
              </p>
            </div>
            <div className="flex flex-row space-x-4 items-center bg-zinc-950 p-4 rounded-lg border-2">
              <div className="flex flex-row justify-between items-center w-full">
                <p>Invite new members by email address</p>
                <Button className="w-[150px]">Invite</Button>
              </div>
              <Separator />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
}

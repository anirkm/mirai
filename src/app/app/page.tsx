"use client";

import Link from "next/link";
import {
  Bell,
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
  Users,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import TicketsComponent from "@/components/app/Tickets";
import DashboardComponent from "@/components/app/Dashboard";
import PlanComponent from "@/components/app/Plan";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function renderTabContent(selectedTab: string) {
  switch (selectedTab) {
    case "dashboard":
      return <DashboardComponent />;
    case "tickets":
      return <TicketsComponent />;
    case "plan":
      return <PlanComponent />;

    default:
      return (
        <div>
          <h1>404 Not Found</h1>
        </div>
      );
  }
}

import { BackgroundGradient } from "@/components/ui/backgroud-gradient";

export function Dashboard() {
  const [selectedTab, setSelectedTab] = useState("tickets");

  return (
    <motion.div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Package2 className="h-6 w-6" />
              <span className="">Mirai</span>
            </Link>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1">
            <nav className="grid gap-2 items-start transition-colors duration-300 px-4 text-sm font-medium lg:px-4">
              <Link
                onClick={() => {
                  setSelectedTab("dashboard");
                }}
                href="#"
                className={`flex items-center gap-2 rounded-xl px-3 py-2 ${
                  selectedTab === "dashboard"
                    ? "bg-muted text-violet-500 hover:text-violet-600"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Home className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                onClick={() => {
                  setSelectedTab("mitigation-settings");
                }}
                href="#"
                className={`flex items-center transition-colors duration-300 gap-2 rounded-xl px-3 py-2 ${
                  selectedTab === "mitigation-settings"
                    ? "bg-muted text-violet-500 hover:text-violet-600"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Home className="h-4 w-4" />
                Mitigation Settings
              </Link>
              <Link
                onClick={() => {
                  setSelectedTab("tickets");
                }}
                href="#"
                className={`flex items-center transition-colors duration-300 gap-2 rounded-xl px-3 py-2 ${
                  selectedTab === "tickets"
                    ? "bg-muted text-violet-500 hover:text-violet-600"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Home className="h-4 w-4" />
                Tickets
              </Link>
              <Link
                onClick={() => {
                  setSelectedTab("plan");
                }}
                href="#"
                className={`flex items-center transition-colors duration-300 gap-2 rounded-xl px-3 py-2 ${
                  selectedTab === "plan"
                    ? "bg-muted text-violet-500 hover:text-violet-600"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Home className="h-4 w-4" />
                Plan
              </Link>
            </nav>
          </div>

          <div className="p-2  pb-4 fixed bottom-4 left-4 max-w-[245px]">
            <BackgroundGradient>
              <Card>
                <CardHeader className="p-2 pt-0 md:p-4">
                  <CardTitle className="text-lg">Upgrade to Pro</CardTitle>
                  <CardDescription>
                    Unlock all features and get unlimited access to our support
                    team.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                  <Button size="sm" className="w-full">
                    Upgrade
                  </Button>
                </CardContent>
              </Card>
            </BackgroundGradient>
          </div>
        </div>
      </div>
      <motion.div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <Link
                  href="#"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <Package2 className="h-6 w-6" />
                  <span className="sr-only">Mirai</span>
                </Link>
                <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Home className="h-5 w-5" />
                  Dashboard
                </Link>
                <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Orders
                  <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    6
                  </Badge>
                </Link>
                <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Package className="h-5 w-5" />
                  Products
                </Link>
                <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Users className="h-5 w-5" />
                  Customers
                </Link>
                <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <LineChart className="h-5 w-5" />
                  Analytics
                </Link>
              </nav>
              <div className="mt-auto">
                <BackgroundGradient>
                  <Card>
                    <CardHeader>
                      <CardTitle>Upgrade to Pro</CardTitle>
                      <CardDescription>
                        Unlock all features and get unlimited access to our
                        support team.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button size="sm" className="w-full">
                        Upgrade
                      </Button>
                    </CardContent>
                  </Card>
                </BackgroundGradient>
              </div>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                {selectedTab === "dashboard" ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-row space-x-4 items-center"
                  >
                    <motion.div>
                      <motion.h3 className="text-base text-nowrap font-semibold md:text-base">
                        Select Server
                      </motion.h3>
                    </motion.div>
                    <motion.div className="w-[50vw]">
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Theme" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">Light</SelectItem>
                          <SelectItem value="dark">Dark</SelectItem>
                          <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                      </Select>
                    </motion.div>
                  </motion.div>
                ) : null}
              </div>
            </form>
          </div>
          <DropdownMenu>
            <p className="font-semibold">Yatsuki</p>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <motion.main
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <motion.h1
              whileHover={{ scale: 1.05 }}
              className="text-lg font-semibold md:text-xl"
            >
              {selectedTab}
            </motion.h1>
          </motion.div>
          <Separator className="bg-zinc-800" />
          {renderTabContent(selectedTab)}
        </motion.main>
      </motion.div>
    </motion.div>
  );
}

export default Dashboard;

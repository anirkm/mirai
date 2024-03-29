import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { SmileIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  Bird,
  Book,
  Bot,
  Code2,
  CornerDownLeft,
  LifeBuoy,
  Mic,
  Paperclip,
  Rabbit,
  Settings,
  Settings2,
  Share,
  SquareUser,
  Triangle,
  Turtle,
} from "lucide-react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { motion } from "framer-motion";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "../ui/separator";
import { SelectTicketType } from "./selectTicketType";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { useMediaQuery } from "@/hooks/use-media-query";

interface MessageBubbleProps {
  message: string;
  isOwnMessage: boolean;
}
import { toast } from "sonner";

import { CardContent } from "@/components/ui/card";

import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { useRef, useState } from "react";

export default function TicketsComponent() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<MessageBubbleProps[]>([
    {
      message: "Hello, how can I help you today?",
      isOwnMessage: false,
    },
    {
      message: "I need help with my account.",
      isOwnMessage: true,
    },
    {
      message: "Sure, what seems to be the problem?",
      isOwnMessage: false,
    },
    {
      message: "I can't log in.",
      isOwnMessage: true,
    },
    {
      message: "I can help you with that. Please hold on.",
      isOwnMessage: false,
    },
    {
      message: "Sure, take your time.",
      isOwnMessage: true,
    },
    {
      message: "Sure, take your time.",
      isOwnMessage: true,
    },
    {
      message: "Sure, take your time.",
      isOwnMessage: true,
    },
    {
      message: "Sure, take your time.",
      isOwnMessage: true,
    },
    {
      message: "Sure, take your time.",
      isOwnMessage: true,
    },
    {
      message: "Sure, take your time.",
      isOwnMessage: true,
    },
    {
      message: "Sure, take your time.",
      isOwnMessage: true,
    },
    {
      message: "Sure, take your time.",
      isOwnMessage: true,
    },
    {
      message: "Sure, take your time.",
      isOwnMessage: true,
    },
    {
      message: "Sure, take your time.",
      isOwnMessage: true,
    },
    {
      message: "Sure, take your time.",
      isOwnMessage: true,
    },
    {
      message: "Sure, take your time.",
      isOwnMessage: false,
    },
    {
      message: "Sure, take your time.",
      isOwnMessage: true,
    },
  ]);

  interface ticket {
    id: number;
    subject: string;
    status: string;
  }

  const [selectedTicket, setSelectedTicket] = useState<ticket | null>(null);

  const [message, setMessage] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleEmojiSelect = (emoji: any) => {
    if (textareaRef.current) {
      const start = textareaRef.current.selectionStart;
      const end = textareaRef.current.selectionEnd;
      const textBefore = message.substring(0, start);
      const textAfter = message.substring(end, message.length);
      setMessage(textBefore + emoji + textAfter);
    }
  };

  const handleMessageSubmit = () => {
    if (!message) return;
    setMessages([...messages, { message, isOwnMessage: true }]);
    setMessage("");
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  };

  return (
    <div className="flex flex-col h-full space-y-8 max-h-[85vh]">
      <div className="flex flex-row items-center space-x-5 justify-between">
        <p className="text-xl font-semibold text-nowrap">Create a new ticket</p>
        <div>
          <Dialog>
            <DialogTrigger>
              {" "}
              <Button>Create your ticket</Button>
            </DialogTrigger>
            <DialogContent className="flex flex-col justify-start max-w-[50vh]">
              <DialogHeader className="space-y-6 w-full">
                <div className="space-y-3">
                  <DialogTitle className="text-left">
                    Create your ticket
                  </DialogTitle>
                  <Separator />
                </div>
                <DialogDescription className="space-y-3 w-full">
                  <p className="text-gray-50 text-base">Select a topic:</p>
                  <SelectTicketType />
                  <p className="text-gray-50 text-base">Write your message:</p>
                  <Textarea
                    className="w-full min-h-[15vh] resize-none"
                    placeholder="Type your message here."
                  />
                  <div className="flex items-center pt-0">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <Paperclip className="size-4" />
                            <span className="sr-only">Attach file</span>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent side="top">Attach File</TooltipContent>
                      </Tooltip>
                      <Button
                        type="submit"
                        size="sm"
                        className="ml-auto gap-1.5"
                      >
                        Create Ticket
                        <CornerDownLeft className="size-3.5" />
                      </Button>
                    </TooltipProvider>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <main className="h-full overflow-hidden max-h-[100vh]">
        <ResizablePanelGroup
          direction={isDesktop ? "horizontal" : "vertical"}
          className="space-x-4"
        >
          <ResizablePanel defaultSize={35} minSize={22}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <Tabs defaultValue="active">
                <TabsList className="w-full">
                  <TabsTrigger value="active" className="w-full">
                    In Progress (0)
                  </TabsTrigger>
                  <TabsTrigger value="completed" className="w-full">
                    Completed (0)
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="active">
                  <Table>
                    <TableCaption>A list of your active tickets.</TableCaption>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[100px]">Ticked ID</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Subject</TableHead>
                        <TableHead className="text-right"></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">39432</TableCell>
                        <TableCell>Awaiting reply</TableCell>
                        <TableCell>Account suspended</TableCell>
                        <TableCell className="text-right">
                          <Button
                            onClick={() => {
                              setSelectedTicket({
                                id: 39432,
                                subject: "Account suspended",
                                status: "Awaiting reply",
                              });
                            }}
                          >
                            Show
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">39432</TableCell>
                        <TableCell>Awaiting reply</TableCell>
                        <TableCell>Account suspended</TableCell>
                        <TableCell className="text-right">
                          <Button
                            onClick={() => {
                              setSelectedTicket({
                                id: 39432,
                                subject: "Account suspended",
                                status: "Awaiting reply",
                              });
                            }}
                          >
                            Show
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">39432</TableCell>
                        <TableCell>Awaiting reply</TableCell>
                        <TableCell>Account suspended</TableCell>
                        <TableCell className="text-right">
                          <Button
                            onClick={() => {
                              setSelectedTicket({
                                id: 39432,
                                subject: "Account suspended",
                                status: "Awaiting reply",
                              });
                            }}
                          >
                            Show
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TabsContent>
                <TabsContent value="completed">
                  Change your password here.
                </TabsContent>
              </Tabs>
            </motion.div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel minSize={40}>
            {selectedTicket ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2 overflow-hidden"
              >
                <CardContent className="bg-zinc-950 rounded-2xl p-4 mb-8 mt-4">
                  <div className="flex flex-row space-x-4 items-start">
                    <Badge variant="default" className="mt-0.5">
                      {selectedTicket.status}
                    </Badge>
                    <div className="flex flex-col space-y-2">
                      <p>
                        <span className="font-semibold">Ticket ID:</span>{" "}
                        {selectedTicket.id}
                      </p>
                      <p>
                        <span className="font-semibold">Subject:</span>{" "}
                        {selectedTicket.subject}
                      </p>
                    </div>
                  </div>
                </CardContent>
                <div className="flex-1 sm:p-2 p-4 flex flex-col overflow-y-auto scroll-auto">
                  {messages.map((message, index) => {
                    const previousMessage = messages[index - 1];
                    const isSameUser =
                      previousMessage &&
                      previousMessage.isOwnMessage === message.isOwnMessage;
                    return (
                      <div
                        key={index}
                        className={`flex ${
                          message.isOwnMessage ? "justify-end" : "justify-start"
                        } ${isSameUser ? "pt-3" : ""}`}
                      >
                        <div className="flex flex-col">
                          <div
                            className={`p-2 rounded-lg ${
                              message.isOwnMessage
                                ? "bg-blue-700 text-white rounded-br-none"
                                : "bg-zinc-700 text-white rounded-bl-none"
                            }`}
                          >
                            {message.message}
                          </div>
                          <div className="text-sm text-gray-500 mt-1">
                            {new Date().toLocaleTimeString()}
                          </div>
                        </div>
                        {message.isOwnMessage && (
                          <Avatar className="ml-2">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                          </Avatar>
                        )}
                      </div>
                    );
                  })}
                  <div ref={messagesEndRef} />
                </div>
                <form className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring mt-3">
                  <Label htmlFor="message" className="sr-only">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    ref={textareaRef}
                    placeholder="Type your message here..."
                    className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
                  />
                  <div className="flex items-center p-3 pt-0">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <Paperclip className="size-4" />
                            <span className="sr-only">Attach file</span>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent side="top">Attach File</TooltipContent>
                      </Tooltip>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <Mic className="size-4" />
                            <span className="sr-only">Use Microphone</span>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent side="top">
                          Use Microphone
                        </TooltipContent>
                      </Tooltip>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Popover>
                            <PopoverTrigger>
                              <Mic className="size-5" />
                              <span className="sr-only">Use Microphodne</span>
                            </PopoverTrigger>
                            <PopoverContent className="w-full">
                              <Picker
                                emojiSize={18}
                                theme="dark"
                                data={data}
                                maxFrequentRows={1}
                                onEmojiSelect={(emoji: any) =>
                                  handleEmojiSelect(emoji.native)
                                }
                              />
                            </PopoverContent>
                          </Popover>
                        </TooltipTrigger>
                        <TooltipContent side="top">
                          Use Microphone
                        </TooltipContent>
                      </Tooltip>
                      <div className="flex flex-row items-center space-x-3 ml-auto">
                        <Popover>
                          <PopoverTrigger>
                            <SmileIcon className="size-6" />
                            <span className="sr-only">Use Microphodne</span>
                          </PopoverTrigger>
                          <PopoverContent className="w-full">
                            <Picker
                              emojiSize={18}
                              theme="dark"
                              data={data}
                              maxFrequentRows={1}
                              onEmojiSelect={(emoji: any) =>
                                handleEmojiSelect(emoji.native)
                              }
                            />
                          </PopoverContent>
                        </Popover>
                        <Button
                          type="submit"
                          size="sm"
                          className="ml-auto gap-1.5"
                          onClick={(e) => {
                            e.preventDefault();
                            if (!message) {
                              toast("Please enter a message to send.");
                              return;
                            }
                            handleMessageSubmit();
                          }}
                        >
                          Send Message
                          <CornerDownLeft className="size-3.5" />
                        </Button>
                      </div>
                    </TooltipProvider>
                  </div>
                </form>
              </motion.div>
            ) : (
              <div className="flex justify-center items-center h-full">
                <motion.div
                  whileHover={
                    isDesktop
                      ? { scale: 1.05, transition: { duration: 0.2 } }
                      : {}
                  }
                  className="bg-zinc-900 rounded-lg p-6 border-2"
                >
                  <p className="text-center text-2xl font-semibold">
                    Select a ticket to view its details.
                  </p>
                </motion.div>
              </div>
            )}
          </ResizablePanel>
        </ResizablePanelGroup>
      </main>
    </div>
  );
}

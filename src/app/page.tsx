/* eslint-disable @next/next/no-img-element */
"use client";

import Navbar from "@/components/navbar";
import React from "react";
import { Button } from "@/components/ui/button";
import { TypewriterEffect } from "@/components/ui/typewritter-effect";
import { BackgroundGradient } from "@/components/ui/backgroud-gradient";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

export default function Me() {
  const heroheader = [
    {
      text: "Welcome",
      className: "text-white",
    },
    {
      text: "to",
      className: "text-white",
    },
    {
      text: "Mirai.",
      className: "text-purple-500",
    },
  ];

  return (
    <motion.main
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col justify-center items-center space-y-32 mt-6 mx-4"
    >
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: -100, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.6 }}
        >
          <Navbar />
        </motion.div>
      </AnimatePresence>

      <motion.div className="flex flex-col space-y-8 items-center justify-center max-w-[60vh]">
        <TypewriterEffect words={heroheader} />
        <p className="text-lg font-light text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          asperiores et magni reprehenderit recusandae cum minus laborum hic,
          tenetur rem quisquam illum explicabo esse in quasi praesentium
          distinctio? Excepturi, distinctio!
        </p>
        <div className="flex flex-row space-x-4">
          <motion.div
            whileTap={{ scale: 0.9 }}
            whileHover={{
              scale: 1.08,
              transition: { duration: 0.3 },
            }}
          >
            <Button size={"lg"} className="font-bold border-2 border-[#1a1a1a]">
              Get Started
            </Button>
          </motion.div>
          <motion.div
            whileTap={{ scale: 0.9 }}
            whileHover={{
              scale: 1.08,
              transition: { duration: 0.3 },
            }}
          >
            <Button size={"lg"} className="font-bold border-2 border-[#1a1a1a]">
              Support
            </Button>
          </motion.div>
        </div>
        <div>
          <img
            src="https://restorio.net/assets/screenshot2-9776c8d9.png"
            alt=""
            className="rounded-2xl shadow-lg border-2 border-[#1a1a1a] transition-transform hover:scale-[1.03]"
          />
        </div>
        <div className="flex justify-center items-center flex-col space-y-14">
          <p className="font-bold text-2xl lg:text-3xl">So what we got for you ? rien</p>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div className="flex flex-col justify-center p-2  transition-transform hover:scale-[1.03] space-y-4 items-center min-w-[300px] min-h-60 bg-zinc-900 my-1 rounded-2xl text-center">
              <img
                src="https://r2.guns.lol/guns_logo.png"
                alt=""
                width={"80px"}
                height={"80px"}
              />
              <div className="flex flex-col space-y-2">
                <p className="font-semibold text-lg">667 EKIP</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </div>
            </div>
            <div className="flex flex-col justify-center p-2  transition-transform hover:scale-[1.03] space-y-4 items-center min-w-[300px] min-h-60 bg-zinc-900 my-1 rounded-2xl text-center">
              <img
                src="https://r2.guns.lol/guns_logo.png"
                alt=""
                width={"80px"}
                height={"80px"}
              />
              <div className="flex flex-col space-y-2">
                <p className="font-semibold text-lg">667 EKIP</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </div>
            </div>
            <div className="flex flex-col justify-center p-2  transition-transform hover:scale-[1.03] space-y-4 items-center min-w-[300px] min-h-60 bg-zinc-900 my-1 rounded-2xl text-center">
              <img
                src="https://r2.guns.lol/guns_logo.png"
                alt=""
                width={"80px"}
                height={"80px"}
              />
              <div className="flex flex-col space-y-2">
                <p className="font-semibold text-lg">667 EKIP</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </div>
            </div>
            <div className="flex flex-col justify-center p-2  transition-transform hover:scale-[1.03] space-y-4 items-center min-w-[300px] min-h-60 bg-zinc-900 my-1 rounded-2xl text-center">
              <img
                src="https://r2.guns.lol/guns_logo.png"
                alt=""
                width={"80px"}
                height={"80px"}
              />
              <div className="flex flex-col space-y-2">
                <p className="font-semibold text-lg">667 EKIP</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.main>
  );
}

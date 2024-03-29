"use client";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <motion.main className="flex justify-center items-center h-screen">
      <motion.div className="min-w-[35vh] min-h-[45vh] bg-zinc-950 rounded-3xl border-4"></motion.div>
    </motion.main>
  );
}

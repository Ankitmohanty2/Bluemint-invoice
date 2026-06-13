"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { ThemeToggleButton } from "@/components/theme-toggle-button";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="sticky top-0 z-50 flex justify-center pt-6 px-4 pb-4 pointer-events-none">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="pointer-events-auto flex items-center justify-between w-full max-w-5xl bg-white/70 dark:bg-zinc-900/80 backdrop-blur-xl border border-black/5 dark:border-zinc-800 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-none rounded-full px-6 py-3"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 select-none">
            <Image 
              src="/assets/logos/bluemint_logo.png" 
              alt="bluemint logo" 
              width={240} 
              height={80} 
              className="w-24 md:w-28 h-auto object-contain dark:hidden" 
              priority
            />
            <Image 
              src="/assets/logos/bluemin-dark1.png" 
              alt="bluemint logo dark" 
              width={240} 
              height={80} 
              className="w-24 md:w-28 h-auto object-contain hidden dark:block" 
              priority
            />
        </Link>

        {/* Links (Desktop) */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { name: "Home", href: "/" },
            { name: "Solutions", href: "/#solutions" },
            { name: "Features", href: "/#features" }
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <ThemeToggleButton />
          <Link href="/generate">
            <button className="bg-foreground text-background px-5 py-2 rounded-full text-xs font-bold shadow-md hover:scale-105 transition-transform">
              Get started
            </button>
          </Link>
        </div>
      </motion.nav>
    </div>
  );
}

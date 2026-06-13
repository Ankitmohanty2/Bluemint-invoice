"use client";
import Link from "next/link";
import Image from "next/image";
import { Twitter, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-50 dark:bg-zinc-950/50 text-foreground pt-20 pb-8 px-6 md:px-10 overflow-hidden relative border-t border-border mt-10">
      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Logo and Description Column */}
          <div className="md:col-span-5 pr-8">
            <Link href="/" className="inline-block mb-6 select-none">
              <Image 
                src="/assets/logos/bluemint_logo.png" 
                alt="bluemint logo" 
                width={240} 
                height={80} 
                className="w-48 h-auto object-contain dark:hidden" 
              />
              <Image 
                src="/assets/logos/bluemin-dark1.png" 
                alt="bluemint logo dark" 
                width={240} 
                height={80} 
                className="w-48 h-auto object-contain hidden dark:block" 
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-sm">
              The world's simplest invoice generator. Create, customize, and download beautiful invoices instantly without the hassle of signing up. Free forever.
            </p>
            <div className="flex gap-4">
              <Link href="https://twitter.com/ankitmohanty" target="_blank" className="w-9 h-9 rounded-full bg-white dark:bg-zinc-900 border border-border flex items-center justify-center text-muted-foreground hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-foreground cursor-pointer transition-all shadow-sm">
                <Twitter className="w-4 h-4" />
              </Link>
              <Link href="https://github.com/ankitmohanty" target="_blank" className="w-9 h-9 rounded-full bg-white dark:bg-zinc-900 border border-border flex items-center justify-center text-muted-foreground hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-foreground cursor-pointer transition-all shadow-sm">
                <Github className="w-4 h-4" />
              </Link>
              <Link href="https://linkedin.com/in/ankitmohanty" target="_blank" className="w-9 h-9 rounded-full bg-white dark:bg-zinc-900 border border-border flex items-center justify-center text-muted-foreground hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-foreground cursor-pointer transition-all shadow-sm">
                <Linkedin className="w-4 h-4" />
              </Link>
              <Link href="mailto:hello@bluemint.com" className="w-9 h-9 rounded-full bg-white dark:bg-zinc-900 border border-border flex items-center justify-center text-muted-foreground hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-foreground cursor-pointer transition-all shadow-sm">
                <Mail className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-foreground mb-4 text-sm tracking-wide uppercase">Product</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link href="/generate" className="hover:text-foreground transition-colors">Invoice Generator</Link></li>
                <li><Link href="/#features" className="hover:text-foreground transition-colors">Features</Link></li>
                <li><Link href="/#solutions" className="hover:text-foreground transition-colors">Solutions</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Templates</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4 text-sm tracking-wide uppercase">Company</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground transition-colors">About Us</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Blog</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4 text-sm tracking-wide uppercase">Legal</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-foreground transition-colors">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground pt-8 z-10 relative">
          <p>&copy; {new Date().getFullYear()} Bluemint. All Rights Reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              All systems operational
            </span>
          </div>
        </div>
      </div>

      {/* Background Watermark */}
      <div className="absolute bottom-[-10%] left-1/2 transform -translate-x-1/2 w-full text-center pointer-events-none select-none z-0 overflow-hidden opacity-[0.02] dark:opacity-[0.04]">
        <h1 className="text-[20vw] font-black tracking-tighter leading-none" style={{ letterSpacing: "-0.05em" }}>
          bluemint
        </h1>
      </div>
    </footer>
  );
}

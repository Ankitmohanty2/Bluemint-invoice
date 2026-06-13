"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-40 pb-20 px-4 md:px-6 bg-background overflow-x-clip">
      <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center text-center">
        
        {/* Floating Elements (CSS representations) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full pointer-events-none z-0">
          {/* Yellow Sticky Note */}
          <motion.div
            initial={{ rotate: -15, y: 20, opacity: 0 }}
            animate={{ rotate: 6, y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute top-[-40px] md:top-[-60px] right-[-5%] md:right-[-10%] bg-yellow-300 w-32 h-32 md:w-48 md:h-48 p-3 md:p-5 shadow-xl flex items-center justify-center pointer-events-auto hover:rotate-12 transition-transform cursor-pointer z-0"
            style={{ boxShadow: "5px 15px 30px rgba(0,0,0,0.15)" }}
          >
            <p className="font-medium text-slate-800 text-sm md:text-lg leading-snug transform -rotate-2 font-secondary text-center">
              The world's simplest invoice generator.
            </p>
          </motion.div>

          {/* Red Book / Box (Left) */}
          <motion.div
            initial={{ rotate: 10, x: -50, opacity: 0 }}
            animate={{ rotate: 25, x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden md:flex absolute top-[30%] left-[-15%] bg-orange-600 w-24 h-32 rounded shadow-2xl items-center justify-center pointer-events-auto z-0"
            style={{ boxShadow: "10px 20px 40px rgba(234, 88, 12, 0.3)" }}
          >
            <div className="w-20 h-full border-l-2 border-orange-800 opacity-50" />
            <div className="absolute w-full h-1 bg-black/20 rotate-45 transform" />
            <div className="absolute w-full h-1 bg-black/20 -rotate-45 transform top-1/2" />
          </motion.div>

          {/* Paperclip (Right) */}
          <motion.div
            initial={{ rotate: 0, y: 50, opacity: 0 }}
            animate={{ rotate: -15, y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="hidden md:block absolute top-[50%] right-[-12%] w-8 h-24 border-4 border-slate-300 rounded-full pointer-events-auto z-0"
            style={{ boxShadow: "2px 5px 10px rgba(0,0,0,0.1)", borderRadius: "20px" }}
          >
            <div className="absolute top-2 left-1.5 w-4 h-16 border-4 border-slate-300 border-t-0 rounded-b-full" />
          </motion.div>
        </div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-foreground max-w-4xl relative z-20 leading-[1.1]"
        >
          Generate Professional <br className="hidden sm:block" />
          Invoices in <span className="relative inline-block">
            Seconds
            <svg className="absolute w-full h-4 -bottom-3 left-0 text-orange-500" viewBox="0 0 200 20" preserveAspectRatio="none">
              <path d="M0,15 Q100,0 200,15" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 text-lg text-muted-foreground max-w-2xl leading-relaxed"
        >
          Create, customize, and download beautiful invoices instantly. No sign-up required, completely free.
        </motion.p>

        {/* Partners */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-24 w-full"
        >
          <p className="text-sm font-medium text-muted-foreground mb-8 uppercase tracking-widest">
            Trusted by world leading companies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Logos text representation */}
            <span className="text-xl font-bold text-foreground">ZipBooks</span>
            <span className="text-xl font-bold text-blue-500">xero</span>
            <span className="text-xl font-bold text-green-600">quickbooks</span>
            <span className="text-xl font-bold text-foreground">QUICKFILE</span>
            <span className="text-xl font-bold text-blue-400">FreshBooks</span>
          </div>
        </motion.div>

        {/* Dashboard Mockups */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 md:mt-20 w-full relative h-[300px] md:h-[400px] max-w-lg md:max-w-none mx-auto"
        >
           {/* Mockup Card 1 */}
           <div className="absolute left-0 sm:left-[5%] md:left-[15%] lg:left-[20%] top-0 bg-card/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-border p-4 md:p-6 w-[280px] sm:w-[320px] md:w-[350px] text-left transform -rotate-3 z-20">
             <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-bold text-muted-foreground tracking-wider">FROM</span>
                <div className="flex -space-x-2">
                   <div className="w-8 h-8 rounded-full bg-blue-100 border-2 border-card flex items-center justify-center text-blue-600 font-bold text-xs">G</div>
                </div>
             </div>
             <h3 className="text-xl font-bold text-foreground">General Electric LLC.</h3>
             <p className="text-xs text-muted-foreground mt-1 mb-6">payment@generalelectric.com</p>
             
             <div className="h-24 bg-gradient-to-t from-blue-50/50 dark:from-blue-900/20 to-transparent w-full flex items-end gap-2 px-2 pb-2 rounded-lg border border-border">
                <div className="w-full bg-blue-400 rounded-t-sm h-[40%]" />
                <div className="w-full bg-blue-300 rounded-t-sm h-[60%]" />
                <div className="w-full bg-blue-500 rounded-t-sm h-[80%]" />
                <div className="w-full bg-blue-400 rounded-t-sm h-[50%]" />
                <div className="w-full bg-blue-600 rounded-t-sm h-[100%]" />
             </div>
           </div>

           {/* Mockup Card 2 */}
           <div className="absolute right-0 sm:right-[5%] md:right-[15%] lg:right-[20%] top-24 md:top-12 bg-card/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-border p-4 md:p-6 w-[280px] sm:w-[320px] md:w-[350px] text-left transform rotate-2 z-10">
             <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-bold text-muted-foreground tracking-wider">TO</span>
                <span className="text-xs font-bold text-muted-foreground tracking-wider">Clients pays</span>
             </div>
             
             <div className="flex justify-between items-center mb-6">
                <div>
                  <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-xs mb-2">B</div>
                  <h3 className="text-xl font-bold text-foreground">Binford Ltd.</h3>
                </div>
                <div className="bg-muted p-2 rounded-lg border border-border">
                   <div className="text-sm font-medium text-foreground">€ Euro <span className="text-muted-foreground mx-2">&rarr;</span> Polygon</div>
                </div>
             </div>
             
             <div className="flex justify-between items-center">
                <p className="text-xs text-muted-foreground">67 boulevard Aristide Briand<br/>Le Bouscat, France</p>
                <div className="bg-muted p-2 rounded-lg border border-border">
                   <div className="text-sm font-medium text-foreground">$ USD <span className="text-muted-foreground mx-2">&rarr;</span> Tron</div>
                </div>
             </div>
           </div>
        </motion.div>
      </div>
      
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-30%] left-[-10%] w-[50%] h-[50%] bg-blue-500/20 dark:bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-[10%] right-[-10%] w-[40%] h-[40%] bg-orange-500/20 dark:bg-orange-600/10 rounded-full blur-[120px]" />
      </div>
    </section>
  );
}

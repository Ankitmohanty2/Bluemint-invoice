"use client";
import { motion } from "motion/react";
import { ArrowRight, Play, CheckCircle2, TrendingUp, Clock, CreditCard, Users, ChevronRight } from "lucide-react";
import Link from "next/link";

export function Solutions() {
  return (
    <section id="solutions" className="py-24 px-6 md:px-10 max-w-7xl mx-auto overflow-hidden">
      
      {/* Header section similar to screenshot */}
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold tracking-tight text-foreground max-w-3xl mx-auto mb-6 leading-[1.1]"
        >
          Built for every type of business
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10"
        >
          Whether you're flying solo or running a growing agency, Bluemint adapts to your workflow. Manage projects, monitor income, and send invoices all in one place.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/generate">
            <button className="bg-foreground text-background px-8 py-3.5 rounded-full text-sm font-semibold hover:opacity-90 transition-all flex items-center gap-2">
              Start for Free <ChevronRight className="w-4 h-4" />
            </button>
          </Link>
          <Link href="#features">
            <button className="bg-transparent text-foreground border border-border px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-muted transition-all flex items-center gap-2">
              View Features <Play className="w-4 h-4 fill-current" />
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Dashboard Mockup Grid (Replacing the image) */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mb-24 flex flex-col md:flex-row gap-4 justify-center items-stretch"
      >
        {/* Left tall card */}
        <div className="bg-muted/30 border border-border rounded-3xl p-6 flex-1 max-w-xs hidden lg:block">
          <div className="flex justify-between items-center mb-6">
            <span className="text-xs font-bold">Total Invoiced</span>
            <span className="text-[10px] text-muted-foreground">This month</span>
          </div>
          <div className="space-y-4">
            <div className="h-2 w-full bg-blue-500 rounded-full" />
            <div className="h-2 w-3/4 bg-purple-500 rounded-full" />
            <div className="h-2 w-1/2 bg-emerald-500 rounded-full" />
          </div>
          <div className="mt-8">
            <p className="text-2xl font-bold">$12,450.00</p>
            <p className="text-xs text-emerald-500 flex items-center gap-1 mt-1">
              <TrendingUp className="w-3 h-3" /> +15.2%
            </p>
          </div>
        </div>

        {/* Center Grid */}
        <div className="grid grid-cols-2 gap-4 flex-[2]">
          <div className="bg-muted/30 border border-border rounded-3xl p-5 flex flex-col justify-between">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 flex items-center justify-center">
                  <TrendingUp className="w-3 h-3" />
                </div>
                <span className="text-xs font-bold text-foreground">Revenue Collected</span>
              </div>
              <ArrowRight className="w-3 h-3 text-muted-foreground rotate-[-45deg]" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">$20,520.32</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-[10px] bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 px-1.5 py-0.5 rounded font-bold">+15.2%</span>
                <span className="text-[10px] text-muted-foreground">vs last month</span>
              </div>
            </div>
          </div>

          <div className="bg-muted/30 border border-border rounded-3xl p-5 flex flex-col justify-between">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center">
                  <Clock className="w-3 h-3" />
                </div>
                <span className="text-xs font-bold text-foreground">Invoices Sent</span>
              </div>
              <ArrowRight className="w-3 h-3 text-muted-foreground rotate-[-45deg]" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">128</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-[10px] bg-blue-100 dark:bg-blue-900/30 text-blue-600 px-1.5 py-0.5 rounded font-bold">+12</span>
                <span className="text-[10px] text-muted-foreground">vs last month</span>
              </div>
            </div>
          </div>

          <div className="bg-muted/30 border border-border rounded-3xl p-5 flex flex-col justify-between">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 flex items-center justify-center">
                  <CreditCard className="w-3 h-3" />
                </div>
                <span className="text-xs font-bold text-foreground">Pending Payment</span>
              </div>
              <ArrowRight className="w-3 h-3 text-muted-foreground rotate-[-45deg]" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">$6,842.00</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-[10px] bg-red-100 dark:bg-red-900/30 text-red-600 px-1.5 py-0.5 rounded font-bold">3 invoices</span>
                <span className="text-[10px] text-muted-foreground">awaiting payment</span>
              </div>
            </div>
          </div>

          <div className="bg-muted/30 border border-border rounded-3xl p-5 flex flex-col justify-between">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 flex items-center justify-center">
                  <Users className="w-3 h-3" />
                </div>
                <span className="text-xs font-bold text-foreground">Active Clients</span>
              </div>
              <ArrowRight className="w-3 h-3 text-muted-foreground rotate-[-45deg]" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">28</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-[10px] bg-purple-100 dark:bg-purple-900/30 text-purple-600 px-1.5 py-0.5 rounded font-bold">5 billed this week</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Chart Card */}
        <div className="bg-muted/30 border border-border rounded-3xl p-6 flex-[1.5] hidden md:flex flex-col">
          <div className="flex justify-between items-start mb-6">
            <div>
              <span className="text-xs font-bold text-foreground block mb-1">Invoicing Overview</span>
              <p className="text-2xl font-bold text-foreground">$20,520.32 <span className="text-[10px] bg-blue-100 dark:bg-blue-900/30 text-blue-600 px-1.5 py-0.5 rounded ml-2 align-middle">+15.2%</span></p>
            </div>
          </div>
          <div className="mt-auto relative h-24 w-full flex items-end justify-between gap-1">
            {/* Simple CSS Bar Chart */}
            {[40, 60, 45, 80, 65, 90, 75].map((height, i) => (
              <div key={i} className="w-full bg-blue-100 dark:bg-blue-900/20 rounded-t-sm relative group cursor-pointer" style={{ height: '100%' }}>
                <div 
                  className="absolute bottom-0 left-0 w-full bg-blue-500 rounded-t-sm transition-all duration-300 group-hover:bg-blue-400" 
                  style={{ height: `${height}%` }}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-between text-[10px] text-muted-foreground mt-3 px-1">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
            <span>Jul</span>
          </div>
        </div>
      </motion.div>

      {/* Partners Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="text-center mb-32"
      >
        <p className="text-sm font-medium text-muted-foreground mb-8">Check out our awesome partners</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale">
          <div className="text-xl font-black tracking-tighter">fundall</div>
          <div className="text-xl font-bold tracking-tight">gidimo</div>
          <div className="text-lg font-bold border-2 border-current px-2 py-0.5 rounded-lg flex items-center gap-1">
            <span className="w-4 h-4 rounded-full border-2 border-current border-r-transparent" /> CHECK DC
          </div>
          <div className="text-xl font-bold tracking-widest lowercase">mono</div>
          <div className="text-xl font-bold italic">smile</div>
        </div>
      </motion.div>

      {/* Split Content Section (For Freelancers) */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="flex flex-col md:flex-row gap-16 items-center mb-32"
      >
        <div className="md:w-1/2">
          <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 text-xs font-bold tracking-wider mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
            FOR FREELANCERS
          </div>
          <h3 className="text-4xl md:text-5xl font-bold text-foreground leading-[1.1] mb-6">
            Stay organized, efficient, and in control.
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Stop wasting time on administrative tasks. Create and send professional invoices in seconds, track payments, and get back to doing what you love.
          </p>
          <ul className="space-y-4">
            {["Instant PDF generation", "Multi-currency support", "No signup required"].map((item, i) => (
              <li key={i} className="flex items-center text-foreground font-medium">
                <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="md:w-1/2 w-full">
          <div className="bg-gradient-to-br from-blue-100 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/10 rounded-3xl p-8 border border-border shadow-lg relative overflow-hidden aspect-square md:aspect-auto md:h-[500px]">
             {/* Mockup elements floating */}
             <div className="absolute top-10 right-10 bg-card rounded-2xl p-4 shadow-xl border border-border w-64 transform rotate-6">
               <div className="flex items-center gap-3 mb-3">
                 <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">INV</div>
                 <div>
                   <p className="text-sm font-bold">Invoice #001</p>
                   <p className="text-xs text-muted-foreground">Sent successfully</p>
                 </div>
               </div>
               <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                 <div className="w-full h-full bg-blue-500 rounded-full" />
               </div>
             </div>
             
             <div className="absolute bottom-10 left-10 bg-card rounded-2xl p-4 shadow-xl border border-border w-56 transform -rotate-3">
               <p className="text-xs text-muted-foreground mb-1">Total Received</p>
               <p className="text-2xl font-bold">$4,200.00</p>
             </div>
          </div>
        </div>
      </motion.div>

      {/* Split Content Section (For Agencies) */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="flex flex-col md:flex-row-reverse gap-16 items-center"
      >
        <div className="md:w-1/2">
          <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-xs font-bold tracking-wider mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400" />
            FOR AGENCIES & BUSINESSES
          </div>
          <h3 className="text-4xl md:text-5xl font-bold text-foreground leading-[1.1] mb-6">
            Scale your operations with zero friction.
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Present a polished brand to your clients. Add your own logos, customize tax details, and handle large projects with clean, itemized invoices.
          </p>
          <ul className="space-y-4">
            {["Custom branding & logos", "Detailed itemization", "Tax & discount configurations"].map((item, i) => (
              <li key={i} className="flex items-center text-foreground font-medium">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="md:w-1/2 w-full">
          <div className="bg-gradient-to-br from-emerald-100 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/10 rounded-3xl p-8 border border-border shadow-lg relative overflow-hidden aspect-square md:aspect-auto md:h-[500px]">
             {/* Mockup elements floating */}
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-card rounded-2xl p-6 shadow-xl border border-border w-72">
               <div className="flex justify-between items-center mb-6 pb-4 border-b border-border">
                 <div className="w-8 h-8 bg-foreground rounded-md" />
                 <span className="text-xs font-bold bg-emerald-100 text-emerald-600 px-2 py-1 rounded">PAID</span>
               </div>
               <div className="space-y-3">
                 <div className="flex justify-between text-sm">
                   <span className="text-muted-foreground">Website Redesign</span>
                   <span className="font-medium">$8,500</span>
                 </div>
                 <div className="flex justify-between text-sm">
                   <span className="text-muted-foreground">SEO Optimization</span>
                   <span className="font-medium">$2,100</span>
                 </div>
                 <div className="flex justify-between text-sm pt-3 border-t border-border font-bold">
                   <span>Total</span>
                   <span>$10,600</span>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </motion.div>

    </section>
  );
}

"use client";
import { motion } from "motion/react";
import Link from "next/link";

export function Features() {
  return (
    <section id="features" className="py-24 px-6 md:px-10 max-w-7xl mx-auto bg-background">
      {/* Header section */}
      <div className="text-center mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold tracking-tight text-foreground max-w-2xl mx-auto mb-6 leading-tight"
        >
          Create stunning invoices without the hassle
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground text-lg max-w-2xl mx-auto"
        >
          A completely free tool for freelancers, agencies, and small businesses. Generate unlimited invoices instantly and manage your taxes easily.
        </motion.p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-stretch">
        {/* Left Column: Network Graph Mockup */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="lg:w-5/12 bg-card rounded-3xl p-8 shadow-sm border border-border relative min-h-[400px] flex items-center justify-center overflow-hidden"
        >
          {/* Central Logo */}
          <div className="w-20 h-20 bg-foreground rounded-3xl flex items-center justify-center shadow-xl z-10 relative text-background font-bold text-3xl">
            S
          </div>

          {/* Network Nodes */}
          <div className="absolute top-[20%] left-[20%] bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shadow-lg">F</div>
          <div className="absolute bottom-[20%] right-[30%] bg-green-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold shadow-lg">gb</div>
          <div className="absolute top-[30%] right-[15%] bg-card border border-border rounded-xl p-3 shadow-lg flex flex-col gap-2">
            <span className="text-xs font-medium text-foreground flex items-center gap-1"><div className="w-3 h-3 bg-blue-500 rounded-full" /> € Euro</span>
            <span className="text-xs font-medium text-foreground flex items-center gap-1"><div className="w-3 h-3 bg-green-500 rounded-full" /> $ USD</span>
            <span className="text-xs font-medium text-foreground flex items-center gap-1"><div className="w-3 h-3 bg-orange-500 rounded-full" /> £ Pound</span>
          </div>
          <div className="absolute bottom-[30%] left-[15%] bg-card border border-border rounded-xl p-3 shadow-lg text-xs font-medium text-foreground">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center text-[8px] text-blue-600">€</div>
              <span className="text-[10px] text-muted-foreground">Send USD</span>
            </div>
            $3,200.00
          </div>
          
          {/* Faint connecting lines (CSS radial gradients) */}
          <div className="absolute w-[300px] h-[300px] border border-border dark:border-white/5 rounded-full z-0" />
          <div className="absolute w-[450px] h-[450px] border border-border dark:border-white/5 rounded-full z-0" />
        </motion.div>

        {/* Right Column: Feature Cards Grid */}
        <div className="lg:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-3xl p-6 shadow-sm border border-border flex flex-col"
          >
            <h3 className="text-lg font-bold text-foreground mb-2">Fast & Simple</h3>
            <p className="text-sm text-muted-foreground mb-6">Create invoices on the go and get paid faster.</p>
            
            <div className="mt-auto bg-muted rounded-xl p-4 border border-border">
              <div className="flex justify-between items-center mb-3 border-b border-border pb-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs">G</div>
                  <div>
                    <p className="text-[10px] font-bold text-foreground">Giulio Vance</p>
                    <p className="text-[8px] text-muted-foreground">payment@studiovance.com</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-foreground">$5,000</span>
              </div>
              <div className="flex justify-between items-center pt-1">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs">O</div>
                  <div>
                    <p className="text-[10px] font-bold text-foreground">OrbitalLabs</p>
                    <p className="text-[8px] text-muted-foreground">payment@orbitallabs.com</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-foreground">4,275.81 <span className="text-[8px] text-muted-foreground font-normal">USD</span></span>
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-card rounded-3xl p-6 shadow-sm border border-border flex flex-col"
          >
             <h3 className="text-lg font-bold text-foreground mb-2">Beautifully Designed</h3>
             <p className="text-sm text-muted-foreground mb-6">Create stunning, professional invoices that reflect your brand's identity perfectly.</p>
             
             <div className="mt-auto bg-purple-50/50 dark:bg-purple-900/10 rounded-xl p-4 border border-purple-100 dark:border-purple-900/30 relative overflow-hidden h-32">
                {/* Mini Invoice Mockup */}
                <div className="absolute -right-4 -bottom-4 bg-card p-3 rounded-lg shadow-sm border border-border w-48">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[8px] font-bold text-muted-foreground uppercase">Invoice</span>
                    <span className="text-[8px] text-muted-foreground">#INV-001</span>
                  </div>
                  <div className="w-full h-px bg-border mb-2" />
                  <div className="flex justify-between items-end">
                    <div className="space-y-1">
                      <div className="w-12 h-1.5 bg-muted rounded" />
                      <div className="w-8 h-1.5 bg-muted rounded" />
                    </div>
                    <span className="text-xs font-bold text-foreground">$4,200</span>
                  </div>
                </div>
             </div>
          </motion.div>

          {/* Card 3 (Full Width text + Notification Mockup) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-2 bg-card rounded-3xl p-6 shadow-sm border border-border flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="md:w-1/2">
              <h3 className="text-lg font-bold text-foreground mb-2">Ready to invoice?</h3>
              <p className="text-sm text-muted-foreground">Start creating professional invoices right away. No sign-up required, completely free.</p>
              <Link href="/generate">
                <button className="mt-4 bg-foreground text-background px-4 py-2 rounded-full text-xs font-medium">Get started for free</button>
              </Link>
            </div>

            <div className="md:w-1/2 flex flex-col gap-3">
               {/* Notification Mockup 1 */}
               <div className="bg-muted rounded-xl p-3 border border-border flex items-center justify-between shadow-sm">
                 <div className="flex items-center gap-2">
                   <div className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-[10px] font-bold">P</div>
                   <div>
                     <p className="text-[10px] font-bold text-foreground">Payment Due</p>
                     <p className="text-[8px] text-muted-foreground">Invoice #001</p>
                   </div>
                 </div>
                 <span className="text-xs font-bold text-foreground">$5,000</span>
               </div>
               
               {/* Notification Mockup 2 */}
               <div className="bg-orange-50/50 dark:bg-orange-900/10 rounded-xl p-3 border border-orange-100 dark:border-orange-900/30 flex items-start gap-3 shadow-sm">
                 <div className="w-6 h-6 bg-orange-100 text-orange-600 rounded-full flex flex-shrink-0 items-center justify-center text-[10px] font-bold mt-0.5">E</div>
                 <div>
                   <p className="text-[10px] font-bold mb-0.5 text-foreground">Edelman Creative</p>
                   <p className="text-[8px] text-muted-foreground leading-tight">Thank you for the invoice! We have submitted it to our finance team for processing.</p>
                 </div>
                 <span className="text-[8px] text-muted-foreground whitespace-nowrap">10:42 AM</span>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

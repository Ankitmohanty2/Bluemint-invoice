"use client";
import { motion } from "motion/react";

const testimonials = [
  {
    quote: "Cross-border payments are now as easy as local transfers. A true game-changer.",
    name: "Dianne Russell",
    role: "CEO, TechCorp",
    initial: "D",
    color: "bg-blue-100 text-blue-600"
  },
  {
    quote: "As a freelancer, chasing clients for payments was exhausting. Sattie's reminders and smooth checkout mean I never have to nag.",
    name: "Marvin McKinney",
    role: "CFO, Greenworld",
    initial: "M",
    color: "bg-green-100 text-green-600"
  },
  {
    quote: "Same-day payouts changed the game for us. No more waiting, no more uncertainty.",
    name: "Savannah Nguyen",
    role: "CFO, Paybridge",
    initial: "S",
    color: "bg-purple-100 text-purple-600"
  },
  {
    quote: "Sattie made cross-border payments effortless. I invoice in my currency, my clients pay in theirs, and I get funds instantly.",
    name: "Robert Fox",
    role: "Founder, NextTech",
    initial: "R",
    color: "bg-orange-100 text-orange-600"
  },
  {
    quote: "As a freelancer, chasing clients for payments was exhausting. Sattie's reminders and smooth checkout mean I never have to nag.",
    name: "Jenny Wilson",
    role: "UI Designer",
    initial: "J",
    color: "bg-pink-100 text-pink-600"
  },
  {
    quote: "We save hours every week on invoice management. The dashboard is clean, fast, and our team loves it.",
    name: "Devon Lane",
    role: "Manager, NovaTech",
    initial: "D",
    color: "bg-indigo-100 text-indigo-600"
  }
];

export function SocialProof() {
  return (
    <section className="py-24 px-6 md:px-10 max-w-6xl mx-auto bg-background">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold tracking-tight text-foreground max-w-2xl mx-auto mb-4"
        >
          Customer Success in<br/>Their Own Words
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground"
        >
          Discover how businesses of all sizes use our platform to get paid faster and grow smarter.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card p-8 rounded-3xl shadow-sm border border-border flex flex-col justify-between"
          >
            <p className="text-foreground text-sm leading-relaxed mb-8 font-medium">
              "{testimonial.quote}"
            </p>
            
            <div className="flex items-center gap-3 mt-auto">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${testimonial.color}`}>
                {testimonial.initial}
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

"use client";
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';

export function CtaSection() {
  return (
    <section className="py-28 px-6 md:px-10 border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2
          className="mb-5"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.03em', fontWeight: 600, lineHeight: 1.1 }}
        >
          Ready to send your<br />first invoice?
        </h2>
        <p className="text-muted-foreground mb-10" style={{ fontSize: '1.0625rem' }}>
          No account needed. Free forever. Works for any currency.
        </p>

        <div className="flex items-center justify-center gap-3 flex-wrap">
          <Link href="/generate">
            <button className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-xl transition-colors">
              Generate Invoice <ArrowRight size={15} strokeWidth={2.5} />
            </button>
          </Link>
          <button className="px-6 py-3 rounded-xl border border-border hover:bg-muted transition-colors text-sm text-muted-foreground hover:text-foreground">
            Learn more
          </button>
        </div>
      </motion.div>
    </section>
  );
}

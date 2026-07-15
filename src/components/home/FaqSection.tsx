"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { Section, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";
import { faqs } from "@/data/faq";

export function FaqSection() {
  const { t, locale } = useLanguage();
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);

  return (
    <Section className="bg-ivory py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <SectionHeading
          eyebrow={t.faq.eyebrow}
          title={t.faq.title}
          align="center"
          className="mx-auto"
        />

        <Stagger className="mt-12 space-y-3" fast>
          {faqs.map((item) => {
            const open = openId === item.id;
            return (
              <StaggerItem key={item.id}>
                <motion.div
                  className="overflow-hidden rounded-[1.25rem] border border-ink/6 bg-paper transition-shadow duration-500 hover:shadow-[0_14px_40px_rgba(23,19,18,0.07)]"
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 26 }}
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    aria-expanded={open}
                    onClick={() => setOpenId(open ? null : item.id)}
                  >
                    <span className="font-medium text-ink">
                      {item.question[locale]}
                    </span>
                    <motion.span
                      animate={{ rotate: open ? 45 : 0 }}
                      transition={{ type: "spring", stiffness: 320, damping: 20 }}
                      className="inline-flex shrink-0 text-champagne"
                    >
                      <Plus size={18} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.4,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        <p className="px-5 pb-5 text-sm leading-relaxed text-ink-soft">
                          {item.answer[locale]}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </motion.div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </Section>
  );
}

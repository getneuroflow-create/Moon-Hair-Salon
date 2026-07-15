"use client";

import { MapPin, Phone } from "lucide-react";
import { InquiryForm } from "@/components/home/InquiryForm";
import { IconButton, SpotlightCard } from "@/components/ui/Micro";
import { Reveal, Section } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FacebookIcon, InstagramIcon } from "@/components/ui/SocialIcons";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/data/site";

export function ContactPageContent() {
  const { t, locale } = useLanguage();
  const hours = siteConfig.hours[locale];

  return (
    <Section className="bg-deep pb-24 pt-28 text-paper md:pb-32 md:pt-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionHeading
            title={t.contactPage.title}
            body={t.contactPage.subtitle}
            align="center"
            tone="dark"
            className="mx-auto"
          />
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <Reveal direction="left">
            <SpotlightCard className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 md:p-8">
              <div className="space-y-8">
              <div>
                <h3 className="text-xs uppercase tracking-[0.28em] text-champagne-light">
                  {t.footer.visit}
                </h3>
                <a
                  href={siteConfig.maps.listing}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex gap-3 text-paper/80 transition-colors hover:text-champagne"
                >
                  <MapPin
                    className="mt-0.5 shrink-0 text-champagne transition-transform duration-400 group-hover/spot:scale-110"
                    size={18}
                  />
                  <span>{siteConfig.address.full}</span>
                </a>
                <a
                  href={siteConfig.phoneHref}
                  className="mt-4 flex gap-3 text-paper/80 transition-colors hover:text-champagne"
                >
                  <Phone
                    className="mt-0.5 shrink-0 text-champagne transition-transform duration-400 group-hover/spot:scale-110"
                    size={18}
                  />
                  <span>{siteConfig.phone}</span>
                </a>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-[0.28em] text-champagne-light">
                  {t.contactPage.hours}
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-paper/70">
                  {hours.map((row) => (
                    <li
                      key={row.day}
                      className="flex justify-between gap-4 border-b border-white/8 py-2"
                    >
                      <span>{row.day}</span>
                      <span
                        className={
                          row.time === "Closed" || row.time === "Cerrado"
                            ? "text-paper/40"
                            : "text-champagne-light"
                        }
                      >
                        {row.time}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm leading-relaxed text-paper/55">
                  {t.contactPage.hoursNote}
                </p>
              </div>

              <div>
                <p className="text-sm leading-relaxed text-paper/55">
                  {t.contactPage.parking}
                </p>
              </div>

              <div className="flex gap-3">
                <IconButton
                  href={siteConfig.social.instagram}
                  label="Instagram"
                  external
                  className="border-white/15 p-3"
                >
                  <InstagramIcon className="h-[18px] w-[18px]" />
                </IconButton>
                <IconButton
                  href={siteConfig.social.facebook}
                  label="Facebook"
                  external
                  className="border-white/15 p-3"
                >
                  <FacebookIcon className="h-[18px] w-[18px]" />
                </IconButton>
              </div>
              </div>
            </SpotlightCard>
          </Reveal>

          <InquiryForm compact />
        </div>

        <Reveal className="mt-14">
          <h3 className="mb-5 text-center text-xs uppercase tracking-[0.28em] text-champagne-light">
            {t.contactPage.mapTitle}
          </h3>
          <div className="overflow-hidden rounded-[1.75rem] border border-white/10">
            <iframe
              title="Moon Hair Studio location map"
              src={siteConfig.maps.embed}
              width="100%"
              height="420"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

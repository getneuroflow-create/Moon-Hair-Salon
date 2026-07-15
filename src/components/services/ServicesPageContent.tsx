"use client";

import { BaseImage as Image } from "@/components/ui/BaseImage";
import { Button } from "@/components/ui/Button";
import { SpotlightCard } from "@/components/ui/Micro";
import { FadeImage, Reveal, Section, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";

export function ServicesPageContent() {
  const { t, locale } = useLanguage();

  return (
    <Section className="overflow-x-hidden pb-20 pt-24 sm:pb-24 sm:pt-28 md:pb-32 md:pt-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
        <Reveal>
          <SectionHeading
            title={t.servicesPage.title}
            body={t.servicesPage.subtitle}
            align="center"
            className="mx-auto"
          />
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-ink-soft">
            {t.servicesPage.pricingNote}
          </p>
        </Reveal>

        <Stagger className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service) => (
            <StaggerItem key={service.id}>
              <SpotlightCard className="group overflow-hidden rounded-[1.5rem] border border-ink/6 bg-paper shadow-[0_8px_30px_rgba(23,19,18,0.04)] sm:rounded-[1.75rem]">
                <FadeImage>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.imageAlt[locale]}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 45vw, 280px"
                      quality={90}
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                      loading="lazy"
                    />
                  </div>
                </FadeImage>
                <div className="p-4 sm:p-5">
                  <h3 className="font-display text-xl text-ink transition-colors duration-400 group-hover:text-champagne">
                    {service.name[locale]}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {service.description[locale]}
                  </p>
                  <p className="mt-3 text-[10px] uppercase tracking-[0.2em] text-champagne">
                    {service.priceLabel[locale]} · {service.duration[locale]}
                  </p>
                </div>
              </SpotlightCard>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-12 space-y-3 text-center sm:mt-14">
          <Button href={siteConfig.phoneHref} variant="wine" className="w-full sm:w-auto">
            {t.common.callNow}
          </Button>
          <div>
            <Button href="/#booking" variant="secondary" className="w-full sm:w-auto">
              {t.booking.submit}
            </Button>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

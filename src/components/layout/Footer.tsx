"use client";

import { MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { IconButton } from "@/components/ui/Micro";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { FacebookIcon, InstagramIcon } from "@/components/ui/SocialIcons";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/data/site";

export function Footer() {
  const { t } = useLanguage();

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/services", label: t.nav.services },
    { href: "/team", label: t.nav.team },
    { href: "/reviews", label: t.nav.reviews },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <footer className="relative overflow-hidden bg-deep text-paper">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-wine/25 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-mocha/40 blur-3xl" />
      </div>

      <Stagger className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-2 md:px-8 lg:grid-cols-3 lg:gap-16">
        <StaggerItem>
          <Reveal className="overflow-hidden rounded-[1.75rem] border border-paper/10">
            <iframe
              title="Moon Hair Studio map"
              src={siteConfig.maps.embed}
              width="100%"
              height="240"
              style={{ border: 0, filter: "grayscale(0.35) contrast(1.05)" }}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </Reveal>
        </StaggerItem>

        <StaggerItem>
          <h3 className="text-xs font-medium uppercase tracking-[0.28em] text-champagne-light">
            {t.footer.visit}
          </h3>
          <ul className="mt-5 space-y-4 text-sm text-paper/75">
            <li className="flex gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-wine" />
              <a
                href={siteConfig.maps.listing}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-champagne-light"
              >
                {siteConfig.address.full}
              </a>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="mt-0.5 shrink-0 text-wine" />
              <a
                href={siteConfig.phoneHref}
                className="transition-colors hover:text-champagne-light"
              >
                {siteConfig.phone}
              </a>
            </li>
          </ul>

          <h3 className="mt-10 text-xs font-medium uppercase tracking-[0.28em] text-champagne-light">
            {t.footer.quickLinks}
          </h3>
          <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-paper/75">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="smooth-underline transition-colors hover:text-champagne-light"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex gap-3">
            <IconButton
              href={siteConfig.social.instagram}
              label="Instagram"
              external
            >
              <InstagramIcon className="h-[18px] w-[18px]" />
            </IconButton>
            <IconButton
              href={siteConfig.social.facebook}
              label="Facebook"
              external
            >
              <FacebookIcon className="h-[18px] w-[18px]" />
            </IconButton>
          </div>
        </StaggerItem>

        <StaggerItem>
          <Logo tone="light" className="h-12 md:h-14" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-paper/65">
            {t.footer.tagline}
          </p>
          <div className="mt-8">
            <Button href={siteConfig.phoneHref} variant="light" external>
              {t.hero.ctaPrimary}
            </Button>
          </div>
        </StaggerItem>
      </Stagger>

      <Reveal>
        <div className="relative flex flex-col items-center justify-between gap-3 border-t border-paper/10 px-5 py-6 text-center text-xs text-paper/45 md:flex-row md:px-8 md:text-left">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. {t.footer.rights}
          </p>
          <p className="tracking-wide">Metuchen, NJ</p>
        </div>
      </Reveal>
    </footer>
  );
}

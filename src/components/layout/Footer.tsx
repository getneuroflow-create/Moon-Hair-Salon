"use client";

import { MapPin, Phone } from "lucide-react";
import Link from "next/link";
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
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-champagne/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blush/10 blur-3xl" />
      </div>

      <Stagger className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-2 md:px-8 lg:grid-cols-4">
        <StaggerItem className="lg:col-span-1">
          <Logo tone="light" className="h-12 md:h-12" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-paper/65">
            {t.footer.tagline}
          </p>
          <div className="mt-6 flex gap-3">
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
          <h3 className="text-xs uppercase tracking-[0.28em] text-champagne-light">
            {t.footer.quickLinks}
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-paper/75">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="smooth-underline transition-colors hover:text-champagne"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </StaggerItem>

        <StaggerItem>
          <h3 className="text-xs uppercase tracking-[0.28em] text-champagne-light">
            {t.footer.visit}
          </h3>
          <ul className="mt-5 space-y-4 text-sm text-paper/75">
            <li className="flex gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-champagne" />
              <a
                href={siteConfig.maps.listing}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-champagne"
              >
                {siteConfig.address.full}
              </a>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="mt-0.5 shrink-0 text-champagne" />
              <a
                href={siteConfig.phoneHref}
                className="transition-colors hover:text-champagne"
              >
                {siteConfig.phone}
              </a>
            </li>
          </ul>
        </StaggerItem>

        <StaggerItem>
          <h3 className="text-xs uppercase tracking-[0.28em] text-champagne-light">
            {t.contactPage.mapTitle}
          </h3>
          <Reveal className="mt-5 overflow-hidden rounded-2xl border border-paper/10">
            <iframe
              title="Moon Hair Studio map"
              src={siteConfig.maps.embed}
              width="100%"
              height="180"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </Reveal>
        </StaggerItem>
      </Stagger>

      <Reveal>
        <div className="relative border-t border-paper/10 px-5 py-6 text-center text-xs text-paper/45 md:px-8">
          © {new Date().getFullYear()} {siteConfig.name}. {t.footer.rights}
        </div>
      </Reveal>
    </footer>
  );
}

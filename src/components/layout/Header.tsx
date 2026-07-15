"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { IconButton, Magnetic } from "@/components/ui/Micro";
import { FacebookIcon, InstagramIcon } from "@/components/ui/SocialIcons";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export function Header() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/services", label: t.nav.services },
    { href: "/team", label: t.nav.team },
    { href: "/reviews", label: t.nav.reviews },
    { href: "/contact", label: t.nav.contact },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isHome = pathname === "/";
  const solid = scrolled || !isHome || open;

  const mobileMenu =
    mounted &&
    createPortal(
      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation"
            className="fixed inset-0 z-[60] flex flex-col bg-[#0e0c0a] text-[#faf7f2] lg:hidden"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between px-5 py-4">
              <Link
                href="/"
                className="flex items-center"
                aria-label={siteConfig.name}
                onClick={() => setOpen(false)}
              >
                <Logo tone="light" className="h-10 md:h-10" />
              </Link>
              <IconButton label="Close menu" onClick={() => setOpen(false)}>
                <X size={20} />
              </IconButton>
            </div>

            <nav
              className="flex flex-1 flex-col justify-center gap-1 px-6"
              aria-label="Mobile"
            >
              {links.map((link, i) => {
                const active = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={reduce ? false : { opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.04 * i, duration: 0.35 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "block border-b border-white/10 py-4 font-display text-3xl transition-colors",
                        active ? "text-[#d9c7a6]" : "text-[#faf7f2] hover:text-[#d9c7a6]",
                      )}
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <div className="space-y-5 px-6 pb-10">
              <LanguageSwitcher className="text-[#faf7f2]" />
              <div className="flex gap-3">
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
              <Button
                href={siteConfig.phoneHref}
                variant="light"
                className="w-full"
              >
                <Phone size={16} />
                {t.nav.book}
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>,
      document.body,
    );

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          solid
            ? "bg-paper/90 text-ink shadow-[0_8px_30px_rgba(26,22,18,0.06)] backdrop-blur-md"
            : "bg-transparent text-paper",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-8">
          <Link
            href="/"
            className="relative z-10 flex items-center gap-3"
            aria-label={siteConfig.name}
          >
            <Logo tone={solid ? "dark" : "light"} priority />
          </Link>

          <nav
            className="hidden items-center gap-6 lg:flex"
            aria-label="Primary"
          >
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Magnetic key={link.href} strength={0.22}>
                  <Link
                    href={link.href}
                    className={cn(
                      "group relative px-1 text-sm tracking-wide",
                      active ? "text-champagne" : "hover:text-champagne",
                    )}
                  >
                    <motion.span
                      className="inline-block"
                      whileHover={reduce ? undefined : { y: -1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 22 }}
                    >
                      {link.label}
                    </motion.span>
                    <span
                      className={cn(
                        "absolute -bottom-1 left-0 h-px origin-left bg-champagne transition-transform duration-400",
                        active
                          ? "w-full scale-x-100"
                          : "w-full scale-x-0 group-hover:scale-x-100",
                      )}
                    />
                    {active ? (
                      <motion.span
                        layoutId={reduce ? undefined : "nav-dot"}
                        className="absolute -bottom-2.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-champagne"
                      />
                    ) : null}
                  </Link>
                </Magnetic>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
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
            <LanguageSwitcher className={solid ? "text-ink" : "text-paper"} />
            <Button
              href={siteConfig.phoneHref}
              variant={solid ? "primary" : "light"}
              className="!py-2.5"
            >
              <Phone size={15} />
              {t.nav.book}
            </Button>
          </div>

          <div className="relative z-10 lg:hidden">
            <IconButton
              label={open ? "Close menu" : "Open menu"}
              expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={open ? "close" : "open"}
                  initial={reduce ? false : { opacity: 0, rotate: -90, scale: 0.7 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={reduce ? undefined : { opacity: 0, rotate: 90, scale: 0.7 }}
                  transition={{ duration: 0.2 }}
                  className="inline-flex"
                >
                  {open ? <X size={20} /> : <Menu size={20} />}
                </motion.span>
              </AnimatePresence>
            </IconButton>
          </div>
        </div>
      </header>

      {mobileMenu}
    </>
  );
}

import { useEffect, useRef, useState } from 'react';
import { getLenis } from '../hooks/useLenis';
import { navigationConfig } from '../config';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [isLightSection, setIsLightSection] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);

      const navHeight = navRef.current?.offsetHeight ?? 0;
      const probeY = navHeight > 0 ? navHeight * 0.6 : 60;
      const lightSectionIds = ['anatomy', 'tiers', 'impact', 'footer'];
      const isInLightSection = lightSectionIds.some((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= probeY && rect.bottom >= probeY;
      });

      setIsLightSection(isInLightSection);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const baseTextColor = isLightSection ? '#180c04' : '#fcfaee';
  const hoverTextColor = isLightSection ? '#696969' : '#938977';

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(targetId);
    } else {
      const el = document.querySelector(targetId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!navigationConfig.brandName && navigationConfig.links.length === 0) {
    return null;
  }

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full z-[100]"
      style={{
        paddingTop: scrolled ? '16px' : '24px',
        transition: 'padding 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <div
        className="liquid-glass w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] max-w-[1200px] mx-auto px-4 md:px-10 py-4 md:py-4 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0"
        style={{ borderRadius: '2px' }}
      >
        {navigationConfig.brandName ? (
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: '20px',
              fontWeight: 500,
              color: baseTextColor,
              letterSpacing: '2px',
              textDecoration: 'none',
              textTransform: 'uppercase',
              transition: 'color 0.6s ease',
              textAlign: 'center',
            }}
          >
            {navigationConfig.brandName}
          </a>
        ) : (
          <div />
        )}

        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 md:gap-9 items-center">
          {navigationConfig.links.map((item) => (
            <a
              key={`${item.label}-${item.target}`}
              href={item.target}
              onClick={(e) => handleNavClick(e, item.target)}
              className="nav-link"
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '11px',
                fontWeight: 600,
                color: baseTextColor,
                letterSpacing: '1.3px',
                textDecoration: 'none',
                textTransform: 'uppercase',
                transition: 'color 0.6s ease',
                opacity: 0.85,
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLAnchorElement).style.color = hoverTextColor;
                (e.target as HTMLAnchorElement).style.opacity = '1';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLAnchorElement).style.color = baseTextColor;
                (e.target as HTMLAnchorElement).style.opacity = '0.85';
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

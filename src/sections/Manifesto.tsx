import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import { manifestoConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

export default function Manifesto() {
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const splitRef = useRef<SplitType | null>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hasManifestoContent = manifestoConfig.sectionLabel || (manifestoConfig.points && manifestoConfig.points.length > 0);

  useEffect(() => {
    if (!hasManifestoContent) return;

    const listEl = listRef.current;
    const containerEl = containerRef.current;
    if (!listEl || !containerEl) return;

    function initAnimation() {
      // Clean up previous
      if (tlRef.current) {
        tlRef.current.kill();
        tlRef.current = null;
      }
      if (splitRef.current) {
        splitRef.current.revert();
        splitRef.current = null;
      }
      ScrollTrigger.getAll().forEach((st) => {
        if (st.vars.trigger === containerEl) st.kill();
      });

      // Split text into words
      splitRef.current = new SplitType(listEl as HTMLElement, { types: 'words' });
      const words = (listEl as HTMLElement).querySelectorAll('.word');

      if (words.length === 0) return;

      // GSAP ScrollTrigger pipeline
      tlRef.current = gsap.timeline({
        scrollTrigger: {
          trigger: containerEl,
          start: 'top 82%',
          end: 'center 60%',
          scrub: true,
        },
      });

      tlRef.current.fromTo(
        words,
        {
          opacity: 0,
          filter: 'blur(12px) brightness(30%)',
          willChange: 'filter, opacity',
        },
        {
          opacity: 1,
          filter: 'blur(0px) brightness(100%)',
          stagger: 0.04,
          ease: 'sine.out',
        }
      );
    }

    // Wait for fonts before splitting
    document.fonts.ready.then(() => {
      initAnimation();
    });

    // ResizeObserver with 150ms debounce
    const ro = new ResizeObserver(() => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(() => {
        initAnimation();
      }, 150);
    });
    ro.observe(containerEl);

    return () => {
      ro.disconnect();
      if (debounceRef.current) clearTimeout(debounceRef.current);
      if (tlRef.current) tlRef.current.kill();
      if (splitRef.current) splitRef.current.revert();
    };
  }, [hasManifestoContent]);

  if (!hasManifestoContent) {
    return null;
  }

  return (
    <section
      id="manifesto"
      style={{
        backgroundColor: '#180c04',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div
        ref={containerRef}
        className="manifesto-container"
        style={{
          maxWidth: '80vw',
          margin: '0 auto',
          padding: '128px 0',
        }}
      >
        {manifestoConfig.sectionLabel && (
          <p
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '11px',
              fontWeight: 600,
              color: '#938977',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              marginBottom: '48px',
              textAlign: 'center',
            }}
          >
            {manifestoConfig.sectionLabel}
          </p>
        )}

        {manifestoConfig.points && manifestoConfig.points.length > 0 && (
          <ul
            ref={listRef}
            className="manifesto-list"
            style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)',
              fontWeight: 400,
              lineHeight: 1.3,
              color: '#fcfaee',
              textAlign: 'left',
              margin: '0 auto',
              maxWidth: '900px',
              paddingLeft: '40px',
            }}
          >
            {manifestoConfig.points.map((point, idx) => (
              <li
                key={idx}
                style={{
                  marginBottom: '24px',
                  paddingLeft: '12px',
                  position: 'relative',
                }}
              >
                {/* Custom bullet point */}
                <span
                  style={{
                    position: 'absolute',
                    left: '-32px',
                    top: '0.45em',
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#938977',
                    display: 'inline-block',
                  }}
                />
                {point}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

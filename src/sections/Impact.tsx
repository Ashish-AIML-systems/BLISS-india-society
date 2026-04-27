import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { impactConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

export default function Impact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const statRefs = useRef<(HTMLDivElement | null)[]>([]);
  const numberRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const hasContent = impactConfig.stats.length > 0;

  useEffect(() => {
    if (!hasContent) return;

    const ctx = gsap.context(() => {
      // Animate stat cards entrance
      statRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
            delay: i * 0.1,
          }
        );
      });

      // Animate numbers counting up
      numberRefs.current.forEach((el, i) => {
        if (!el) return;
        const stat = impactConfig.stats[i];
        const targetStr = stat.number.replace(/,/g, '');
        const targetNum = parseFloat(targetStr);

        if (isNaN(targetNum)) return;

        const counter = { val: 0 };
        gsap.to(counter, {
          val: targetNum,
          duration: 2.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          onUpdate: () => {
            if (stat.number.includes(',')) {
              el!.textContent = Math.floor(counter.val).toLocaleString('en-IN');
            } else {
              el!.textContent = Math.floor(counter.val).toString();
            }
          },
          onComplete: () => {
            el!.textContent = stat.number;
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [hasContent]);

  if (!hasContent) return null;

  return (
    <section
      id="impact"
      ref={sectionRef}
      style={{
        backgroundColor: '#180c04',
        position: 'relative',
        zIndex: 2,
        padding: '100px 0 120px',
      }}
    >
      {/* Section Header */}
      <div
        style={{
          textAlign: 'center',
          padding: '0 24px 80px',
        }}
      >
        {impactConfig.sectionLabel && (
          <p
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '11px',
              fontWeight: 600,
              color: '#938977',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              marginBottom: '20px',
            }}
          >
            {impactConfig.sectionLabel}
          </p>
        )}
        {impactConfig.title && (
          <h2
            style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: 500,
              lineHeight: 1.2,
              color: '#fcfaee',
              maxWidth: '700px',
              margin: '0 auto',
            }}
          >
            {impactConfig.title}
          </h2>
        )}
      </div>

      {/* Stats Grid */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '32px',
        }}
      >
        {impactConfig.stats.map((stat, i) => (
          <div
            key={stat.label}
            ref={(el) => { statRefs.current[i] = el; }}
            style={{
              textAlign: 'center',
              padding: '48px 32px',
              border: '1px solid rgba(252, 250, 238, 0.08)',
              borderRadius: '2px',
              backgroundColor: 'rgba(252, 250, 238, 0.02)',
              transition: 'border-color 0.6s ease, background-color 0.6s ease',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = 'rgba(147, 137, 119, 0.3)';
              el.style.backgroundColor = 'rgba(252, 250, 238, 0.04)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = 'rgba(252, 250, 238, 0.08)';
              el.style.backgroundColor = 'rgba(252, 250, 238, 0.02)';
            }}
          >
            <div
              style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontSize: 'clamp(48px, 6vw, 72px)',
                fontWeight: 400,
                color: '#fcfaee',
                lineHeight: 1.1,
                marginBottom: '12px',
              }}
            >
              <span ref={(el) => { numberRefs.current[i] = el; }}>
                {stat.number}
              </span>
              {stat.suffix && (
                <span
                  style={{
                    fontFamily: '"Cormorant Garamond", Georgia, serif',
                    fontSize: 'clamp(36px, 4vw, 56px)',
                    fontWeight: 400,
                    color: '#938977',
                  }}
                >
                  {stat.suffix}
                </span>
              )}
            </div>
            <p
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '12px',
                fontWeight: 500,
                color: '#938977',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                lineHeight: 1.6,
              }}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

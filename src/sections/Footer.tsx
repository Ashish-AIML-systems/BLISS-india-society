import { footerConfig } from '../config';

export default function Footer() {
  const hasFooterContent =
    footerConfig.ageGateText ||
    footerConfig.brandName ||
    footerConfig.brandTaglineLines.length > 0 ||
    footerConfig.copyright;

  if (!hasFooterContent) {
    return null;
  }

  return (
    <footer
      id="footer"
      style={{
        backgroundColor: '#f0ecd7',
        position: 'relative',
        zIndex: 2,
        borderTop: '1px solid rgba(24, 12, 4, 0.1)',
      }}
    >
      {/* Top Statement */}
      <div
        style={{
          textAlign: 'center',
          padding: '80px 24px 60px',
        }}
      >
        {footerConfig.ageGateText && (
          <p
            style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: 'clamp(24px, 3vw, 36px)',
              fontWeight: 400,
              fontStyle: 'italic',
              color: '#180c04',
              lineHeight: 1.3,
              maxWidth: '700px',
              margin: '0 auto',
              textWrap: 'balance',
            }}
          >
            {footerConfig.ageGateText}
          </p>
        )}
      </div>



      {/* Minimal Brand & Copyright */}
      <div
        style={{
          borderTop: '1px solid rgba(24, 12, 4, 0.08)',
          padding: '32px 24px',
          textAlign: 'center',
        }}
      >
        {footerConfig.brandName && (
          <p
            style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: '16px',
              fontWeight: 500,
              color: '#180c04',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              marginBottom: '8px',
            }}
          >
            {footerConfig.brandName}
          </p>
        )}
        {footerConfig.brandTaglineLines.length > 0 && (
          <p
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '11px',
              fontWeight: 400,
              lineHeight: 1.6,
              color: '#696969',
              marginBottom: '16px',
            }}
          >
            {footerConfig.brandTaglineLines.join(' · ')}
          </p>
        )}
        {footerConfig.copyright && (
          <p
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '11px',
              fontWeight: 400,
              color: '#938977',
              letterSpacing: '0.5px',
            }}
          >
            {footerConfig.copyright}
          </p>
        )}
      </div>
    </footer>
  );
}

import { donateConfig } from '../config';

export default function Donate() {
  if (!donateConfig.bankDetails.accountNumber) {
    return null;
  }

  return (
    <section
      id="donate"
      style={{
        backgroundColor: '#fcfaee',
        position: 'relative',
        zIndex: 2,
        padding: '80px 0 100px',
        borderTop: '1px solid rgba(24, 12, 4, 0.1)',
      }}
    >
      <div
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '0 24px',
          textAlign: 'center',
        }}
      >
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
          {donateConfig.sectionLabel}
        </p>

        {donateConfig.taxExemptionNotice && (
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(24, 12, 4, 0.05)',
              border: '1px solid rgba(24, 12, 4, 0.1)',
              borderRadius: '20px',
              padding: '8px 20px',
              marginBottom: '48px',
            }}
          >
            <span
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '13px',
                fontWeight: 600,
                color: '#180c04',
                letterSpacing: '0.5px',
              }}
            >
              {donateConfig.taxExemptionNotice}
            </span>
          </div>
        )}

        <div
          style={{
            backgroundColor: '#ffffff',
            border: '1px solid rgba(24, 12, 4, 0.08)',
            borderRadius: '4px',
            padding: '48px 40px',
            boxShadow: '0 10px 30px -10px rgba(0,0,0,0.05)',
          }}
        >
          <p
            style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: '28px',
              fontWeight: 500,
              color: '#180c04',
              marginBottom: '32px',
              letterSpacing: '1px',
            }}
          >
            {donateConfig.title}
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '24px',
              textAlign: 'left',
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '14px',
              color: '#696969',
              lineHeight: 1.6,
            }}
          >
            <div>
              <span style={{ color: '#938977', fontWeight: 600, fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase' }}>
                Account Name
              </span>
              <p style={{ color: '#180c04', fontWeight: 500, marginTop: '8px', fontSize: '15px' }}>
                {donateConfig.bankDetails.accountName}
              </p>
            </div>
            <div>
              <span style={{ color: '#938977', fontWeight: 600, fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase' }}>
                Account Number
              </span>
              <p style={{ color: '#180c04', fontWeight: 600, marginTop: '8px', fontSize: '16px', fontFamily: 'monospace', letterSpacing: '1px' }}>
                {donateConfig.bankDetails.accountNumber}
              </p>
            </div>
            <div>
              <span style={{ color: '#938977', fontWeight: 600, fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase' }}>
                Bank &amp; Branch
              </span>
              <p style={{ color: '#180c04', fontWeight: 500, marginTop: '8px', fontSize: '15px' }}>
                {donateConfig.bankDetails.bankName}, {donateConfig.bankDetails.branch}
              </p>
            </div>
            <div>
              <span style={{ color: '#938977', fontWeight: 600, fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase' }}>
                IFSC Code
              </span>
              <p style={{ color: '#180c04', fontWeight: 600, marginTop: '8px', fontSize: '16px', fontFamily: 'monospace', letterSpacing: '1px' }}>
                {donateConfig.bankDetails.ifscCode}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

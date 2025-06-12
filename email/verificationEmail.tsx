import {
    Html,
    Head,
    Preview,
    Font,
    Section,
    Row,
    Text
  } from '@react-email/components';
  
  interface VerifyEmailProps {
    username: string;
    otp: string;
  }
  
  const VerifyEmail = ({ username, otp }: VerifyEmailProps) => {
    return (
      <Html>
        <Head>
          <Font
            fontFamily="Inter"
            fallbackFontFamily="Verdana"
            webFont={{
              url: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap',
              format: 'woff2',
            }}
          />
        </Head>
        <Preview>Your verification code is here</Preview>
        <Section style={main}>
          <Row>
            <Text style={heading}>Email Verification</Text>
          </Row>
          <Row>
            <Text style={paragraph}>Hi <strong>{username}</strong>,</Text>
          </Row>
          <Row>
            <Text style={paragraph}>
              Please use the code below to verify your email address:
            </Text>
          </Row>
          <Row>
            <Text style={code}>{otp}</Text>
          </Row>
          <Row>
            <Text style={footer}>
              If you didn’t request this, you can safely ignore this email.
            </Text>
          </Row>
          <Row>
            <Text style={footer}>
              &copy; {new Date().getFullYear()} Your Company
            </Text>
          </Row>
        </Section>
      </Html>
    );
  };
  
  export default VerifyEmail;
  
  // Styles
  const main = {
    backgroundColor: '#ffffff',
    padding: '40px',
    fontFamily: "'Inter', sans-serif",
  };
  
  const heading = {
    fontSize: '24px',
    fontWeight: '600',
    color: '#333',
    marginBottom: '20px',
  };
  
  const paragraph = {
    fontSize: '16px',
    color: '#555',
    margin: '10px 0',
  };
  
  const code = {
    backgroundColor: '#f4f4f4',
    padding: '12px 24px',
    display: 'inline-block',
    fontSize: '22px',
    fontWeight: '600',
    letterSpacing: '2px',
    borderRadius: '6px',
    color: '#222',
    marginTop: '20px',
  };
  
  const footer = {
    fontSize: '12px',
    color: '#999',
    marginTop: '40px',
  };
  
function Resume() {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h2>My Resume</h2>

      <iframe
        src="/Resume.pdf"
        width="80%"
        height="600px"
        title="Resume PDF"
        style={{ border: '1px solid #ccc', borderRadius: '8px' }}
      >
       
        <p>
          Your browser does not support iframes. You can{' '}
          <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
            open the PDF here
          </a>.
        </p>
      </iframe>

      <p style={{ marginTop: '1rem' }}>
        Or download/open directly:{' '}
        <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
          Resume PDF
        </a>
      </p>
    </div>
  );
}

export default Resume;

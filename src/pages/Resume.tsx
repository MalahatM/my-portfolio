function Resume() {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h2>My Resume</h2>
      <iframe
        src="/resume.pdf"
        width="80%"
        height="600px"
        title="Resume PDF"
      ></iframe>
    </div>
  );
}

export default Resume;

function Resume() {
  const resumeUrl = "https://raw.githubusercontent.com/MalahatM/my-portfolio/main/public/CV%20front%20aug.pdf";

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h2>My Resume</h2>

      <iframe
        src={resumeUrl}
        width="80%"
        height="600px"
        title="Resume PDF"
        style={{ border: "1px solid #ccc", borderRadius: "8px" }}
      >
        <p>
          Your browser does not support iframes. You can{" "}
          <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
            open the PDF here
          </a>.
        </p>
      </iframe>

      <p style={{ marginTop: "1rem" }}>
        Or download/open directly:{" "}
        <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
          Resume PDF
        </a>
      </p>
    </div>
  );
}

export default Resume;

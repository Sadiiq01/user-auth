import "bootstrap/dist/css/bootstrap.min.css";

const ContactPage = () => {
  return (
    <div
      className="d-flex flex-column text-center text-white bg-dark"
      style={{
        height: "100vh",
        backgroundImage: "url('https://via.placeholder.com/1920x1080')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <header className="mb-auto p-3">
        <h1 className="display-4">Contact Us</h1>
      </header>

      <main className="px-3 my-auto">
        <p className="lead">We’d love to hear from you!</p>
        <form className="d-flex flex-column align-items-center">
          <div className="mb-3" style={{ width: "50%" }}>
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-3" style={{ width: "50%" }}>
            <input
              type="email"
              className="form-control"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-3" style={{ width: "50%" }}>
            <textarea
              className="form-control"
              rows={4}
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button className="btn btn-primary btn-lg" type="submit">
            Send Message
          </button>
        </form>
      </main>

      <footer className="mt-auto p-3">
        <p>Feel free to reach out at any time!</p>
      </footer>
    </div>
  );
};

export default ContactPage;

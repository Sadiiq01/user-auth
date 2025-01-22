import "bootstrap/dist/css/bootstrap.min.css";

const AboutPage = () => {
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
        <h1 className="display-4">About Us</h1>
      </header>

      <main className="px-3 my-auto">
        <p className="lead">
          We are dedicated to creating simple and beautiful solutions for your
          needs.
        </p>
        <p className="lead">
          Our mission is to deliver exceptional experiences that resonate with
          users and inspire innovation.
        </p>
      </main>

      <footer className="mt-auto p-3">
        <p>Made with passion and precision.</p>
      </footer>
    </div>
  );
};

export default AboutPage;

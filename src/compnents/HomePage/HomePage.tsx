import NavBar from "../layoutPage/NavBar";

const HomePage = () => {
  return (
    <div>
      <NavBar />
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
          <h1 className="display-4">User Auth</h1>
        </header>

        <main className="px-3 my-auto">
          <p className="lead">
            this is website that i used to imrove my skills of react so be happy
          </p>
          <p className="lead">
            Download, edit the text, and add your own fullscreen background
            photo to make it your own.
          </p>
        </main>

        <footer className="mt-auto p-3">
          <p>Made with sadiiq-mukhtaar</p>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;

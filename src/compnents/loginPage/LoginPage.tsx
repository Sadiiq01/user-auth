import "bootstrap/dist/css/bootstrap.min.css";
import { useContext, useRef } from "react";
import NameContext from "../context/context";
import { useForm } from "react-hook-form";

type FormValues = {
  name: string;
};

const LoginPage = () => {
  const {
    register,
    formState: { errors },
  } = useForm<FormValues>();

  const { name, setName } = useContext(NameContext);

  const ref = useRef<HTMLInputElement>(null);

  if (name) {
    return <h1> you have alredy account</h1>;
  } else
    return (
      <div
        className="d-flex flex-column text-center text-white bg-dark"
        style={{
          height: "100vh",
          //   backgroundImage: "url('https://via.placeholder.com/1920x1080')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <header className="mb-auto p-3">
          <h1 className="display-4">Login</h1>
        </header>

        <main className="px-3 my-auto">
          <div className="d-flex flex-column align-items-center">
            <label htmlFor="dynamicInput" className="mb-3 lead">
              {name}
            </label>
            <input
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters",
                },
              })}
              ref={ref}
              type="text"
              id="dynamicInput"
              className="form-control"
              style={{ width: "50%" }}
              placeholder="Type something..."
            />
            <input
              type="submit"
              className="btn btn-secondary mt-4"
              onClick={() => {
                if (ref.current) {
                  setName(ref.current.value);
                }
              }}
            />

            {errors?.name?.message && (
              <p className="text-light">{errors.name.message}</p>
            )}
          </div>
        </main>

        <footer className="mt-auto p-3">
          <p>Login to access your account.</p>
        </footer>
      </div>
    );
};

export default LoginPage;

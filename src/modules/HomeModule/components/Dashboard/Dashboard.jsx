import Header from "../../../shared/components/Header/Header";

export default function Dashboard({ loginData }) {
  return (
    <>
      <Header
        username={loginData?.userName || "Anas !"}
        description={
          "This is a welcoming screen for the entry of the application , you can now see the options"
        }
      />
      <div
        style={{ background: `#F0FFEF` }}
        className="  py-5 my-4 rounded-3 px-5 d-flex align-items-center justify-content-between"
      >
        <div>
          <div className="mb-3 ">
            <span className="h4 ">Fill the </span>
            <span className="fs-5  text-success">Recipes !</span>
          </div>
          <p>
            you can now fill the meals easily using the table and form , click
            here and sill it with the table !
          </p>
        </div>
        <div>
          <div className="btn btn-success btn-lg px-5 fw-light">
            Fill the Recipes <i className="bi bi-arrow-right "></i>
          </div>
        </div>
      </div>
    </>
  );
}

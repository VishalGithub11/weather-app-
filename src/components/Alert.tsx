interface Props {
  message: string;
  onClose: () => void;
}

const Alert = (props: Props) => {
  return (
    <div>
      <h2>{props.message}</h2>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => props.onClose()}
      >
        {" "}
        Close{" "}
      </button>
      <div className="modal is-active has-text-centered">
        <div className="modal-background" onClick={props.onClose}></div>
        <div className="modal-card">
          <header className="modal-card-head has-background-danger">
            <p className="modal-card-title has-text-white">{props.message}</p>
          </header>
          <footer
            className="modal-card-foot"
            style={{ justifyContent: "center" }}
          >
            <button className="button" onClick={props.onClose}>
              Close
            </button>
          </footer>
        </div>
      </div>

      {/* <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="false"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Alert;

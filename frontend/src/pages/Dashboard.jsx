function Dashboard({
  onViewLeads,
  onCreateLead,
  onLogout
}) {

  const role = localStorage.getItem("role");

  const canCreate =
    role === "MANAGER" || role === "ADMIN";

  return (

    <div className="container mt-5">

      <div className="d-flex justify-content-between align-items-center mb-4">

        <h1>
          Lead Management System
        </h1>

        <span className="badge bg-secondary fs-6">
          {role}
        </span>

      </div>

      <div className="row">

        <div className="col-md-4">

          <div className="card p-3 shadow">

            <h4>Total Leads</h4>

            <p>
              {role === "AGENT"
                ? "View your assigned leads"
                : "Manage all leads"}
            </p>

            <button
              className="btn btn-primary"
              onClick={onViewLeads}
            >
              View Leads
            </button>

          </div>

        </div>

        {canCreate && (

          <div className="col-md-4">

            <div className="card p-3 shadow">

              <h4>Create Lead</h4>

              <p>
                Add a new lead
              </p>

              <button
                className="btn btn-success"
                onClick={onCreateLead}
              >
                Create Lead
              </button>

            </div>

          </div>

        )}

        <div className="col-md-4">

          <div className="card p-3 shadow">

            <h4>Logout</h4>

            <p>
              End session
            </p>

            <button
              className="btn btn-danger"
              onClick={onLogout}
            >
              Logout
            </button>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Dashboard;

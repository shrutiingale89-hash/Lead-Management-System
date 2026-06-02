import { useState } from "react";
import axios from "axios";

function LeadList({ onBack, onEdit }) {

  const [leads, setLeads] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const [search, setSearch] =
    useState("");

  const [status, setStatus] =
    useState("");

  const role = localStorage.getItem("role");

  const canEditDelete =
    role === "MANAGER" || role === "ADMIN";

  async function loadLeads() {

    try {

      const token =
        localStorage.getItem("token");

      const response =
        await axios.get(
          `https://lead-management-system-gtzn.onrender.com/api/leads?search=${search}&status=${status}`,
          {
            headers: {
              Authorization:
                `Bearer ${token}`
            }
          }
        );

      setLeads(
        response.data.data
      );

      setLoaded(true);

    } catch (error) {

      console.log(error);

      alert(
        "Failed To Load Leads"
      );

    }

  }

  async function deleteLead(id) {

    const confirmDelete =
      window.confirm(
        "Are you sure?"
      );

    if (!confirmDelete) {
      return;
    }

    try {

      const token =
        localStorage.getItem("token");

      await axios.delete(
        `http://localhost:5000/api/leads/${id}`,
        {
          headers: {
            Authorization:
              `Bearer ${token}`
          }
        }
      );

      alert(
        "Lead Deleted Successfully"
      );

      await loadLeads();

    } catch (error) {

      console.log(error);

      alert(
        error.response?.data?.message ||
        "Failed To Delete Lead"
      );

    }

  }

  return (

    <div className="container mt-4">

      <div className="d-flex justify-content-between mb-3">

        <div>

          <h2>
            Leads List
          </h2>

          <small className="text-muted">
            {role === "AGENT"
              ? "Showing only your assigned leads (view only)"
              : "Showing all leads"}
          </small>

        </div>

        <button
          className="btn btn-secondary"
          onClick={onBack}
        >
          Back
        </button>

      </div>

      <div className="row mb-3">

        <div className="col-md-4">

          <input
            className="form-control"
            placeholder="Search Lead"
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
          />

        </div>

        <div className="col-md-3">

          <select
            className="form-control"
            value={status}
            onChange={(e) =>
              setStatus(
                e.target.value
              )
            }
          >

            <option value="">
              All Status
            </option>

            <option value="NEW">
              NEW
            </option>

            <option value="CONTACTED">
              CONTACTED
            </option>

            <option value="QUALIFIED">
              QUALIFIED
            </option>

            <option value="CLOSED">
              CLOSED
            </option>

          </select>

        </div>

        <div className="col-md-2">

          <button
            className="btn btn-primary"
            onClick={loadLeads}
          >
            Search
          </button>

        </div>

      </div>

      {
        loaded && (

          <table className="table table-bordered table-striped">

            <thead>

              <tr>

                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Status</th>
                <th>Source</th>
                <th>Assigned To</th>
                {canEditDelete && <th>Actions</th>}

              </tr>

            </thead>

            <tbody>

              {
                leads.map((lead) => (

                  <tr key={lead.id}>

                    <td>{lead.id}</td>
                    <td>{lead.name}</td>
                    <td>{lead.email}</td>
                    <td>{lead.phone}</td>
                    <td>{lead.status}</td>
                    <td>{lead.source}</td>
                    <td>{lead.assigned_to}</td>

                    {canEditDelete && (

                      <td>

                        <button
                          className="btn btn-warning btn-sm me-2"
                          onClick={() =>
                            onEdit(lead)
                          }
                        >
                          Edit
                        </button>

                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() =>
                            deleteLead(
                              lead.id
                            )
                          }
                        >
                          Delete
                        </button>

                      </td>

                    )}

                  </tr>

                ))
              }

            </tbody>

          </table>

        )
      }

    </div>

  );

}

export default LeadList;

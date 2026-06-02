import { useState } from "react";
import axios from "axios";

function LeadDetails({ leadId, onBack }) {

  const [lead, setLead] = useState(null);

  const loadLead = async () => {

    try {

      const token =
        localStorage.getItem("token");

      const response =
        await axios.get(
          `http://localhost:5000/api/leads/${leadId}`,
          {
            headers: {
              Authorization:
                `Bearer ${token}`
            }
          }
        );

      setLead(
        response.data.data
      );

    } catch (error) {

      console.log(error);

      alert("Failed To Load Lead");

    }

  };

  return (

    <div className="container mt-4">

      <h2>Lead Details</h2>

      <button
        className="btn btn-primary me-2"
        onClick={loadLead}
      >
        Load Details
      </button>

      <button
        className="btn btn-secondary"
        onClick={onBack}
      >
        Back
      </button>

      {
        lead && (

          <div className="mt-4">

            <p><b>ID:</b> {lead.id}</p>
            <p><b>Name:</b> {lead.name}</p>
            <p><b>Email:</b> {lead.email}</p>
            <p><b>Phone:</b> {lead.phone}</p>
            <p><b>Status:</b> {lead.status}</p>
            <p><b>Source:</b> {lead.source}</p>
            <p><b>Notes:</b> {lead.notes}</p>

          </div>

        )
      }

    </div>

  );

}

export default LeadDetails;
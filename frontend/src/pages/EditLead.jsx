import { useState } from "react";
import axios from "axios";

function EditLead({
  lead,
  onBack,
  onSuccess
}) {

  const [name, setName] =
    useState(lead.name);

  const [email, setEmail] =
    useState(lead.email);

  const [phone, setPhone] =
    useState(lead.phone);

  const [source, setSource] =
    useState(lead.source);

  const [status, setStatus] =
    useState(lead.status);

  const [notes, setNotes] =
    useState(lead.notes);

  async function handleSubmit(e) {

    e.preventDefault();

    try {

      const token =
        localStorage.getItem("token");

      await axios.put(
        `https://lead-management-system-gtzn.onrender.com/api/leads/${lead.id}`,
        {
          name,
          email,
          phone,
          source,
          status,
          notes
        },
        {
          headers: {
            Authorization:
              `Bearer ${token}`
          }
        }
      );

      alert(
        "Lead Updated Successfully"
      );

      onSuccess();

    } catch (error) {

      console.log(error);

      alert(
        "Failed To Update Lead"
      );

    }

  }

  return (

    <div className="container mt-4">

      <h2>Edit Lead</h2>

      <form onSubmit={handleSubmit}>

        <input
          className="form-control mb-3"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <input
          className="form-control mb-3"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          className="form-control mb-3"
          value={phone}
          onChange={(e) =>
            setPhone(e.target.value)
          }
        />

        <input
          className="form-control mb-3"
          value={source}
          onChange={(e) =>
            setSource(e.target.value)
          }
        />

        <select
          className="form-control mb-3"
          value={status}
          onChange={(e) =>
            setStatus(e.target.value)
          }
        >
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

        <textarea
          className="form-control mb-3"
          value={notes}
          onChange={(e) =>
            setNotes(e.target.value)
          }
        />

        <button
          className="btn btn-success me-2"
          type="submit"
        >
          Update
        </button>

        <button
          type="button"
          className="btn btn-secondary"
          onClick={onBack}
        >
          Back
        </button>

      </form>

    </div>

  );

}

export default EditLead;
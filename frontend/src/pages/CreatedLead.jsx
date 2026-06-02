import { useState } from "react";
import axios from "axios";

function CreateLead({ onBack }) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [source, setSource] = useState("");
  const [status, setStatus] = useState("NEW");
  const [notes, setNotes] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const token =
        localStorage.getItem("token");

      await axios.post(
        "https://lead-management-system-gtzn.onrender.com/api/leads",
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

      alert("Lead Created Successfully");

      onBack();

    } catch (error) {

      console.log(error);

      alert(
        error.response?.data?.message ||
        "Failed To Create Lead"
      );

    }

  };

  return (

    <div className="container mt-4">

      <h2>Create Lead</h2>

      <form onSubmit={handleSubmit}>

        <input
          className="form-control mb-3"
          placeholder="Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <input
          className="form-control mb-3"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          className="form-control mb-3"
          placeholder="Phone"
          value={phone}
          onChange={(e) =>
            setPhone(e.target.value)
          }
        />

        <input
          className="form-control mb-3"
          placeholder="Source"
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
          <option value="NEW">NEW</option>
          <option value="CONTACTED">CONTACTED</option>
          <option value="QUALIFIED">QUALIFIED</option>
          <option value="CLOSED">CLOSED</option>
        </select>

        <textarea
          className="form-control mb-3"
          placeholder="Notes"
          value={notes}
          onChange={(e) =>
            setNotes(e.target.value)
          }
        />

        <button
          type="submit"
          className="btn btn-success me-2"
        >
          Create Lead
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

export default CreateLead;
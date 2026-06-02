import { useState } from "react";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import LeadList from "./pages/LeadList";
import CreateLead from "./pages/CreatedLead";
import EditLead from "./pages/EditLead";

function App() {

  const [currentPage, setCurrentPage] =
    useState("login");

  const [selectedLead, setSelectedLead] =
    useState(null);

  if (currentPage === "login") {

    return (
      <Login
        onLogin={() =>
          setCurrentPage("dashboard")
        }
        onShowRegister={() =>
          setCurrentPage("register")
        }
      />
    );

  }

  if (currentPage === "register") {

    return (
      <Register
        onBackToLogin={() =>
          setCurrentPage("login")
        }
      />
    );

  }

  if (currentPage === "dashboard") {

    return (
      <Dashboard
        onViewLeads={() =>
          setCurrentPage("leads")
        }
        onCreateLead={() =>
          setCurrentPage("createLead")
        }
        onLogout={() => {

          localStorage.removeItem("token");
          localStorage.removeItem("role");
          localStorage.removeItem("userId");

          setCurrentPage("login");

        }}
      />
    );

  }

  if (currentPage === "leads") {

    return (
      <LeadList
        onBack={() =>
          setCurrentPage("dashboard")
        }
        onEdit={(lead) => {

          setSelectedLead(lead);

          setCurrentPage(
            "editLead"
          );

        }}
      />
    );

  }

  if (currentPage === "createLead") {

    return (
      <CreateLead
        onBack={() =>
          setCurrentPage("dashboard")
        }
      />
    );

  }

  if (
    currentPage === "editLead"
    &&
    selectedLead
  ) {

    return (
      <EditLead
        lead={selectedLead}
        onBack={() =>
          setCurrentPage("leads")
        }
        onSuccess={() =>
          setCurrentPage("leads")
        }
      />
    );

  }

  return null;

}

export default App;

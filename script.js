function processFile() {
    const fileInput = document.getElementById("fileInput");
    if (!fileInput.files.length) {
      alert("Please upload a CSV file.");
      return;
    }
  
    const reader = new FileReader();
    reader.onload = function (e) {
      const rows = e.target.result.trim().split("\n");
      const dataRows = rows.slice(1);
  
      let validCount = 0;
      let highRiskCount = 0;
  
      const tbody = document.querySelector("#resultTable tbody");
      tbody.innerHTML = "";
  
      dataRows.forEach(row => {
        const cols = row.split(",");
  
        const client = cols[0];
        const revenue = Number(cols[1]);
        const margin = Number(cols[2]);
        const risk = Number(cols[3]);
  
        let dataStatus = "Valid";
        let riskCategory = "";
        let decision = "";
  
        // DATA VALIDATION
        if (!client || isNaN(revenue) || isNaN(margin) || isNaN(risk)) {
          dataStatus = "Invalid";
          decision = "Excluded";
        } else {
          validCount++;
  
          // RISK CLASSIFICATION
          if (risk <= 3) riskCategory = "Low";
          else if (risk <= 6) riskCategory = "Medium";
          else {
            riskCategory = "High";
            highRiskCount++;
          }
  
          // BUSINESS DECISION RULES
          if (revenue >= 10 && margin >= 20 && risk <= 4) {
            decision = "Accept";
          } else if (revenue < 5 || risk >= 8) {
            decision = "Reject";
          } else {
            decision = "Review";
          }
        }
  
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${client}</td>
          <td>${isNaN(revenue) ? "-" : revenue}</td>
          <td>${isNaN(margin) ? "-" : margin}</td>
          <td>${isNaN(risk) ? "-" : risk}</td>
          <td>${dataStatus}</td>
          <td>${riskCategory || "-"}</td>
          <td>${decision}</td>
        `;
  
        tbody.appendChild(tr);
      });
  
      document.getElementById("summary").innerText =
        `Valid Records: ${validCount} | High Risk Clients: ${highRiskCount}`;
    };
  
    reader.readAsText(fileInput.files[0]);
  }
  
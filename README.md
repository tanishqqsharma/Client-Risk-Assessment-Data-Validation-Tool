# Client Insight Generator

A web-based analytical tool designed to transform raw client data into actionable business insights.  
The application helps identify high-value and high-risk clients and provides clear recommendations to support decision-making.

---

## 📌 Project Objective

To demonstrate how client data can be analyzed using simple business rules to:
- Segment clients by value
- Identify risk levels
- Generate data-driven recommendations

This project reflects a consulting-style, business-first approach to data analysis.

---

## 🧠 Key Features

- Upload client data in CSV format  
- Automatically classify clients into High / Medium / Low value segments  
- Identify High-Risk clients based on engagement and complaint indicators  
- Generate actionable recommendations such as Retention, Upsell, or Review  

---

## 📊 Business Logic Used

**Client Value Classification**
- Revenue ≥ 100,000 → High Value  
- Revenue between 50,000–100,000 → Medium Value  
- Revenue < 50,000 → Low Value  

**Risk Identification**
- Last purchase > 90 days OR complaints ≥ 2 → High Risk  

**Recommendations**
- High Value + High Risk → Immediate Retention Action  
- High Value + Low Risk → Upsell Opportunity  
- Low Value + High Risk → Review Client Exposure  
- Else → Maintain Relationship  

---

## 🛠 Tools & Technologies

- HTML5  
- CSS3  
- JavaScript (Vanilla JS)  
- CSV for structured business data  

---

## 🚀 How to Run the Project

1. Clone or download the repository  
2. Open `index.html` in any modern browser  
3. Upload the provided `client_data.csv` file  
4. Click **Generate Insights** to view results  

---

## 🎯 Use Case Relevance

This project simulates a real-world analyst scenario where client data is translated into insights and recommendations, aligning with consulting and analytics roles.

---

## 📎 Sample Data

A sample CSV file (`client_data.csv`) is included to demonstrate functionality.

---

## 👤 Author

Tanishq Sharma  
Fresher | Aspiring Business/Data Analyst

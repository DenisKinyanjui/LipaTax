import React, { useState } from "react";
import * as XLSX from "xlsx";
import JSZip from "jszip";
import { saveAs } from "file-saver";

const TaxFilingPage = () => {
  const [taxDetails, setTaxDetails] = useState({
    income: "",
    nhif: 0,
    nssf: 0,
    personalRelief: 2400, // Default personal relief
    taxLiability: null,
  });
  const [showGuide, setShowGuide] = useState(false);

  // Calculate NHIF contribution based on gross income
  const calculateNHIF = (income: number) => {
    if (income <= 5999) return 150;
    if (income <= 7999) return 300;
    if (income <= 11999) return 400;
    if (income <= 14999) return 500;
    if (income <= 19999) return 600;
    if (income <= 24999) return 750;
    if (income <= 29999) return 850;
    if (income <= 34999) return 900;
    if (income <= 39999) return 950;
    if (income >= 40000) return 1000;
    return 0;
  };

  // Calculate NSSF contribution (6% of income, capped at KES 720)
  const calculateNSSF = (income: number) => {
    return Math.min(income * 0.06, 720);
  };

  // Handle gross income input and update deductions
  const handleIncomeChange = (e: { target: { value: any; }; }) => {
    const income = parseFloat(e.target.value || 0);
    const nhif = calculateNHIF(income);
    const nssf = calculateNSSF(income);

    setTaxDetails({
      ...taxDetails,
      income,
      nhif,
      nssf,
    });
  };

  // Calculate PAYE tax liability
  const calculateTax = () => {
    const { income, nhif, nssf, personalRelief } = taxDetails;
    const taxableIncome = income - nssf; // Remove NSSF contributions from taxable income
    let taxLiability = 0;

    // Apply Kenyan PAYE tax brackets
    if (taxableIncome <= 24000) {
      taxLiability = taxableIncome * 0.1; // 10% for the first KES 24,000
    } else if (taxableIncome <= 32333) {
      taxLiability = 2400 + (taxableIncome - 24000) * 0.25; // 25% for income above 24,000 up to 32,333
    } else {
      taxLiability = 2400 + 2083.25 + (taxableIncome - 32333) * 0.3; // 30% for income above 32,333
    }

    // Apply reliefs
    taxLiability = Math.max(0, taxLiability - personalRelief - nhif);

    setTaxDetails({ ...taxDetails, taxLiability });
  };

  // Create and download the Excel file for iTax
  const createTaxExcel = () => {
    const { income, nhif, nssf, personalRelief, taxLiability } = taxDetails;

    // Create Excel data (iTax-compatible structure)
    const data = [
      ["Taxpayer Details", "", ""],
      ["Gross Income", income],
      ["NHIF Contribution", nhif],
      ["NSSF Contribution", nssf],
      ["Personal Relief", personalRelief],
      ["Tax Liability", taxLiability],
    ];

    // Create workbook and worksheet
    const ws = XLSX.utils.aoa_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Tax Return");

    // Add a placeholder for macro (this is only a placeholder, actual macro integration needs VBA)
    const zip = new JSZip();
    const fileName = "Tax_Return_Form.xlsx";
    const xlsxData = XLSX.write(wb, { bookType: "xlsx", type: "array" });

    // Add Excel file to zip
    zip.file(fileName, xlsxData);

    // Create ZIP file
    zip.generateAsync({ type: "blob" }).then((content) => {
      saveAs(content, "Tax_Filing_Package.zip");
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* <header className="bg-blue-600 text-white p-6">
        <h1 className="text-3xl font-bold">Kenyan Tax Filing Assistance</h1>
      </header> */}

      <main className="p-6">
        {/* Hero Section */}
        <section className="bg-blue-600 p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl text-gray-200 font-bold mb-4">Simplify Your Tax Filing in Kenya</h2>
          <p className="text-gray-100 mb-4">
            Effortlessly calculate your PAYE, NHIF, and NSSF deductions, generate tax return forms, and navigate iTax with ease.
          </p>
        </section>

        {/* Tax Calculation Section */}
        <section id="calculator" className="mb-8">
          <h2 className="text-xl font-bold mb-4">Tax Calculator</h2>
          <div className="space-y-4">
            <div>
              <label className="block font-bold mb-1">Gross Income (KES):</label>
              <input
                type="number"
                placeholder="Enter your gross income"
                className="border p-2 w-full"
                onChange={handleIncomeChange}
              />
            </div>
            <div>
              <label className="block font-bold mb-1">NHIF Contribution:</label>
              <p className="border p-2 bg-gray-100">{`KES ${taxDetails.nhif.toFixed(2)}`}</p>
            </div>
            <div>
              <label className="block font-bold mb-1">NSSF Contribution:</label>
              <p className="border p-2 bg-gray-100">{`KES ${taxDetails.nssf.toFixed(2)}`}</p>
            </div>
            <div>
              <label className="block font-bold mb-1">Personal Relief:</label>
              <p className="border p-2 bg-gray-100">{`KES ${taxDetails.personalRelief.toFixed(2)}`}</p>
            </div>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded mt-4"
              onClick={calculateTax}
            >
              Calculate Tax Liability
            </button>
            {taxDetails.taxLiability !== null && (
              <div className="mt-4">
                <h3 className="font-bold text-lg">Estimated Tax Liability:</h3>
                <p className="border p-2 bg-green-100">{`KES ${taxDetails.taxLiability.toFixed(2)}`}</p>
                <button
                  className="bg-green-600 text-white px-4 py-2 rounded mt-2"
                  onClick={createTaxExcel}
                >
                  Download Tax Return Form (Excel)
                </button>
              </div>
            )}
          </div>
        </section>

        {/* iTax Filing Guide */}
        <section id="guide" className="mb-8">
          <h2 className="text-xl font-bold mb-4">Step-by-Step iTax Filing Guide</h2>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded"
            onClick={() => setShowGuide(!showGuide)}
          >
            {showGuide ? "Hide Guide" : "Show Guide"}
          </button>
          {showGuide && (
            <ol className="list-decimal pl-6 mt-4 space-y-4">
              <li>Log in to your iTax account at <a href="https://itax.kra.go.ke/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">iTax Portal</a>.</li>
              <li>Navigate to the "Returns" section and select "File Return".</li>
              <li>Choose the appropriate tax return form for your income type.</li>
              <li>Upload the downloaded tax return form generated from this page.</li>
              <li>Review and confirm the details, then submit the return.</li>
              <li>Download the acknowledgment receipt for your records.</li>
            </ol>
          )}
        </section>
      </main>

      <footer className="bg-gray-800 text-white p-4">
        <p>&copy; 2024 Kenyan Tax Filing Assistance. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default TaxFilingPage;

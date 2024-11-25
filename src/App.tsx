import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Dashboard from './pages/Dashboard';
import NewInvoice from './pages/NewInvoice';
import GenerateReceipt from './pages/GenerateReceipt';
import CreateContract from './pages/CreateContract';
import TaxCalculator from './pages/TaxCalculator';
import NewProposal from './pages/NewProposal';
import CreateNDA from './pages/CreateNDA';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="invoice/new" element={<NewInvoice />} />
          <Route path="receipt/new" element={<GenerateReceipt />} />
          <Route path="contract/new" element={<CreateContract />} />
          <Route path="tax-calculator" element={<TaxCalculator />} />
          <Route path="proposal/new" element={<NewProposal />} />
          <Route path="nda/new" element={<CreateNDA />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
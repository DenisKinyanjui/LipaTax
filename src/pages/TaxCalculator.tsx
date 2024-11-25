import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Upload, Download, CreditCard } from 'lucide-react';

export default function TaxCalculator() {
  const [calculatorType, setCalculatorType] = useState('monthly');
  const [showPaymentInstructions, setShowPaymentInstructions] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      {/* Tax Calculator Header */}
      <div className="bg-white rounded-xl shadow-sm p-8">
        <div className="flex items-center space-x-4 mb-8">
          <div className="p-3 rounded-full bg-blue-100">
            <Calculator className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Tax Calculator</h1>
            <p className="text-gray-600 mt-1">Calculate your tax liability and generate P9 forms</p>
          </div>
        </div>

        {/* Calculator Type Selector */}
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setCalculatorType('monthly')}
            className={`px-4 py-2 rounded-lg ${
              calculatorType === 'monthly'
                ? 'bg-blue-100 text-blue-700'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            Monthly PAYE
          </button>
          <button
            onClick={() => setCalculatorType('annual')}
            className={`px-4 py-2 rounded-lg ${
              calculatorType === 'annual'
                ? 'bg-blue-100 text-blue-700'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            Annual Returns
          </button>
          <button
            onClick={() => setCalculatorType('vat')}
            className={`px-4 py-2 rounded-lg ${
              calculatorType === 'vat'
                ? 'bg-blue-100 text-blue-700'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            VAT Calculator
          </button>
        </div>

        {/* Calculator Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Basic Salary</label>
              <input
                type="number"
                className="mt-1 block w-full"
                placeholder="Enter amount"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Benefits in Kind</label>
              <input
                type="number"
                className="mt-1 block w-full"
                placeholder="House, Car, etc."
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Allowances
                <span className="text-sm text-gray-500 ml-2">(Transport, Entertainment, etc.)</span>
              </label>
              <input
                type="number"
                className="mt-1 block w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">NSSF Contribution</label>
              <select className="mt-1 block w-full">
                <option>Tier I (Up to KES 6,000)</option>
                <option>Tier I & II (Up to KES 18,000)</option>
                <option>Custom Amount</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">NHIF Contribution</label>
              <input
                type="number"
                className="mt-1 block w-full"
                placeholder="Based on gross pay"
              />
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg space-y-6">
            <h2 className="text-lg font-semibold text-gray-900">Tax Summary</h2>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Gross Pay</span>
                <span className="font-medium">KES 0.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Taxable Income</span>
                <span className="font-medium">KES 0.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">PAYE</span>
                <span className="font-medium">KES 0.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">NHIF Relief (15%)</span>
                <span className="font-medium">KES 0.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Personal Relief</span>
                <span className="font-medium">KES 2,400.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Insurance Relief</span>
                <span className="font-medium">KES 0.00</span>
              </div>
            </div>

            <div className="pt-3 border-t border-gray-200">
              <div className="flex justify-between text-lg">
                <span className="font-semibold">Net Tax Payable</span>
                <span className="font-semibold text-blue-600">KES 0.00</span>
              </div>
            </div>

            <div className="flex space-x-4 mt-6">
              <button
                onClick={() => setShowPaymentInstructions(true)}
                className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                <CreditCard className="w-4 h-4 mr-2" />
                Pay Now
              </button>
              <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                <Download className="w-4 h-4 mr-2" />
                Download P9
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* iTax Upload Guide */}
      <div className="bg-white rounded-xl shadow-sm p-8">
        <div className="flex items-center space-x-4 mb-6">
          <div className="p-3 rounded-full bg-purple-100">
            <Upload className="h-6 w-6 text-purple-600" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900">iTax Upload Guide</h2>
        </div>

        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
              <span className="text-blue-600 font-medium">1</span>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Download Generated Return</h3>
              <p className="text-gray-600">Export your calculated tax return in iTax-compatible format</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
              <span className="text-blue-600 font-medium">2</span>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Log into iTax Portal</h3>
              <p className="text-gray-600">Visit the KRA iTax portal and sign in to your account</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
              <span className="text-blue-600 font-medium">3</span>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Upload Return File</h3>
              <p className="text-gray-600">Navigate to Returns section and upload the generated file</p>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Instructions Modal */}
      {showPaymentInstructions && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <h3 className="text-lg font-semibold mb-4">Payment Instructions</h3>
            
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">M-Pesa Payment</h4>
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li>Go to M-Pesa menu</li>
                  <li>Select "Pay Bill"</li>
                  <li>Enter Business No: 572572</li>
                  <li>Enter Account No: Your KRA PIN</li>
                  <li>Enter Amount: KES XXX</li>
                  <li>Enter your M-Pesa PIN</li>
                </ol>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Bank Transfer</h4>
                <p className="text-sm text-gray-600">
                  Transfer to KRA Collection Account:<br />
                  Bank: National Bank of Kenya<br />
                  Account: 01001000903200<br />
                  Reference: Your KRA PIN
                </p>
              </div>
            </div>

            <button
              onClick={() => setShowPaymentInstructions(false)}
              className="mt-6 w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
}
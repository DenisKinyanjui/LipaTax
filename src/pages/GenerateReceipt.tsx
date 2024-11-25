import React from 'react';
import { motion } from 'framer-motion';
import { Receipt } from 'lucide-react';

export default function GenerateReceipt() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-sm p-8"
    >
      <div className="flex items-center space-x-4 mb-8">
        <div className="p-3 rounded-full bg-green-100">
          <Receipt className="h-6 w-6 text-green-600" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900">Generate Receipt</h1>
      </div>

      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Receipt Number</label>
            <input
              type="text"
              className="mt-1 block w-full"
              placeholder="REC-001"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Date</label>
            <input
              type="date"
              className="mt-1 block w-full"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Received From</label>
          <input
            type="text"
            className="mt-1 block w-full"
            placeholder="Client/Company Name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Amount</label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">KES</span>
            </div>
            <input
              type="number"
              className="block w-full pl-12"
              placeholder="0.00"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Payment Method</label>
          <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
            <option>M-Pesa</option>
            <option>Bank Transfer</option>
            <option>Cash</option>
            <option>Cheque</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            rows={3}
            className="mt-1 block w-full"
            placeholder="Payment for..."
          />
        </div>

        <div className="pt-6 border-t border-gray-200">
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="btn-secondary"
            >
              Preview
            </button>
            <button
              type="submit"
              className="btn-primary"
            >
              Generate Receipt
            </button>
          </div>
        </div>
      </form>
    </motion.div>
  );
}
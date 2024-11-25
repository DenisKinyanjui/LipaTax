import React from 'react';
import { motion } from 'framer-motion';

export default function NewInvoice() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-sm p-8"
    >
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Create New Invoice</h1>
      
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Client Name</label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Invoice Number</label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Items</label>
          <div className="mt-2 space-y-4">
            {/* Add item rows here */}
          </div>
          <button
            type="button"
            className="mt-2 text-sm text-blue-600 hover:text-blue-700"
          >
            + Add Item
          </button>
        </div>

        <div className="pt-6 border-t border-gray-200">
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="btn-secondary"
            >
              Save as Draft
            </button>
            <button
              type="submit"
              className="btn-primary"
            >
              Generate Invoice
            </button>
          </div>
        </div>
      </form>
    </motion.div>
  );
}
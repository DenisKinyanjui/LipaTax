import React from 'react';
import { motion } from 'framer-motion';
import { FileCheck } from 'lucide-react';

export default function CreateContract() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-sm p-8"
    >
      <div className="flex items-center space-x-4 mb-8">
        <div className="p-3 rounded-full bg-purple-100">
          <FileCheck className="h-6 w-6 text-purple-600" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900">Create Contract</h1>
      </div>

      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Contract Type</label>
            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
              <option>Service Agreement</option>
              <option>Employment Contract</option>
              <option>Sales Agreement</option>
              <option>Lease Agreement</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Effective Date</label>
            <input
              type="date"
              className="mt-1 block w-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Party One (Your Details)</label>
            <input
              type="text"
              className="mt-1 block w-full"
              placeholder="Full Name/Company Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Party Two</label>
            <input
              type="text"
              className="mt-1 block w-full"
              placeholder="Full Name/Company Name"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Contract Terms</label>
          <textarea
            rows={6}
            className="mt-1 block w-full"
            placeholder="Enter the main terms and conditions..."
          />
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
              Generate Contract
            </button>
          </div>
        </div>
      </form>
    </motion.div>
  );
}
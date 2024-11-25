import React from 'react';
import { motion } from 'framer-motion';
import { FileSignature } from 'lucide-react';

export default function CreateNDA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-sm p-8"
    >
      <div className="flex items-center space-x-4 mb-8">
        <div className="p-3 rounded-full bg-indigo-100">
          <FileSignature className="h-6 w-6 text-indigo-600" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900">Create NDA</h1>
      </div>

      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">NDA Type</label>
            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
              <option>Mutual NDA</option>
              <option>One-Way NDA</option>
              <option>Employee NDA</option>
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
            <label className="block text-sm font-medium text-gray-700">Disclosing Party</label>
            <input
              type="text"
              className="mt-1 block w-full"
              placeholder="Full Name/Company Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Receiving Party</label>
            <input
              type="text"
              className="mt-1 block w-full"
              placeholder="Full Name/Company Name"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Purpose of Disclosure</label>
          <textarea
            rows={4}
            className="mt-1 block w-full"
            placeholder="Describe the purpose of sharing confidential information..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Confidential Information Description</label>
          <textarea
            rows={4}
            className="mt-1 block w-full"
            placeholder="Define what constitutes confidential information..."
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
              Generate NDA
            </button>
          </div>
        </div>
      </form>
    </motion.div>
  );
}
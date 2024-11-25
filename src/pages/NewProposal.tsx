import React from 'react';
import { motion } from 'framer-motion';
import { Handshake } from 'lucide-react';

export default function NewProposal() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-sm p-8"
    >
      <div className="flex items-center space-x-4 mb-8">
        <div className="p-3 rounded-full bg-pink-100">
          <Handshake className="h-6 w-6 text-pink-600" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900">Create New Proposal</h1>
      </div>

      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Client Name</label>
            <input
              type="text"
              className="mt-1 block w-full"
              placeholder="Client/Company Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Project Title</label>
            <input
              type="text"
              className="mt-1 block w-full"
              placeholder="Enter project title"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Executive Summary</label>
          <textarea
            rows={4}
            className="mt-1 block w-full"
            placeholder="Brief overview of the proposal..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Scope of Work</label>
          <textarea
            rows={6}
            className="mt-1 block w-full"
            placeholder="Detailed description of services/products..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Budget</label>
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
              Generate Proposal
            </button>
          </div>
        </div>
      </form>
    </motion.div>
  );
}
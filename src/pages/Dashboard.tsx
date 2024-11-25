import React from 'react';
import { motion } from 'framer-motion';
import { QuickActions } from '../components/QuickActions';
import { TaxDeadlines } from '../components/TaxDeadlines';
import { RecentDocuments } from '../components/RecentDocuments';

export default function Dashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-lg p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Welcome to TaxEase Kenya</h1>
        <p className="text-blue-100 max-w-2xl">
          Simplify your tax filing process and manage business documents efficiently. 
          Start with our Tax Calculator to compute your liabilities or use our 
          step-by-step iTax upload guide.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <QuickActions />
          <div className="mt-8">
            <RecentDocuments />
          </div>
        </div>
        <div>
          <TaxDeadlines />
        </div>
      </div>
    </motion.div>
  );
}
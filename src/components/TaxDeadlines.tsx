import React from 'react';
import { Calendar, AlertCircle } from 'lucide-react';
import { format } from 'date-fns';
import { TaxDeadline } from '../types';
import { DashboardCard } from './DashboardCard';

const deadlines: TaxDeadline[] = [
  {
    id: '1',
    title: 'Monthly PAYE Returns',
    dueDate: new Date(2024, 3, 9),
    type: 'PAYE',
    status: 'pending'
  },
  {
    id: '2',
    title: 'VAT Returns',
    dueDate: new Date(2024, 3, 20),
    type: 'VAT',
    status: 'pending'
  }
];

export function TaxDeadlines() {
  return (
    <DashboardCard title="Upcoming Tax Deadlines" className="h-full">
      <div className="space-y-4">
        {deadlines.map((deadline) => (
          <div
            key={deadline.id}
            className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="mr-4">
              <Calendar className="w-5 h-5 text-blue-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-gray-900">{deadline.title}</h3>
              <p className="text-sm text-gray-600">
                Due: {format(deadline.dueDate, 'MMM d, yyyy')}
              </p>
            </div>
            {deadline.status === 'overdue' && (
              <AlertCircle className="w-5 h-5 text-red-500" />
            )}
          </div>
        ))}
      </div>
      <button className="mt-4 w-full py-2 text-sm text-blue-600 hover:text-blue-700 font-medium">
        View All Deadlines
      </button>
    </DashboardCard>
  );
}
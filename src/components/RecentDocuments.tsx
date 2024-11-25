import React from 'react';
import { File, Download } from 'lucide-react';
import { format } from 'date-fns';
import { DocumentTemplate } from '../types';
import { DashboardCard } from './DashboardCard';

const documents: DocumentTemplate[] = [
  {
    id: '1',
    title: 'Service Agreement - TechCorp',
    type: 'contract',
    lastModified: new Date(2024, 2, 15)
  },
  {
    id: '2',
    title: 'Q1 2024 Tax Report',
    type: 'report',
    lastModified: new Date(2024, 2, 14)
  },
  {
    id: '3',
    title: 'Marketing Proposal',
    type: 'proposal',
    lastModified: new Date(2024, 2, 13)
  }
];

export function RecentDocuments() {
  return (
    <DashboardCard title="Recent Documents" className="h-full">
      <div className="space-y-3">
        {documents.map((doc) => (
          <div
            key={doc.id}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center space-x-3">
              <File className="w-5 h-5 text-gray-600" />
              <div>
                <h3 className="font-medium text-gray-900">{doc.title}</h3>
                <p className="text-sm text-gray-600">
                  {format(doc.lastModified, 'MMM d, yyyy')}
                </p>
              </div>
            </div>
            <button className="p-2 hover:bg-gray-200 rounded-full">
              <Download className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        ))}
      </div>
    </DashboardCard>
  );
}
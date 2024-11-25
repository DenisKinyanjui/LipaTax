import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Calculator, FileText, Receipt, FileCheck,
  Handshake, FileSignature, Upload
} from 'lucide-react';
import { DashboardCard } from './DashboardCard';

const actions = [
  { 
    id: '1', 
    title: 'Tax Calculator', 
    description: 'Calculate PAYE, VAT & generate P9 forms',
    icon: Calculator, 
    color: 'bg-blue-100 text-blue-600', 
    path: '/tax-calculator',
    primary: true
  },
  { 
    id: '2', 
    title: 'iTax Upload', 
    description: 'Step-by-step iTax filing guide',
    icon: Upload, 
    color: 'bg-green-100 text-green-600', 
    path: '/tax-calculator#upload',
    primary: true
  },
  { 
    id: '3', 
    title: 'New Invoice', 
    icon: FileText, 
    color: 'bg-purple-100 text-purple-600', 
    path: '/invoice/new' 
  },
  { 
    id: '4', 
    title: 'Generate Receipt', 
    icon: Receipt, 
    color: 'bg-yellow-100 text-yellow-600', 
    path: '/receipt/new' 
  },
  { 
    id: '5', 
    title: 'Create Contract', 
    icon: FileCheck, 
    color: 'bg-pink-100 text-pink-600', 
    path: '/contract/new' 
  },
  { 
    id: '6', 
    title: 'New Proposal', 
    icon: Handshake, 
    color: 'bg-indigo-100 text-indigo-600', 
    path: '/proposal/new' 
  },
  { 
    id: '7', 
    title: 'Create NDA', 
    icon: FileSignature, 
    color: 'bg-orange-100 text-orange-600', 
    path: '/nda/new' 
  }
];

export function QuickActions() {
  const navigate = useNavigate();

  const primaryActions = actions.filter(action => action.primary);
  const secondaryActions = actions.filter(action => !action.primary);

  return (
    <div className="space-y-6">
      {/* Primary Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {primaryActions.map(({ id, title, description, icon: Icon, color, path }) => (
          <button
            key={id}
            onClick={() => navigate(path)}
            className="flex items-start p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-all"
          >
            <div className={`p-3 rounded-full ${color} mr-4`}>
              <Icon className="w-6 h-6" />
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-gray-900">{title}</h3>
              <p className="text-sm text-gray-600 mt-1">{description}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Secondary Actions */}
      <DashboardCard title="Other Tools" className="bg-white">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {secondaryActions.map(({ id, title, icon: Icon, color, path }) => (
            <button
              key={id}
              onClick={() => navigate(path)}
              className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className={`p-3 rounded-full ${color} mb-2`}>
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-sm text-gray-700 text-center">{title}</span>
            </button>
          ))}
        </div>
      </DashboardCard>
    </div>
  );
}
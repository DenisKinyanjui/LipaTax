import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, Calculator, FileText, Receipt, 
  FileCheck, Handshake, FileSignature, Settings, 
  HelpCircle, BarChart3, Upload
} from 'lucide-react';

const navigation = [
  { name: 'Dashboard', icon: LayoutDashboard, href: '/' },
  { 
    name: 'Tax Management', 
    icon: Calculator, 
    href: '/tax-calculator',
    badge: 'Priority'
  },
  { 
    name: 'iTax Upload Guide', 
    icon: Upload, 
    href: '/tax-calculator#upload',
    badge: 'New'
  },
  { name: 'New Invoice', icon: FileText, href: '/invoice/new' },
  { name: 'Generate Receipt', icon: Receipt, href: '/receipt/new' },
  { name: 'Create Contract', icon: FileCheck, href: '/contract/new' },
  { name: 'New Proposal', icon: Handshake, href: '/proposal/new' },
  { name: 'Create NDA', icon: FileSignature, href: '/nda/new' },
  { name: 'Analytics', icon: BarChart3, href: '/analytics' },
];

const secondaryNavigation = [
  { name: 'Settings', icon: Settings, href: '/settings' },
  { name: 'Help & Support', icon: HelpCircle, href: '/support' },
];

export function Sidebar() {
  return (
    <div className="fixed inset-y-0 left-0 w-64 bg-white border-r border-gray-200 pt-16">
      <nav className="flex flex-col h-full">
        <div className="flex-1 space-y-1 px-2 py-4">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                `group flex items-center px-4 py-3 text-sm font-medium rounded-lg ${
                  isActive
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-700 hover:bg-gray-50'
                }`
              }
            >
              <item.icon className="mr-3 h-5 w-5 flex-shrink-0" />
              <span className="flex-1">{item.name}</span>
              {item.badge && (
                <span className={`ml-2 px-2 py-0.5 text-xs rounded-full ${
                  item.badge === 'Priority' 
                    ? 'bg-blue-100 text-blue-600'
                    : 'bg-green-100 text-green-600'
                }`}>
                  {item.badge}
                </span>
              )}
            </NavLink>
          ))}
        </div>
        
        <div className="border-t border-gray-200 px-2 py-4 space-y-1">
          {secondaryNavigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className="group flex items-center px-4 py-3 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50"
            >
              <item.icon className="mr-3 h-5 w-5 flex-shrink-0" />
              {item.name}
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  );
}
export interface TaxDeadline {
  id: string;
  title: string;
  dueDate: Date;
  type: 'VAT' | 'PAYE' | 'ITR' | 'WHT';
  status: 'pending' | 'completed' | 'overdue';
}

export interface DocumentTemplate {
  id: string;
  title: string;
  type: 'contract' | 'invoice' | 'receipt' | 'proposal' | 'nda' | 'report';
  lastModified: Date;
}

export interface QuickAction {
  id: string;
  title: string;
  icon: string;
  action: () => void;
}
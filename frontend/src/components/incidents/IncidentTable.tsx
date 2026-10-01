'use client';

import { useState, useMemo } from 'react';
import { Filter, Search, ArrowUpDown, ChevronRight, Download } from 'lucide-react';
import { mockIncidents, type Incident } from '@/data/mock-pipes';
import { getSeverityColor, formatDate, formatLeakProbability } from '@/lib/utils';
import { useToast } from '@/components/ui/ToastProvider';

export default function IncidentTable() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [severityFilter, setSeverityFilter] = useState<string>('all');
  const [sortField, setSortField] = useState<keyof Incident>('created_at');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  
  const { addToast } = useToast();

  // Filter and sort the mock incidents
  const filteredData = useMemo(() => {
    let data = [...mockIncidents];

    // Apply Search
    if (searchTerm) {
      const lowerSearch = searchTerm.toLowerCase();
      data = data.filter(
        (inc) =>
          inc.id.toLowerCase().includes(lowerSearch) ||
          inc.pipe_name.toLowerCase().includes(lowerSearch) ||
          inc.pipe_id.toLowerCase().includes(lowerSearch)
      );
    }

    // Apply Status Filter
    if (statusFilter !== 'all') {
      data = data.filter((inc) => inc.status === statusFilter);
    }

    // Apply Severity Filter
    if (severityFilter !== 'all') {
      data = data.filter((inc) => inc.severity === severityFilter);
    }

    // Apply Sort
    data.sort((a, b) => {
      let aVal = a[sortField];
      let bVal = b[sortField];

      if (aVal === null) aVal = '';
      if (bVal === null) bVal = '';

      if (aVal < bVal) return sortDirection === 'asc' ? -1 : 1;
      if (aVal > bVal) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });

    return data;
  }, [searchTerm, statusFilter, severityFilter, sortField, sortDirection]);

  const toggleSort = (field: keyof Incident) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc'); // Default to desc when clicking a new column
    }
  };

  const getStatusBadge = (status: string) => {
    const styles: Record<string, string> = {
      active: 'bg-red-50 text-red-600 border-red-200',
      investigating: 'bg-amber-50 text-amber-600 border-amber-200',
      resolved: 'bg-green-50 text-green-600 border-green-200',
    };
    return `px-2.5 py-0.5 rounded-full border text-xs font-semibold capitalize ${styles[status] || ''}`;
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      
      {/* Table Toolbar */}
      <div className="p-4 border-b border-slate-200 flex flex-col sm:flex-row gap-4 justify-between items-center bg-slate-50">
        <div className="relative w-full sm:max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search incident ID or pipe..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
          />
        </div>
        
        <div className="flex gap-3 w-full sm:w-auto">
          <div className="flex items-center gap-2 border border-slate-300 bg-white rounded-lg px-3 py-2">
            <Filter className="w-4 h-4 text-slate-400" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="text-sm bg-transparent border-none focus:outline-none text-slate-700 cursor-pointer"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="investigating">Investigating</option>
              <option value="resolved">Resolved</option>
            </select>
          </div>
          
          <select
            value={severityFilter}
            onChange={(e) => setSeverityFilter(e.target.value)}
            className="text-sm border border-slate-300 bg-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-700 cursor-pointer"
          >
            <option value="all">All Severities</option>
            <option value="critical">Critical</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
          
          <button 
            onClick={() => addToast({ type: 'success', title: 'Export Complete', message: 'Downloading incidents-export.csv' })}
            className="hidden sm:flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            <Download className="w-4 h-4" /> Export CSV
          </button>
        </div>
      </div>

      {/* Responsive Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider cursor-pointer hover:bg-slate-100" onClick={() => toggleSort('id')}>
                <div className="flex items-center gap-1">Incident ID <ArrowUpDown className="w-3 h-3" /></div>
              </th>
              <th className="px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider cursor-pointer hover:bg-slate-100" onClick={() => toggleSort('pipe_name')}>
                <div className="flex items-center gap-1">Pipe / Location <ArrowUpDown className="w-3 h-3" /></div>
              </th>
              <th className="px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider cursor-pointer hover:bg-slate-100" onClick={() => toggleSort('severity')}>
                <div className="flex items-center gap-1">Severity <ArrowUpDown className="w-3 h-3" /></div>
              </th>
              <th className="px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider cursor-pointer hover:bg-slate-100" onClick={() => toggleSort('status')}>
                <div className="flex items-center gap-1">Status <ArrowUpDown className="w-3 h-3" /></div>
              </th>
              <th className="px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider cursor-pointer hover:bg-slate-100" onClick={() => toggleSort('created_at')}>
                <div className="flex items-center gap-1">Detected At <ArrowUpDown className="w-3 h-3" /></div>
              </th>
              <th className="px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">
                Source
              </th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white">
            {filteredData.length === 0 ? (
              <tr>
                <td colSpan={7} className="px-4 py-12 text-center text-slate-500">
                  No incidents match your current filters.
                </td>
              </tr>
            ) : (
              filteredData.map((inc) => (
                <tr key={inc.id} className="hover:bg-slate-50 transition-colors group">
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className="text-sm font-semibold text-slate-800">{inc.id}</span>
                  </td>
                  <td className="px-4 py-3">
                    <p className="text-sm font-medium text-slate-800">{inc.pipe_name}</p>
                    <p className="text-xs text-slate-500">{inc.pipe_id}</p>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className={`px-2 py-0.5 rounded text-xs font-bold uppercase border ${getSeverityColor(inc.severity)}`}>
                      {inc.severity}
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className={getStatusBadge(inc.status)}>{inc.status}</span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-slate-600">
                    {formatDate(inc.created_at)}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-slate-700">
                        {inc.source === 'ml_model' ? 'AI Model' : 'Heuristic'}
                      </span>
                      {inc.leak_probability > 0 && (
                        <span className="text-[10px] text-slate-500">
                          {formatLeakProbability(inc.leak_probability)} confidence
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-right">
                    <button className="text-slate-400 hover:text-sky-600 transition-colors p-1.5 rounded-lg hover:bg-sky-50">
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
}

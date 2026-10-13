// CivicTrack demo data (mock only)
const CivicTrack = {
  statusMap: {
    planned: 'badge-planned',
    in_progress: 'badge-progress',
    reported_complete: 'badge-reported',
    under_verification: 'badge-verification',
    verified_complete: 'badge-verified',
    delayed: 'badge-delayed'
  },

  projects: [
    {
      id: 'PRJ-2026-0847',
      title: 'Ward 12 Road Resurfacing',
      location: 'Ward 12, North District',
      state: 'North District',
      department: 'Public Works',
      status: 'in_progress',
      statusLabel: 'In Progress',
      startDate: '2026-03-10',
      deadline: '2026-12-15',
      lastUpdate: '2026-10-11',
      manager: 'R. Sharma',
      budget: '₹4.20 Cr',
      spent: '₹2.35 Cr',
      progress: 58,
      verified: false,
      summary: 'Resurfacing of 6.4 km of arterial road including drainage-side repairs and lane markings.'
    },
    {
      id: 'PRJ-2026-0912',
      title: 'Solid Waste Transfer Station',
      location: 'Sector 4, East Zone',
      state: 'East Zone',
      department: 'Sanitation',
      status: 'reported_complete',
      statusLabel: 'Reported Complete',
      startDate: '2026-01-20',
      deadline: '2026-09-30',
      lastUpdate: '2026-10-12',
      manager: 'A. Nair',
      budget: '₹7.80 Cr',
      spent: '₹7.60 Cr',
      progress: 100,
      verified: false,
      summary: 'Construction of a covered transfer station with weighbridge and segregation bays.'
    },
    {
      id: 'PRJ-2026-0655',
      title: 'Community Health Centre Expansion',
      location: 'South Block',
      state: 'South Block',
      department: 'Health',
      status: 'verified_complete',
      statusLabel: 'Verified Complete',
      startDate: '2025-11-05',
      deadline: '2026-08-31',
      lastUpdate: '2026-10-05',
      manager: 'Dr. P. Menon',
      budget: '₹12.50 Cr',
      spent: '₹12.10 Cr',
      progress: 100,
      verified: true,
      summary: 'Addition of a 30-bed ward, diagnostic lab and outpatient wing to the existing health centre.'
    },
    {
      id: 'PRJ-2026-0733',
      title: 'Drainage Network Cleaning Drive',
      location: 'North District',
      state: 'North District',
      department: 'Sanitation',
      status: 'verified_complete',
      statusLabel: 'Verified Complete',
      startDate: '2026-02-01',
      deadline: '2026-06-30',
      lastUpdate: '2026-09-28',
      manager: 'S. Iyer',
      budget: '₹1.10 Cr',
      spent: '₹1.04 Cr',
      progress: 100,
      verified: true,
      summary: 'Desilting and cleaning of 22 km of storm drains ahead of the monsoon season.'
    },
    {
      id: 'PRJ-2026-0991',
      title: 'Main Market Water Pipeline Replacement',
      location: 'West Ward',
      state: 'West Ward',
      department: 'Water Supply',
      status: 'delayed',
      statusLabel: 'Delayed',
      startDate: '2026-02-15',
      deadline: '2026-08-15',
      lastUpdate: '2026-10-02',
      manager: 'K. Reddy',
      budget: '₹5.60 Cr',
      spent: '₹3.90 Cr',
      progress: 45,
      verified: false,
      summary: 'Replacement of ageing cast-iron mains with HDPE pipes. Work paused due to material supply delays.'
    },
    {
      id: 'PRJ-2026-1024',
      title: 'Government School Library Block',
      location: 'East Zone',
      state: 'East Zone',
      department: 'Education',
      status: 'under_verification',
      statusLabel: 'Under Verification',
      startDate: '2026-01-12',
      deadline: '2026-09-15',
      lastUpdate: '2026-10-08',
      manager: 'M. Fernandes',
      budget: '₹2.30 Cr',
      spent: '₹2.25 Cr',
      progress: 100,
      verified: false,
      summary: 'New two-storey library and computer lab block. Completion evidence is under independent review.'
    },
    {
      id: 'PRJ-2026-1102',
      title: 'Anganwadi Centre Renovation',
      location: 'South Block',
      state: 'South Block',
      department: 'Education',
      status: 'in_progress',
      statusLabel: 'In Progress',
      startDate: '2026-05-04',
      deadline: '2027-01-20',
      lastUpdate: '2026-10-09',
      manager: 'L. Das',
      budget: '₹0.85 Cr',
      spent: '₹0.40 Cr',
      progress: 47,
      verified: false,
      summary: 'Renovation of 14 anganwadi centres including sanitation, flooring and child-safe furniture.'
    },
    {
      id: 'PRJ-2026-1150',
      title: 'Solar Streetlight Installation',
      location: 'West Ward',
      state: 'West Ward',
      department: 'Public Works',
      status: 'planned',
      statusLabel: 'Planned',
      startDate: '2026-11-15',
      deadline: '2027-03-31',
      lastUpdate: '2026-10-01',
      manager: 'T. Banerjee',
      budget: '₹3.00 Cr',
      spent: '₹0',
      progress: 0,
      verified: false,
      summary: 'Installation of 800 solar-powered streetlights along ward roads and school approaches.'
    }
  ],

  getProject(id) {
    return this.projects.find(p => p.id === id);
  },

  getStats() {
    const p = this.projects;
    return {
      total: p.length,
      ongoing: p.filter(x => x.status === 'in_progress').length,
      delayed: p.filter(x => x.status === 'delayed').length,
      verified: p.filter(x => x.status === 'verified_complete').length
    };
  }
};

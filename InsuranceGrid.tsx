import React from 'react';

const insurers = [
  "Aetna", "Allied Benefit System-Aetna", "Anthem Blue Shield", "Christian Brothers Services",
  "Cigna and Evernorth", "Health Scope-Aetna", "Horizon Blue Cross and Blue Shield",
  "Magellan", "Meritain Health", "Nippon", "Optum", "Oscar Health", "Oxford",
  "Trustmark Health Benefits-Aetna", "Trustmark Health Benefits-Cigna",
  "Trustmark Small Business-Aetna", "UnitedHealthcare UHC | UBH"
];

const InsuranceGrid: React.FC = () => {
  return (
    <div className="mb-12">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {insurers.map((plan, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-800 text-sm font-bold text-slate-600 dark:text-slate-300 shadow-sm"
          >
            {plan}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsuranceGrid;
import React from 'react';

const IconBox = ({ Icon, color, label }) => {
  return (
    <div className="m-1 sm:m-2 rounded-xl overflow-hidden flex flex-col justify-center items-center p-3 sm:p-4 min-w-[80px] sm:min-w-[100px] border border-white/[0.06] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent-primary)]/30 hover:shadow-lg hover:shadow-[var(--accent-primary)]/10 group"
      style={{ background: 'var(--bg-card)' }}
    >
      <Icon
        className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl transition-all duration-300 group-hover:text-[var(--accent-primary)] group-hover:scale-110 cursor-pointer ${color}`}
      />
      {label && <p className="mt-1.5 sm:mt-2 text-center text-[var(--text-muted)] text-xs sm:text-sm group-hover:text-[var(--text-secondary)] transition-colors">{label}</p>}
    </div>
  );
};

export default IconBox;

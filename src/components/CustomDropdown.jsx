import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';

export default function CustomDropdown({
  value,
  onChange,
  options = [],
  placeholder = 'Select option',
  icon: Icon,
  className = ''
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Find label for current value
  const selectedOption = options.find((opt) => 
    typeof opt === 'object' ? opt.value === value : opt === value
  );
  
  const displayLabel = selectedOption 
    ? (typeof selectedOption === 'object' ? selectedOption.label : selectedOption)
    : placeholder;

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`w-full flex items-center justify-between bg-slate-50 hover:bg-slate-100/80 border ${
          isOpen ? 'border-amber-500 ring-2 ring-amber-400/30 bg-white' : 'border-slate-300'
        } rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-900 transition-all text-left shadow-sm focus:outline-none`}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <div className="flex items-center space-x-2.5 truncate">
          {Icon && <Icon className="w-4 h-4 text-amber-500 shrink-0" />}
          <span className="truncate">{displayLabel}</span>
        </div>
        <ChevronDown 
          className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ml-2 ${
            isOpen ? 'rotate-180 text-amber-600' : ''
          }`} 
        />
      </button>

      {/* Downward Dropdown Menu */}
      {isOpen && (
        <div 
          className="absolute top-full left-0 right-0 mt-1.5 z-50 bg-white border border-slate-200 rounded-xl shadow-2xl max-h-56 overflow-y-auto divide-y divide-slate-100"
          style={{ scrollbarWidth: 'thin' }}
          role="listbox"
        >
          {options.map((opt, idx) => {
            const optVal = typeof opt === 'object' ? opt.value : opt;
            const optLabel = typeof opt === 'object' ? opt.label : opt;
            const optSub = typeof opt === 'object' ? opt.sublabel : null;
            const isSelected = optVal === value;

            return (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  onChange(optVal);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 text-left text-xs sm:text-sm font-medium transition-colors ${
                  isSelected 
                    ? 'bg-amber-500 text-slate-950 font-bold' 
                    : 'text-slate-700 hover:bg-amber-50 hover:text-amber-950'
                }`}
                role="option"
                aria-selected={isSelected}
              >
                <div className="truncate pr-2">
                  <div className="truncate">{optLabel}</div>
                  {optSub && (
                    <div className={`text-[11px] truncate ${isSelected ? 'text-slate-900' : 'text-slate-500'}`}>
                      {optSub}
                    </div>
                  )}
                </div>
                {isSelected && <Check className="w-4 h-4 shrink-0 text-slate-950" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}


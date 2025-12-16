import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import { Currency } from '@/types/exchange';
import { motion, AnimatePresence } from 'framer-motion';

interface CurrencyDropdownProps {
  currencies: Currency[];
  selected: Currency;
  onSelect: (currency: Currency) => void;
}

export function CurrencyDropdown({ currencies, selected, onSelect }: CurrencyDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filteredCurrencies = currencies.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.code.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        setSearch('');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (currency: Currency) => {
    onSelect(currency);
    setIsOpen(false);
    setSearch('');
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 bg-card rounded-lg border border-border/50 hover:bg-secondary transition-colors"
      >
        <span className="text-sm font-medium text-foreground flex flex-row items-center"><img src={selected.symbol} className="w-4 h-4 flex items-center justify-center rounded-full mr-1"/> {selected.code}</span>
        <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="px-[12px] py-[16px] absolute right-0 top-full mt-2 w-56 bg-card rounded-xl border border-border shadow-elevated z-50"
          >
            <div className="mb-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#828282]"/>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search"
                  className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-border/50 outline-none focus:border-primary transition-colors"
                  autoFocus
                />
              </div>
            </div>
            <div className="max-h-48 overflow-y-auto">
              {filteredCurrencies.map((currency) => (
                <button
                  key={currency.code}
                  onClick={() => handleSelect(currency)}
                  className={`mb-2 w-full flex rounded-md items-center gap-3 px-3 py-2.5 text-left hover:bg-muted/50 transition-colors ${
                    selected.code === currency.code ? 'bg-muted/70' : ''
                  }`}
                >
                  <img src={currency.symbol} alt='icon' className="w-8 h-8 flex items-center justify-center rounded-full" />

                  <span className="text-sm font-medium text-foreground">{currency.name}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

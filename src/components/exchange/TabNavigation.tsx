import { TabType } from '@/types/exchange';
import { motion } from 'framer-motion';

interface TabNavigationProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

const tabs: { id: TabType; label: string }[] = [
  { id: 'crypto-to-cash', label: 'Crypto to cash' },
  { id: 'cash-to-crypto', label: 'Cash to crypto' },
  { id: 'crypto-to-fiat-less', label: 'Crypto to fiat loan' },
];

export function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  return (
    <div className="flex gap-1 p-1 bg-muted/50 rounded-xl overflow-x-auto justify-between w-full">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`relative flex-shrink-0 px-2 sm:px-3 py-2 text-[11px] sm:text-xs font-medium rounded-lg transition-colors duration-200 whitespace-nowrap ${
            activeTab === tab.id
              ? 'text-primary-foreground'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          {activeTab === tab.id && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-primary rounded-lg"
              initial={false}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            />
          )}
          <span className="relative z-10">{tab.label}</span>
        </button>
      ))}
    </div>
  );
}

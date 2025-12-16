import { PaymentMethod } from '@/types/exchange';
import { motion } from 'framer-motion';
import { ChevronDown, Wallet } from 'lucide-react';
import { useState } from 'react';
import { metamaskIcon, RainbowIcon, walletConnectIcon, walletIcon} from '../../constants/constants.js'


interface PaymentMethodSelectorProps {
  selected?: PaymentMethod;
  onSelect: (method: PaymentMethod) => void;
}

const methods: { id: PaymentMethod; name: string; icon: React.ReactNode; color: string }[] = [
  {
    id: 'metamask',
    name: 'Metamask',
    icon: <div className="w-5 h-5 rounded flex items-center justify-center"><img src={metamaskIcon} className="w-5 h-5  text-white" /></div>,
    color: '#F6851B',
  },
  {
    id: 'rainbow',
    name: 'Rainbow',
    icon: <div className="w-5 h-5 rounded flex items-center justify-center"><img src={RainbowIcon} className="w-5 h-5  text-white" /></div>,
    color: '#8B5CF6',
  },
  {
    id: 'walletconnect',
    name: 'WalletConnect',
    icon: <div className="w-5 h-5 rounded  flex items-center justify-center"><img src={walletConnectIcon} className="w-5 h-5  text-white" /></div>,
    color: '#3B99FC',
  },
  {
    id: 'other',
    name: 'Other Crypto Wallets (Binance, Conibase, Bybit etc)',
    icon: <div className="w-5 h-5 rounded  flex items-center justify-center"><img src={walletIcon} className="w-5 h-5  text-white" /></div>,
    color: '#6B7280',
  },
];

export function PaymentMethodSelector({ selected, onSelect }: PaymentMethodSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const selectedMethod = methods.find((m) => m.id === selected);

  return (
    <div className="space-y-2">
      <label className="text-xs text-muted-foreground font-medium">Pay from</label>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-sm truncate flex items-center justify-between p-4 bg-muted/30 rounded-xl border border-border/50 hover:bg-muted/50 transition-colors"
      >
        <span className={selectedMethod ? 'text-foreground font-medium text-sm truncate' : 'text-muted-foreground text-sm truncate'}>
          {selectedMethod ? (
            <div className="flex items-center gap-3 ">
              {selectedMethod.icon}
              <span className="text-sm  truncate">{selectedMethod.name}</span>
            </div>
          ) : (
            'Select an option'
          )}
        </span>
        <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card border border-border rounded-xl shadow-lg overflow-hidden z-50"
        >
          {methods.map((method) => (
<button
  key={method.id}
  onClick={() => {
    onSelect(method.id);
    setIsOpen(false);
  }}
  className="w-full flex items-center gap-3 p-4 hover:bg-muted transition-colors text-left"
>
  <div className="flex-shrink-0">{method.icon}</div>  
  <span className="flex-1 text-sm font-medium text-foreground truncate">
    {method.name}
  </span>
</button>
          ))}
        </motion.div>
      )}
    </div>
  );
}

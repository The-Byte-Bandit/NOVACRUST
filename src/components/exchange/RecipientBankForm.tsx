import { Bank, RecipientDetails } from '@/types/exchange';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronDown, Check } from 'lucide-react';
import { useState } from 'react';

interface RecipientBankFormProps {
  banks: Bank[];
  data: RecipientDetails;
  onChange: (data: RecipientDetails) => void;
  onBack: () => void;
  onNext: () => void;
}

export function RecipientBankForm({ banks, data, onChange, onBack, onNext }: RecipientBankFormProps) {
  const [showBankList, setShowBankList] = useState(false);
  const [accountVerified, setAccountVerified] = useState(!!data.accountName);

  const selectedBank = banks.find((b) => b.id === data.bank);

  const handleAccountChange = (value: string) => {
    onChange({ ...data, accountNumber: value, accountName: undefined });
    setAccountVerified(false);
    
    // Simulate account verification
    if (value.length >= 10) {
      setTimeout(() => {
        onChange({ ...data, accountNumber: value, accountName: 'ODUTUGA GIDIKE' });
        setAccountVerified(true);
      }, 800);
    }
  };

  const isValid = data.bank && data.accountNumber && data.accountNumber.length >= 10 && accountVerified;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="flex items-center gap-3">
        <button
          onClick={onBack}
          className="p-2 hover:bg-muted rounded-lg transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-foreground" />
        </button>
        <h2 className="text-lg font-semibold text-foreground">Recipient details</h2>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-xs text-muted-foreground font-medium">Bank</label>
          <button
            onClick={() => setShowBankList(!showBankList)}
            className="w-full flex items-center justify-between p-4 bg-muted/30 rounded-xl border border-border/50 hover:bg-muted/50 transition-colors"
          >
            <span className={selectedBank ? 'text-foreground font-medium' : 'text-muted-foreground'}>
              {selectedBank?.name || 'Select an option'}
            </span>
            <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${showBankList ? 'rotate-180' : ''}`} />
          </button>
          
          {showBankList && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-card border border-border rounded-xl shadow-lg overflow-hidden max-h-48 overflow-y-auto z-50"
            >
              {banks.map((bank) => (
                <button
                  key={bank.id}
                  onClick={() => {
                    onChange({ ...data, bank: bank.id });
                    setShowBankList(false);
                  }}
                  className={`w-full flex items-center justify-between p-4 hover:bg-muted transition-colors text-left ${
                    data.bank === bank.id ? 'bg-primary/5' : ''
                  }`}
                >
                  <span className="text-sm font-medium text-foreground">{bank.name}</span>
                  {data.bank === bank.id && <Check className="w-4 h-4 text-primary" />}
                </button>
              ))}
            </motion.div>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-xs text-muted-foreground font-medium">Account number</label>
          <input
            type="text"
            inputMode="numeric"
            placeholder="Enter your account number"
            value={data.accountNumber || ''}
            onChange={(e) => handleAccountChange(e.target.value.replace(/\D/g, '').slice(0, 10))}
            className="input-field"
          />
        </div>

        {data.accountName && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-primary text-primary-foreground rounded-xl"
          >
            <p className="text-xs text-primary-foreground/70 mb-1">Account number</p>
            <p className="font-semibold">{data.accountName}</p>
          </motion.div>
        )}
      </div>

      <button
        onClick={onNext}
        disabled={!isValid}
        className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </motion.div>
  );
}

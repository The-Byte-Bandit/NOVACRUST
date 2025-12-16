import { RecipientDetails } from '@/types/exchange';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface RecipientContactFormProps {
  data: RecipientDetails;
  onChange: (data: RecipientDetails) => void;
  onBack: () => void;
  onNext: () => void;
}

const phoneCodes = [
  { code: '+234', country: 'NG', flag: '🇳🇬' },
  { code: '+1', country: 'US', flag: '🇺🇸' },
  { code: '+44', country: 'UK', flag: '🇬🇧' },
  { code: '+91', country: 'IN', flag: '🇮🇳' },
];

export function RecipientContactForm({ data, onChange, onBack, onNext }: RecipientContactFormProps) {
  const [showCodes, setShowCodes] = useState(false);
  const selectedCode = phoneCodes.find((p) => p.code === data.phoneCode) || phoneCodes[0];

  const isValid = data.email && data.email.includes('@') && data.phoneNumber && data.phoneNumber.length >= 10;

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
          <label className="text-xs text-muted-foreground font-medium">Recipient email</label>
          <input
            type="email"
            placeholder="Enter recipient's email"
            value={data.email || ''}
            onChange={(e) => onChange({ ...data, email: e.target.value })}
            className="input-field"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs text-muted-foreground font-medium">Recipient phone number</label>
          <div className="flex gap-2">
            <div className="relative">
              <button
                onClick={() => setShowCodes(!showCodes)}
                className="flex items-center gap-2 px-3 py-3.5 bg-muted/50 border border-border rounded-xl hover:bg-muted transition-colors"
              >
                <span>{selectedCode.flag}</span>
                <span className="text-sm font-medium text-foreground">{selectedCode.code}</span>
                <ChevronDown className="w-4 h-4 text-muted-foreground" />
              </button>
              
              {showCodes && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-full left-0 mt-1 bg-card border border-border rounded-xl shadow-lg overflow-hidden z-50"
                >
                  {phoneCodes.map((code) => (
                    <button
                      key={code.code}
                      onClick={() => {
                        onChange({ ...data, phoneCode: code.code });
                        setShowCodes(false);
                      }}
                      className="w-full flex items-center gap-2 px-4 py-3 hover:bg-muted transition-colors text-left"
                    >
                      <span>{code.flag}</span>
                      <span className="text-sm font-medium text-foreground">{code.code}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </div>
            
            <input
              type="tel"
              inputMode="numeric"
              placeholder="000 - 000 - 00000"
              value={data.phoneNumber || ''}
              onChange={(e) => onChange({ ...data, phoneNumber: e.target.value.replace(/\D/g, '').slice(0, 11) })}
              className="input-field flex-1"
            />
          </div>
        </div>
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

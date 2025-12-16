import { Currency } from '@/types/exchange';
import { CurrencyDropdown } from './CurrencyDropdown';

interface AmountInputProps {
  label: string;
  value: string;
  onChange?: (value: string) => void;
  currency: Currency;
  currencies: Currency[];
  onCurrencyChange: (currency: Currency) => void;
  readOnly?: boolean;
}

export function AmountInput({
  label,
  value,
  onChange,
  currency,
  currencies,
  onCurrencyChange,
  readOnly = false,
}: AmountInputProps) {
  return (
    <div className="space-y-2">
      <label className="text-xs text-muted-foreground font-medium">{label}</label>
      <div className="flex items-center gap-3 p-3 sm:p-4 bg-muted/30 rounded-xl border border-border/50">
        <input
          type="text"
          inputMode="decimal"
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          readOnly={readOnly}
          className="flex-1 min-w-0 bg-transparent text-xl sm:text-2xl font-semibold text-foreground outline-none placeholder:text-muted-foreground"
          placeholder="0.00"
        />
        <CurrencyDropdown
          currencies={currencies}
          selected={currency}
          onSelect={onCurrencyChange}
        />
      </div>
    </div>
  );
}

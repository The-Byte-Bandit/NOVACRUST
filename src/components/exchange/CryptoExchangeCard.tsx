import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { TabNavigation } from './TabNavigation';
import { AmountInput } from './AmountInput';
import { PaymentMethodSelector } from './PaymentMethodSelector';
import { RecipientBankForm } from './RecipientBankForm';
import { RecipientContactForm } from './RecipientContactForm';
import { SendCryptoScreen } from './SendCryptoScreen';
import { SuccessScreen } from './SuccessScreen';
import { ComingSoonScreen } from './ComingSoonScreen';
import {ethIcon, celoIcon, tonIcon, bnbIcon, gbp, ngn, usa,} from '../../constants/constants.js'

import type { 
  TabType, 
  Currency, 
  RecipientDetails, 
  TransactionData, 
  Step, 
  Bank 
} from '@/types/exchange';

const cryptoCurrencies: Currency[] = [
    { code: 'ETH', name: 'Ethereum', symbol: ethIcon },
  { code: 'USDT-CELO', name: 'USDT on Celo', symbol: celoIcon },
  { code: 'USDT-TON', name: 'USDT on TON', symbol: tonIcon },
  { code: 'USDT-BNB', name: 'USDT on BNB', symbol: bnbIcon },
];

const fiatCurrencies: Currency[] = [
  { code: 'NGN', name: 'Nigerian Naira', symbol: ngn },
  { code: 'USD', name: 'US Dollar', symbol: usa },
  { code: 'GBP', name: 'British Pound', symbol: gbp },
];

const banks: Bank[] = [
  { id: 'gtb', name: 'Guaranty Trust Bank' },
  { id: 'access', name: 'Access Bank' },
  { id: 'zenith', name: 'Zenith Bank' },
  { id: 'first', name: 'First Bank' },
  { id: 'uba', name: 'United Bank for Africa' },
];

export function CryptoExchangeCard() {
  const [activeTab, setActiveTab] = useState<TabType>('crypto-to-cash');
  const [step, setStep] = useState<Step>('exchange');
  
const [transaction, setTransaction] = useState<TransactionData>({
  amountToSend: '1.00',
  amountToReceive: '1.00',
  sendCurrency: cryptoCurrencies[1], 
  receiveCurrency: fiatCurrencies[0],
});

  const [recipient, setRecipient] = useState<RecipientDetails>({
    phoneCode: '+234',
  });

  const handleConvert = () => {
    if (!transaction.paymentMethod) return;
    setStep('recipient-bank');
  };

  const handleSuccess = () => {
    setStep('success');
  };

const resetFlow = () => {
  setStep('exchange');
  setRecipient({ phoneCode: '+234' });

  setTransaction({
    amountToSend: '1.00',
    amountToReceive: '1.00',
    sendCurrency: cryptoCurrencies[1],
    receiveCurrency: fiatCurrencies[0], 
    paymentMethod: undefined,
  });
};

  const renderContent = () => {
    if (activeTab === 'cash-to-crypto') {
      return (
        <ComingSoonScreen 
          title="Cash to Crypto"
          description="Enter your email and we'll let you know the moment it's live."
        />
      );
    }

    if (activeTab === 'crypto-to-fiat-less') {
      return (
        <ComingSoonScreen 
          title="Crypto to Fiat Loan"
          description="Enter your email and we'll let you know the moment it's live."
        />
      );
    }

    if (step === 'exchange') {
      return (
        <motion.div
          key="exchange"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="space-y-5 sm:space-y-6"
        >
          <div className="space-y-3 sm:space-y-4">
<AmountInput
  label="You pay"
  value={transaction.amountToSend}
  onChange={(value) => setTransaction((prev) => ({ ...prev, amountToSend: value }))}
  currency={transaction.sendCurrency}
  currencies={cryptoCurrencies} 
  onCurrencyChange={(currency) => setTransaction((prev) => ({ ...prev, sendCurrency: currency }))}
/>

<AmountInput
  label="You receive"
  value={transaction.amountToReceive}
  onChange={(value) => setTransaction((prev) => ({ ...prev, amountToReceive: value }))}
  currency={transaction.receiveCurrency}
  currencies={fiatCurrencies} 
  onCurrencyChange={(currency) => setTransaction((prev) => ({ ...prev, receiveCurrency: currency }))}
/>
          </div>

          <PaymentMethodSelector
            selected={transaction.paymentMethod}
            onSelect={(method) => setTransaction((prev) => ({ ...prev, paymentMethod: method }))}
          />

          <div className="space-y-2">
            <label className="text-xs text-muted-foreground font-medium">Pay to</label>
            <button className="w-full flex items-center justify-between p-3 sm:p-4 bg-muted/30 rounded-xl border border-border/50 hover:bg-muted/50 transition-colors">
              <span className="text-muted-foreground text-sm">Select an option</span>
              <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          <button
            onClick={handleConvert}
            disabled={!transaction.paymentMethod}
            className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Convert now
          </button>
        </motion.div>
      );
    }

    if (step === 'recipient-bank') {
      return (
        <RecipientBankForm
          key="recipient-bank"
          banks={banks}
          data={recipient}
          onChange={setRecipient}
          onBack={() => setStep('exchange')}
          onNext={() => setStep('recipient-contact')}
        />
      );
    }

    if (step === 'recipient-contact') {
      return (
        <RecipientContactForm
          key="recipient-contact"
          data={recipient}
          onChange={setRecipient}
          onBack={() => setStep('recipient-bank')}
          onNext={() => setStep('send-crypto')}
        />
      );
    }

    if (step === 'send-crypto') {
      return (
        <SendCryptoScreen
          key="send-crypto"
          data={transaction}
          onBack={() => setStep('recipient-contact')}
          onConfirm={handleSuccess}
        />
      );
    }

    if (step === 'success') {
      return <SuccessScreen key="success" onClose={resetFlow} />;
    }

    return null;
  };

  return (
    // <div className="card-elevated flex-1 w-full max-w-sm sm:max-w-md mx-auto shadow-xl">
    //   <div className="p-4 sm:p-6">
    //     <div className="mb-5 sm:mb-6">
    //       <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
    //     </div>
    //     <AnimatePresence mode="wait">
    //       {renderContent()}
    //     </AnimatePresence>
    //   </div>
    // </div>
    <div className="card-elevated w-full max-w-xs sm:max-w-md mx-auto shadow-xl">
  <div className="p-4 sm:p-6">
    <div className="mb-5 sm:mb-6">
      <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
    <AnimatePresence mode="wait">
      {renderContent()}
    </AnimatePresence>
  </div>
</div>
  );
}

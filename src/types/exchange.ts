export type TabType = 'crypto-to-cash' | 'cash-to-crypto' | 'crypto-to-fiat-less';

export type PaymentMethod = 'metamask' | 'rainbow' | 'walletconnect' | 'other';

export interface Currency {
  code: string;
  name: string;
  symbol: string;
  icon?: string;
}

export interface Bank {
  id: string;
  name: string;
}

export interface RecipientDetails {
  bank?: string;
  accountNumber?: string;
  accountName?: string;
  email?: string;
  phoneCode?: string;
  phoneNumber?: string;
}

export interface TransactionData {
  amountToSend: string;
  amountToReceive: string;
  sendCurrency: Currency;
  receiveCurrency: Currency;
  paymentMethod?: PaymentMethod;
  recipient?: RecipientDetails;
  walletAddress?: string;
  transactionId?: string;
}

export type Step = 
  | 'exchange' 
  | 'select-currency' 
  | 'payment-method' 
  | 'recipient-bank' 
  | 'recipient-contact' 
  | 'send-crypto' 
  | 'processing' 
  | 'success';

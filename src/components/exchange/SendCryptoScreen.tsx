import { TransactionData } from '@/types/exchange';
import { motion } from 'framer-motion';
import { ArrowLeft, Copy, ExternalLink, Info } from 'lucide-react';
import { useState } from 'react';
import { toast } from '@/hooks/use-toast';

interface SendCryptoScreenProps {
  data: TransactionData;
  onBack: () => void;
  onConfirm: () => void;
}

export function SendCryptoScreen({ data, onBack, onConfirm }: SendCryptoScreenProps) {
  const [copied, setCopied] = useState(false);
  const walletAddress = 'ALtVAVjsm1.6T9HHglMid';
  const fullAddress = 'ALtVAVjsm1.6T9HHglMid0x1234...5678';
  
  const copyToClipboard = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    toast({ title: 'Address copied to clipboard' });
    setTimeout(() => setCopied(false), 2000);
  };

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
        <div className="flex-1 flex items-center justify-center gap-2">
          <span className="font-semibold text-foreground">Send {data.sendCurrency.code} to the address below</span>
        </div>
      </div>

      <div className="flex items-center justify-between p-4 bg-muted/30 rounded-xl border border-border/50">
        <span className="text-sm text-foreground font-mono">{walletAddress}</span>
        <button
          onClick={() => copyToClipboard(fullAddress)}
          className="p-2 hover:bg-muted rounded-lg transition-colors"
        >
          <Copy className={`w-4 h-4 ${copied ? 'text-success' : 'text-muted-foreground'}`} />
        </button>
      </div>

      <div className="bg-card rounded-2xl border border-border/50 overflow-hidden">
        <div className="p-4 space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Amount to send</span>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-foreground">100 {data.sendCurrency.code}</span>
              <button className="p-1 hover:bg-muted rounded transition-colors">
                <Copy className="w-3.5 h-3.5 text-muted-foreground" />
              </button>
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Network</span>
            <span className="font-medium text-foreground">{data.sendCurrency.code}</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Wallet</span>
            <span className="font-medium text-foreground">0 fee</span>
          </div>
        </div>

        <div className="p-4 bg-muted/20 border-t border-border/50">
          <div className="flex gap-2 text-xs text-muted-foreground">
            <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <p>
              Only send ETH to this address. Use the address on the right 
              after you've sent your ETH from your Wallet Dapp.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between p-4 bg-muted/30 rounded-xl">
        <span className="text-sm text-muted-foreground">Transaction ID</span>
        <div className="flex items-center gap-2">
          <span className="text-sm font-mono text-foreground">9OC123456791</span>
          <button className="p-1 hover:bg-muted rounded transition-colors">
            <Copy className="w-3.5 h-3.5 text-muted-foreground" />
          </button>
        </div>
      </div>

      <button className="text-sm text-muted-foreground hover:text-foreground transition-colors text-center w-full">
        Go back to home
      </button>

      <button
        onClick={onConfirm}
        className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        I have sent it
      </button>
    </motion.div>
  );
}

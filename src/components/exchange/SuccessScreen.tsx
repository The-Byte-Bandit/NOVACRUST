import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface SuccessScreenProps {
  onClose: () => void;
}

export function SuccessScreen({ onClose }: SuccessScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center py-12 space-y-6"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
        className="w-20 h-20 rounded-full bg-success/10 flex items-center justify-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
          className="w-14 h-14 rounded-full bg-success flex items-center justify-center"
        >
          <Check className="w-8 h-8 text-success-foreground" strokeWidth={3} />
        </motion.div>
      </motion.div>

      <div className="text-center space-y-2">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-xl font-semibold text-foreground"
        >
          Your transaction is processing.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-sm text-muted-foreground"
        >
          The recipient will receive it shortly.
        </motion.p>
      </div>

      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        onClick={onClose}
        className="btn-primary mt-4"
      >
        Done
      </motion.button>
    </motion.div>
  );
}

import { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

interface ComingSoonScreenProps {
  title: string;
  description: string;
}

export function ComingSoonScreen({ title, description }: ComingSoonScreenProps) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Thanks! We'll notify you when it's live.");
      setEmail('');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-6 py-4"
    >
      <div className="text-center space-y-3">
        <h2 className="text-2xl md:text-3xl font-bold text-primary">Coming Soon!</h2>
        <p className="text-muted-foreground">
          {title} is almost here.
        </p>
        <p className="text-muted-foreground">
          {description}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-primary">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="input-field"
            required
          />
        </div>

        <button type="submit" className="btn-primary">
          Update me
        </button>
      </form>
    </motion.div>
  );
}

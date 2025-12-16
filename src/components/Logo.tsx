import { Wallet } from 'lucide-react';
import {logo} from '../constants/constants.js'

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-lg flex items-center justify-center">
        <img src={logo} alt='logo' loading='lazy' className="w-5 h-5 " />
      </div>
      <span className="text-lg font-bold text-foreground tracking-tight">NOVACRUST</span>
    </div>
  );
}

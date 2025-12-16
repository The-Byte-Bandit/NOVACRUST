import { CryptoExchangeCard } from '@/components/exchange/CryptoExchangeCard';
import { Logo } from '@/components/Logo';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="container max-w-6xl mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
          <Logo />
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">How it works</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Rates</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Support</a>
          </nav>
          <div className="flex items-center gap-2">
            <button className="hidden sm:block px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors">
              Connect Wallet
            </button>
            <button 
              className="md:hidden p-2 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border/50 bg-background">
            <nav className="flex flex-col p-4 gap-3">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2">How it works</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2">Rates</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2">Support</a>
              <button className="sm:hidden w-full px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors mt-2">
                Connect Wallet
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="container max-w-6xl mx-auto px-4 py-6 sm:py-8 md:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Hero text */}
          <div className="space-y-4 sm:space-y-6 text-center lg:text-left order-2 lg:order-1">
            <div className="inline-block px-3 py-1 bg-success/10 text-success text-xs font-medium rounded-full">
              Fast & Secure Transactions
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Convert crypto to cash{' '}
              <span className="text-primary">instantly</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0">
              Send crypto payments to bank accounts worldwide. Low fees, fast transfers, and the best exchange rates.
            </p>
            <div className="flex flex-wrap gap-4 sm:gap-6 justify-center lg:justify-start text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-success" />
                <span>No hidden fees</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-success" />
                <span>24/7 support</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-success" />
                <span>Bank-grade security</span>
              </div>
            </div>
          </div>

          {/* Right side - Exchange card */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <CryptoExchangeCard />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 mt-8 sm:mt-16">
        <div className="container max-w-6xl mx-auto px-4 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Logo />
            <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-right">
              © 2025 Novacrust. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;



// import { CryptoExchangeCard } from '@/components/exchange/CryptoExchangeCard';
// import { Logo } from '@/components/Logo';
// import { Menu, X } from 'lucide-react';
// import { useState } from 'react';

// const Index = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <div className="min-h-screen bg-background flex flex-col">
//       {/* Header */}
//       <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
//         <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
//           <Logo />
          
//           <nav className="hidden md:flex items-center gap-8">
//             <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
//               How it works
//             </a>
//             <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
//               Rates
//             </a>
//             <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
//               Support
//             </a>
//           </nav>

//           <div className="flex items-center gap-3">
//             <button className="hidden sm:block px-5 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-xl hover:bg-primary/90 transition-colors shadow-sm">
//               Connect Wallet
//             </button>
            
//             <button
//               className="md:hidden p-2 -m-2 text-foreground"
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               aria-label="Toggle menu"
//             >
//               {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {mobileMenuOpen && (
//           <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur">
//             <nav className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-4">
//               <a href="#" className="text-base font-medium text-foreground py-2">How it works</a>
//               <a href="#" className="text-base font-medium text-foreground py-2">Rates</a>
//               <a href="#" className="text-base font-medium text-foreground py-2">Support</a>
//               <button className="w-full mt-4 px-5 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-colors">
//                 Connect Wallet
//               </button>
//             </nav>
//           </div>
//         )}
//       </header>

//       {/* Main Content - Hero Section */}
//       <main className="flex-1 container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-20 lg:py-28">
//         <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-center">
//           {/* Left: Hero Text */}
//           <div className="text-center lg:text-left space-y-6 sm:space-y-8 order-2 lg:order-1">
//             <div className="inline-flex items-center gap-2 px-4 py-2 bg-success/10 text-success text-xs sm:text-sm font-semibold rounded-full">
//               <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
//               Fast & Secure Transactions
//             </div>

//             <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
//               Convert crypto to cash{' '}
//               <span className="text-primary">instantly</span>
//             </h1>

//             <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
//               Send crypto payments to bank accounts worldwide. Low fees, fast transfers, and the best exchange rates.
//             </p>

//             {/* Features */}
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-4">
//               <div className="flex items-center gap-3 justify-center lg:justify-start">
//                 <div className="w-3 h-3 rounded-full bg-success flex-shrink-0" />
//                 <span className="text-sm sm:text-base text-muted-foreground font-medium">No hidden fees</span>
//               </div>
//               <div className="flex items-center gap-3 justify-center lg:justify-start">
//                 <div className="w-3 h-3 rounded-full bg-success flex-shrink-0" />
//                 <span className="text-sm sm:text-base text-muted-foreground font-medium">24/7 support</span>
//               </div>
//               <div className="flex items-center gap-3 justify-center lg:justify-start">
//                 <div className="w-3 h-3 rounded-full bg-success flex-shrink-0" />
//                 <span className="text-sm sm:text-base text-muted-foreground font-medium">Bank-grade security</span>
//               </div>
//             </div>
//           </div>

//           {/* Right: Exchange Card */}
//           {/* <div className="flex justify-center order-1 lg:order-2">
//             <div className="w-full max-w-md lg:max-w-lg">
//               <CryptoExchangeCard />
//             </div>
//           </div> */}
//           {/* Right side - Exchange card */}
// <div className="flex justify-center lg:justify-end order-1 lg:order-2">
//   <div className="w-full max-w-sm sm:max-w-md">  {/* ← Add this wrapper */}
//     <CryptoExchangeCard />
//   </div>
// </div>
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="border-t border-border/50 mt-auto">
//         <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//           <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
//             <Logo />
//             <p className="text-sm text-muted-foreground">
//               © 2025 Novacrust. All rights reserved.
//             </p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Index;
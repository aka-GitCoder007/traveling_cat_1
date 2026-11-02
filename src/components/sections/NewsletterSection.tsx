import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle2, Sparkles, ShieldCheck } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '../common/Button';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error('Please enter a valid email address.');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      const existing = JSON.parse(localStorage.getItem('wanderly_subscribers') || '[]');

      if (existing.includes(email.toLowerCase().trim())) {
        setIsLoading(false);
        toast.info('You are already subscribed to the Wanderly Dispatch.');
        return;
      }

      existing.push(email.toLowerCase().trim());
      localStorage.setItem('wanderly_subscribers', JSON.stringify(existing));

      setIsLoading(false);
      setIsSuccess(true);
      toast.success('Thank you! Welcome to the Wanderly Dispatch.');
      setEmail('');
    }, 500);
  };

  return (
    <section className="py-20 sm:py-24 bg-wanderly-dark border-t border-white/10 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-wanderly-gold/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-wanderly-gold/10 text-wanderly-gold border border-wanderly-gold/30 text-xs font-semibold tracking-widest uppercase mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>The Wanderly Dispatch</span>
        </div>

        {/* Heading & Subtitle */}
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
          A Little Inspiration for Your Inbox
        </h2>
        <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-xl mx-auto font-light leading-relaxed">
          Get travel inspiration, exclusive ideas, and extraordinary destinations delivered to you.
        </p>

        {/* Subscription Form */}
        <div className="mt-10 max-w-md mx-auto">
          {isSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-6 rounded-2xl glass-dark border border-wanderly-gold/40 flex items-center justify-center gap-3 text-white text-sm"
            >
              <CheckCircle2 className="w-6 h-6 text-wanderly-gold shrink-0" />
              <div className="text-left">
                <span className="font-bold text-white block">You're On The Private List</span>
                <span className="text-xs text-gray-300">Look out for our upcoming seasonal voyage preview.</span>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Mail className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full bg-white/10 border border-white/20 rounded-full pl-11 pr-4 py-3.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-wanderly-gold transition-colors"
                />
              </div>

              <Button
                type="submit"
                variant="gold"
                size="md"
                isLoading={isLoading}
                className="shrink-0"
                icon={<Send className="w-4 h-4" />}
              >
                Subscribe
              </Button>
            </form>
          )}

          <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-gray-400">
            <ShieldCheck className="w-3.5 h-3.5 text-wanderly-gold/80" />
            <span>Zero spam. Unsubscribe at any time with one click.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

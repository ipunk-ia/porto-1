export default function Footer() {
  return (
    <footer className="py-20 px-6 md:px-12 lg:px-24 border-t border-border bg-bg text-text-primary font-body">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="text-center md:text-left">
          <h3 className="font-display text-3xl mb-3 uppercase tracking-widest text-[#1A1A18]">Lumina</h3>
          <a href="mailto:inquiries@lumina.space" className="text-text-secondary hover:text-accent transition-colors duration-300">
            inquiries@lumina.space
          </a>
        </div>
        
        <button className="px-8 py-4 border border-text-primary text-text-primary uppercase tracking-[0.2em] text-sm hover:bg-accent hover:border-accent hover:text-surface transition-all duration-500 ease-[var(--ease-luxury)]">
          Request Catalogue
        </button>
      </div>
      
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-border/50 text-center md:flex justify-between items-center text-sm text-text-secondary tracking-wide">
        <p>&copy; {new Date().getFullYear()} Lumina. All rights reserved.</p>
        <div className="flex gap-8 mt-6 md:mt-0 justify-center">
          <a href="#" className="hover:text-accent transition-colors duration-300">Instagram</a>
          <a href="#" className="hover:text-accent transition-colors duration-300">Pinterest</a>
        </div>
      </div>
    </footer>
  );
}

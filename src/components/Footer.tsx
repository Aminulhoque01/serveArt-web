export default function Footer() {
  return (
    <footer className="border-t border-navy/10 py-10 dark:border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-2 px-5 text-sm text-navy/60 dark:text-white/60 sm:flex-row">
        <p className="font-display text-lg font-extrabold">
          <span className="text-brand">Serve</span> <span className="text-sun">Art</span>
        </p>
        <p>© {new Date().getFullYear()} Serve Art. All rights reserved.</p>
      </div>
    </footer>
  );
}
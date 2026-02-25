import Link from 'next/link';

export default function NavBar() {
    return (
        <nav className="border-b border-border bg-card/80 backdrop-blur-xl sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center font-black text-white shadow-lg shadow-primary/20 group-hover:shadow-primary/40 group-hover:rotate-6 transition-all duration-300">
                        V<span className="text-accent-foreground drop-shadow-sm">C</span>
                    </div>
                    <span className="font-extrabold text-2xl tracking-tight group-hover:text-primary transition-colors text-white">
                        VIANA <span className="text-primary font-black">CLASH</span>
                    </span>
                </Link>
                <div className="flex gap-1 bg-background/50 p-1.5 rounded-xl border border-border/50">
                    <Link href="/" className="px-5 py-2 rounded-lg font-bold text-sm text-foreground hover:bg-card hover:text-white transition-all">
                        Decks
                    </Link>
                    <Link href="/rankings" className="px-5 py-2 rounded-lg font-bold text-sm text-secondary hover:bg-card hover:text-white transition-all">
                        Classificações
                    </Link>
                </div>
            </div>
        </nav>
    );
}

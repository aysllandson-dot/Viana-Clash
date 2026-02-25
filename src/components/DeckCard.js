import CardImage from './CardImage';

export default function DeckCard({ deck }) {
    return (
        <div className="bg-card border border-border rounded-2xl p-5 shadow-lg hover:shadow-primary/20 hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex justify-between items-start mb-5">
                <div>
                    <h3 className="font-bold text-xl text-foreground tracking-tight">{deck.name}</h3>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-accent/20 text-accent border border-accent/30 rounded-full mt-2 inline-block shadow-sm">
                        {deck.archetype}
                    </span>
                </div>
                <div className="text-right bg-background/50 rounded-lg p-2 border border-border">
                    <div className="text-success font-bold text-lg leading-tight">{deck.winRate.toFixed(1)}% <span className="text-xs text-secondary font-normal uppercase">Vit.</span></div>
                    <div className="text-secondary text-sm mt-0.5">{deck.usageRate.toFixed(1)}% <span className="text-xs uppercase">Uso</span></div>
                </div>
            </div>

            <div className="grid grid-cols-4 gap-2 sm:gap-3 place-items-center bg-background rounded-xl p-3 border border-border/50">
                {deck.cards.map((card, idx) => (
                    <CardImage key={idx} cardId={card} size={64} alt={card} />
                ))}
            </div>
        </div>
    );
}

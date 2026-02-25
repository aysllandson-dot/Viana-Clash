"use client";

import { useState, useMemo } from 'react';
import CardSelector from './CardSelector';
import DeckCard from './DeckCard';

export default function DashboardClient({ initialDecks }) {
    const [selectedCards, setSelectedCards] = useState([]);
    const [minWinRate, setMinWinRate] = useState(0);
    const [sortBy, setSortBy] = useState('winRate');

    const toggleCard = (cardId) => {
        setSelectedCards(prev =>
            prev.includes(cardId) ? prev.filter(c => c !== cardId) : [...prev, cardId]
        );
    };

    const filteredAndSortedDecks = useMemo(() => {
        let result = [...initialDecks];

        // Filter by selected cards
        if (selectedCards.length > 0) {
            result = result.filter(deck =>
                selectedCards.every(card => deck.cards.includes(card))
            );
        }

        // Filter by win rate
        if (minWinRate > 0) {
            result = result.filter(deck => deck.winRate >= minWinRate);
        }

        // Sort
        result.sort((a, b) => b[sortBy] - a[sortBy]);

        return result;
    }, [initialDecks, selectedCards, minWinRate, sortBy]);

    return (
        <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto p-4 md:p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Sidebar Filters */}
            <aside className="w-full lg:w-1/4 space-y-6">
                <div className="bg-card border border-border rounded-2xl p-6 shadow-xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-primary/10 transition-colors"></div>
                    <h2 className="font-extrabold text-2xl mb-6 flex items-center gap-2">
                        <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                        </svg>
                        Filtros
                    </h2>

                    <div className="space-y-6 relative z-10">
                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label className="text-sm font-bold text-foreground">Taxa Mín. de Vitória</label>
                                <span className="text-primary font-bold">{minWinRate}%</span>
                            </div>
                            <input
                                type="range"
                                min="0" max="60" step="0.5"
                                value={minWinRate}
                                onChange={(e) => setMinWinRate(parseFloat(e.target.value))}
                                className="w-full accent-primary cursor-pointer"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-foreground mb-2">Ordenar Por</label>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="w-full bg-background border border-border text-foreground rounded-xl p-3 focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none appearance-none cursor-pointer transition-shadow"
                                style={{ backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23909bb5%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem top 50%', backgroundSize: '0.65rem auto' }}
                            >
                                <option value="winRate">Maior Taxa de Vitória</option>
                                <option value="usageRate">Maior Taxa de Uso</option>
                            </select>
                        </div>
                    </div>
                </div>

                <CardSelector selectedCards={selectedCards} onToggleCard={toggleCard} />
            </aside>

            {/* Main Content */}
            <main className="w-full lg:w-3/4">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                    <h1 className="text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-secondary">
                        Decks Populares
                    </h1>
                    <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-bold border border-primary/20 shadow-sm flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        {filteredAndSortedDecks.length} Decks Encontrados
                    </span>
                </div>

                {filteredAndSortedDecks.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {filteredAndSortedDecks.map(deck => (
                            <DeckCard key={deck.id} deck={deck} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-24 bg-card/50 border border-border rounded-3xl backdrop-blur-sm">
                        <div className="w-20 h-20 bg-card rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner border border-border/50">
                            <span className="text-3xl">🏜️</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-white">Nenhum deck encontrado</h3>
                        <p className="text-secondary text-lg mb-8 max-w-sm mx-auto">Tente ajustar seus filtros ou selecionar menos cartas.</p>
                        <button
                            onClick={() => { setSelectedCards([]); setMinWinRate(0); }}
                            className="px-6 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 hover:scale-105 transition-all shadow-lg shadow-primary/20"
                        >
                            Limpar Filtros
                        </button>
                    </div>
                )}
            </main>
        </div>
    );
}

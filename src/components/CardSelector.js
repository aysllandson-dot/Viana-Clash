"use client";

import CardImage from './CardImage';
import { ALL_CARDS } from '@/lib/mockData';

export default function CardSelector({ selectedCards, onToggleCard }) {
    return (
        <div className="bg-card border border-border rounded-2xl p-5 shadow-lg max-h-[500px] overflow-y-auto">
            <h3 className="font-bold text-xl mb-5 pb-3 border-b border-border/60 sticky top-0 bg-card z-10">
                Filtrar por Cartas
                <span className="block text-xs font-normal text-secondary mt-1 tracking-wide uppercase">Selecione cartas para encontrar decks</span>
            </h3>
            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {ALL_CARDS.map(card => {
                    const isSelected = selectedCards.includes(card.id);
                    return (
                        <button
                            key={card.id}
                            onClick={() => onToggleCard(card.id)}
                            className={`group relative p-1 rounded-xl overflow-hidden border-2 transition-all duration-300 transform hover:scale-110 ${isSelected
                                ? 'border-primary ring-2 ring-primary/40 bg-primary/20 shadow-[0_0_15px_rgba(92,111,255,0.3)]'
                                : 'border-transparent hover:border-border bg-background/50 hover:bg-background/80 grayscale hover:grayscale-0'
                                }`}
                            title={card.name}
                            aria-pressed={isSelected}
                        >
                            <CardImage cardId={card.id} size={50} alt={card.name} className="mx-auto" />
                            {isSelected && (
                                <div className="absolute -top-1 -right-1 bg-primary text-white text-[10px] rounded-full w-5 h-5 flex items-center justify-center font-bold shadow-md border-2 border-card z-20">
                                    ✓
                                </div>
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

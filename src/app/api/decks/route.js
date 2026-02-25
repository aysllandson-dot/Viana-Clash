import { NextResponse } from 'next/server';
import { MOCK_DECKS } from '@/lib/mockData';

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const cardsParam = searchParams.get('cards');
    const minWinRate = parseFloat(searchParams.get('minWinRate')) || 0;
    const sort = searchParams.get('sort') || 'winRate'; // 'winRate' or 'usageRate'

    let filteredDecks = [...MOCK_DECKS];

    if (cardsParam) {
        const requiredCards = cardsParam.split(',');
        filteredDecks = filteredDecks.filter(deck =>
            requiredCards.every(card => deck.cards.includes(card))
        );
    }

    if (minWinRate > 0) {
        filteredDecks = filteredDecks.filter(deck => deck.winRate >= minWinRate);
    }

    filteredDecks.sort((a, b) => b[sort] - a[sort]);

    return NextResponse.json(filteredDecks);
}

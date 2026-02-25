import RankingsClient from '@/components/RankingsClient';
import NavBar from '@/components/NavBar';
import { MOCK_PLAYERS, MOCK_CLANS } from '@/lib/mockData';

export const metadata = {
    title: "Classificações | VIANA CLASH",
    description: "Veja os melhores jogadores e clãs globais do Clash Royale.",
};

export default async function RankingsPage() {
    const players = await new Promise(resolve => setTimeout(() => resolve(MOCK_PLAYERS), 50));
    const clans = await new Promise(resolve => setTimeout(() => resolve(MOCK_CLANS), 50));

    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
            <NavBar />
            <div className="py-8">
                <RankingsClient players={players} clans={clans} />
            </div>
        </div>
    );
}

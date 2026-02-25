import DashboardClient from '@/components/DashboardClient';
import NavBar from '@/components/NavBar';
import { MOCK_DECKS } from '@/lib/mockData';

export default async function Home() {
  // Simulating Server-Side data fetching
  // In a real app we could await fetch('http://localhost:3000/api/decks')
  // We use direct import here for simplicity and reliability during build
  const initialDecks = await new Promise(resolve => setTimeout(() => resolve(MOCK_DECKS), 50));

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <NavBar />
      <div className="py-8">
        <DashboardClient initialDecks={initialDecks} />
      </div>
    </div>
  );
}

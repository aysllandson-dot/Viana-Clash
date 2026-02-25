import "./globals.css";

export const metadata = {
  title: "VIANA CLASH | Decks e Estatísticas",
  description: "Rastreador avançado de Decks e Jogadores de Clash Royale inspirado no RoyaleAPI e ActivePlayer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}

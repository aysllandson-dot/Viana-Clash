import "./globals.css";

export const metadata = {
  title: "VIANA CLASH | Decks e Estatísticas",
  description: "Rastreador avançado de Decks e Jogadores de Clash Royale inspirado no RoyaleAPI e ActivePlayer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="font-sans antialiased flex flex-col min-h-screen">
        <div className="flex-1">{children}</div>
        <footer className="border-t border-border bg-card/80 backdrop-blur-xl py-4 px-6 text-center text-xs text-secondary mt-auto">
          <span className="font-semibold text-foreground/70">Código sem fronteiras:</span> Desenvolvimento WEB com IA &nbsp;|&nbsp; Instrutor: <span className="text-primary font-bold">Elliakim Rocha</span> &nbsp;|&nbsp; Data: 25/02/26
        </footer>
      </body>
    </html>
  );
}

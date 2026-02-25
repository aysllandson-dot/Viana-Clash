"use client";

import { useState } from 'react';

export default function RankingsClient({ players, clans }) {
    const [activeTab, setActiveTab] = useState('players');

    return (
        <div className="max-w-6xl mx-auto p-4 md:p-8 animate-in fade-in zoom-in-95 duration-500">
            <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
                <div>
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-primary/20 to-white">
                        Classificações
                    </h1>
                    <p className="text-secondary mt-2 font-medium">Melhores jogadores e clãs do mundo</p>
                </div>

                {/* Tabs */}
                <div className="flex bg-card/80 backdrop-blur-md border border-border/80 rounded-2xl p-1.5 shadow-xl">
                    <button
                        onClick={() => setActiveTab('players')}
                        className={`px-8 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${activeTab === 'players' ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-105' : 'text-secondary hover:text-white hover:bg-background/50'}`}
                    >
                        Melhores Jogadores
                    </button>
                    <button
                        onClick={() => setActiveTab('clans')}
                        className={`px-8 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${activeTab === 'clans' ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-105' : 'text-secondary hover:text-white hover:bg-background/50'}`}
                    >
                        Melhores Clãs
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-2xl relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-success opacity-50"></div>
                <div className="overflow-x-auto">
                    {activeTab === 'players' ? (
                        <table className="w-full text-left border-collapse min-w-[600px]">
                            <thead>
                                <tr className="bg-background/90 border-b border-border text-secondary text-sm uppercase tracking-widest">
                                    <th className="p-5 font-bold text-center w-20">Posição</th>
                                    <th className="p-5 font-bold">Nome do Jogador</th>
                                    <th className="p-5 font-bold">Tag</th>
                                    <th className="p-5 font-bold text-center">Troféus</th>
                                    <th className="p-5 font-bold text-right">Região</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border/40">
                                {players.map((player, idx) => (
                                    <tr key={player.tag} className="hover:bg-background/50 transition-colors group cursor-default">
                                        <td className="p-5 text-center font-black text-xl text-primary/80 group-hover:text-primary transition-colors">{player.rank}</td>
                                        <td className="p-5 font-bold text-white text-lg flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-accent to-primary flex items-center justify-center text-sm shadow-inner shadow-black/50 border border-primary/20 group-hover:scale-110 transition-transform">
                                                {player.name.charAt(0)}
                                            </div>
                                            {player.name}
                                        </td>
                                        <td className="p-5 font-mono text-secondary text-sm">{player.tag}</td>
                                        <td className="p-5 text-center font-bold text-accent text-lg">🏆 {player.trophies.toLocaleString()}</td>
                                        <td className="p-5 text-right text-secondary font-medium">{player.region}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <table className="w-full text-left border-collapse min-w-[600px]">
                            <thead>
                                <tr className="bg-background/90 border-b border-border text-secondary text-sm uppercase tracking-widest">
                                    <th className="p-5 font-bold text-center w-20">Posição</th>
                                    <th className="p-5 font-bold">Nome do Clã</th>
                                    <th className="p-5 font-bold text-center">Membros</th>
                                    <th className="p-5 font-bold text-center">Troféus</th>
                                    <th className="p-5 font-bold text-right">Região</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border/40">
                                {clans.map((clan, idx) => (
                                    <tr key={clan.tag} className="hover:bg-background/50 transition-colors group cursor-default">
                                        <td className="p-5 text-center font-black text-xl text-primary/80 group-hover:text-primary transition-colors">{clan.rank}</td>
                                        <td className="p-5 font-bold text-white flex items-center gap-4 text-lg">
                                            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center text-xl shadow-inner shadow-black/50 border border-purple-400/20 group-hover:scale-110 group-hover:rotate-6 transition-all">
                                                🛡️
                                            </div>
                                            <div>
                                                {clan.name}
                                                <div className="font-mono text-secondary text-xs opacity-70 mt-1">{clan.tag}</div>
                                            </div>
                                        </td>
                                        <td className="p-5 text-center font-semibold text-secondary min-w-[120px]">
                                            <div className="w-full bg-background rounded-full h-2.5 mb-1 border border-border">
                                                <div className="bg-success h-2.5 rounded-full" style={{ width: `${(clan.members / 50) * 100}%` }}></div>
                                            </div>
                                            {clan.members}/50
                                        </td>
                                        <td className="p-5 text-center font-bold text-accent text-lg">🏆 {clan.trophies.toLocaleString()}</td>
                                        <td className="p-5 text-right text-secondary font-medium">{clan.region}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
}

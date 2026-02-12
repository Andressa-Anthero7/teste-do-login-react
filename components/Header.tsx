
import React from 'react';
import { ViewType } from '../types';

interface HeaderProps {
  currentView: ViewType;
}

const Header: React.FC<HeaderProps> = ({ currentView }) => {
  const titles: Record<ViewType, string> = {
    dashboard: 'Visão Geral do Cenário',
    'data-capture': 'Captura de Dados',
    analysis: 'Análise de Sentimento (IA)',
    risk: 'Gestão de Crise & Risco',
    settings: 'Configurações do Sistema',
    alerts: 'Central de Alertas',
    context: 'Contexto Político'
  };

  return (
    <header className="h-16 bg-white border-b border-slate-200 fixed top-0 left-64 right-0 flex items-center justify-between px-8 z-10">
      <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider">{titles[currentView]}</h2>
      
      <div className="flex items-center gap-6">
        <div className="relative">
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          <svg className="w-6 h-6 text-slate-400 cursor-pointer hover:text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </div>
        
        <div className="h-8 w-[1px] bg-slate-200"></div>

        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
            <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

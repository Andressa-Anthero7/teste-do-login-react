
import React from 'react';

const DashboardView: React.FC = () => {
  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Sentimento Médio', value: '68%', change: '+5.2%', color: 'blue' },
          { label: 'Menções Ativas', value: '12.4k', change: '-2.1%', color: 'slate' },
          { label: 'Nível de Crise', value: 'Baixo', change: 'Estável', color: 'green' }
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <p className="text-sm font-medium text-slate-500 mb-1">{stat.label}</p>
            <div className="flex items-end justify-between">
              <h3 className="text-3xl font-bold text-slate-800">{stat.value}</h3>
              <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                stat.color === 'blue' ? 'bg-blue-50 text-blue-600' : 
                stat.color === 'green' ? 'bg-green-50 text-green-600' : 
                'bg-slate-50 text-slate-600'
              }`}>
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="text-xl font-bold text-slate-800 mb-6">Tendências de Volume</h3>
          <div className="h-64 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 border border-dashed border-slate-200">
            [Gráfico de Tendências Placeholder]
          </div>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="text-xl font-bold text-slate-800 mb-6">Últimas Análises</h3>
          <div className="space-y-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center font-bold text-blue-600">P{i}</div>
                  <div>
                    <p className="text-sm font-bold text-slate-800">Post #{1234 + i}</p>
                    <p className="text-xs text-slate-500">Instagram • Há {i * 10} min</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">Positivo</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardView;

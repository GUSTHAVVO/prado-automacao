import { useState } from 'react';
export default function App() {
  const [calculo, setCalculo] = useState({ carga: '', curso: '' });

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <nav className="bg-white border-b px-6 py-4 flex justify-between items-center sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="bg-blue-700 text-white p-2 rounded font-black text-xl">P</div>
          <h1 className="text-xl font-bold text-slate-800 tracking-tighter">
            PRADO <span className="text-blue-600 font-light underline decoration-2">AUTOMAÇÃO</span>
          </h1>
        </div>
        <a href="#" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-bold text-sm transition-all shadow-lg">
          WHATSAPP COMERCIAL
        </a>
      </nav>

      <main className="py-12 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-6 leading-tight">
          Sua Parceria em <br/> 
          <span className="text-blue-700">Movimentação Linear</span>
        </h2>

        <div className="mt-12 bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden text-left">
          <div className="bg-slate-900 p-4 text-white text-center font-bold text-xs uppercase tracking-widest">
            SIMULADOR DE CARGA E CURSO
          </div>
          <div className="p-8 grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">CARGA (KG)</label>
                <input 
                  type="number" 
                  className="w-full border-2 border-slate-100 rounded-lg p-3 outline-none focus:border-blue-500"
                  onChange={(e) => setCalculo({...calculo, carga: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">CURSO (MM)</label>
                <input 
                  type="number" 
                  className="w-full border-2 border-slate-100 rounded-lg p-3 outline-none focus:border-blue-500"
                  onChange={(e) => setCalculo({...calculo, curso: e.target.value})}
                />
              </div>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 text-center">
              <p className="text-slate-600 text-sm mb-1 italic">Recomendação técnica:</p>
              <p className="text-blue-900 font-black text-lg mb-4">
                {Number(calculo.carga) > 200 ? "Guia Linear Série HG" : "Guia Linear Série EG"}
              </p>
              <button className="bg-blue-700 text-white w-full py-3 rounded-lg font-bold">
                SOLICITAR COTAÇÃO
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

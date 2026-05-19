import { useState } from 'react';
import { Link } from 'react-router-dom';


export const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const fecharMenu = () => setMenuAberto(false);

  return (
    <header className="w-full py-6 px-10 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        
        <Link to="/" className="group flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-tr from-purple-600 to-blue-500 rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
            <span className="text-white font-black text-xl">T</span>
          </div>
          <span className="text-2xl font-black tracking-tighter text-white">
            TECH<span className="text-purple-500">SMILE</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-12">
          <Link to="/" className="text-lg font-semibold text-slate-400 hover:text-white transition-all hover:-translate-y-0.5">Home</Link>
          <Link to="/solucao" className="text-lg font-semibold text-slate-400 hover:text-white transition-all hover:-translate-y-0.5">Solução</Link>
          <Link to="/sobre" className="text-lg font-semibold text-slate-400 hover:text-white transition-all hover:-translate-y-0.5">Sobre</Link>
          <Link to="/integrantes" className="text-lg font-semibold text-slate-400 hover:text-white transition-all hover:-translate-y-0.5">Equipe</Link>
          <Link to="/faq" className="text-lg font-semibold text-slate-400 hover:text-white transition-all hover:-translate-y-0.5">FAQ</Link>
          <Link to="/dashboard" className="text-lg font-semibold text-slate-400 hover:text-white">Área do Dentista</Link>
          
          <Link 
            to="/contato" 
            className="ml-6 bg-purple-600 text-white px-8 py-3 rounded-full font-bold text-base hover:bg-purple-500 transition-all shadow-lg shadow-purple-900/30 active:scale-95"
          >
            Fale Conosco
          </Link>
        </div>

        <button 
          className="md:hidden text-white p-2"
          onClick={() => setMenuAberto(!menuAberto)}
        >
          {menuAberto ? (
            <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </nav>

      {menuAberto && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-950 border-b border-white/10 flex flex-col items-center py-6 gap-4 shadow-2xl max-h-[80vh] overflow-y-auto">
          <Link to="/" onClick={fecharMenu} className="text-lg font-semibold text-slate-300 hover:text-white">Home</Link>
          <Link to="/solucao" onClick={fecharMenu} className="text-lg font-semibold text-slate-300 hover:text-white">Solução</Link>
          <Link to="/sobre" onClick={fecharMenu} className="text-lg font-semibold text-slate-300 hover:text-white">Sobre</Link>
          <Link to="/integrantes" onClick={fecharMenu} className="text-lg font-semibold text-slate-300 hover:text-white">Equipe</Link>
          <Link to="/faq" onClick={fecharMenu} className="text-lg font-semibold text-slate-300 hover:text-white">FAQ</Link>
          
          <Link 
            to="/contato" 
            onClick={fecharMenu}
            className="mt-2 bg-purple-600 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-purple-500 transition-all shadow-lg shadow-purple-900/30"
          >
            Fale Conosco
          </Link>
        </div>
      )}
    </header>
  );
};
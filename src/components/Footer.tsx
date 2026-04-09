export const Footer = () => {
const anoAtual = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-white/10 bg-slate-950/80 py-12 backdrop-blur-md">
      <div className="container mx-auto px-6 text-center">
        <p className="text-slate-500 text-sm tracking-wide">
          &copy; {anoAtual} <span className="text-purple-500 font-bold">TechSmile Solutions</span> - Projeto Challenge FIAP 1TDS. 
          <br />
          Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};
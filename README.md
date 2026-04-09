# 🦷 TechSmile Solutions - Conexão TdB

## 📝 Descrição do Projeto
O **Conexão TdB** é um CRM Social desenvolvido para a ONG **Turma do Bem**. O projeto centraliza a comunicação de voluntários e beneficiários, automatizando processos de triagem e gestão de atendimentos. 

Nesta fase (Sprint 3), a solução foi totalmente migrada de HTML/CSS puro para uma **arquitetura moderna baseada em componentes com React**, garantindo escalabilidade, tipagem segura com TypeScript e uma experiência de usuário (UX) de alto nível.

---

## 📸 Screenshots da Aplicação

<p align="center">
  <img src="./src/assets/tela%20home.png" alt="Tela Home" width="400">
  <img src="./src/assets/tela%20solucao.png" alt="Tela Solução" width="400">
</p>
<p align="center">
  <em>Interface moderna com foco em responsividade e acessibilidade.</em>
</p>

---

##  Tecnologias Utilizadas
* **React 19 + Vite:** Construção de uma Single Page Application (SPA) de alta performance.
* **TypeScript:** Garantindo tipagem estática, interfaces para os integrantes e segurança no código.
* **Tailwind CSS:** Estilização utilitária para um layout premium com efeitos de *Glassmorphism*.
* **React Router DOM:** Gerenciamento de rotas estáticas e dinâmicas (ex: Detalhes de Integrantes).
* **React Hook Form:** Captura e validação eficiente de dados no formulário de contato.

---

## 🔗 Links Oficiais
* 💻 **Repositório GitHub:** [Acessar Código](https://github.com/ArthurLinsBelarmino/challenge-conexao-tdb)
* 🌍 **Deploy na Vercel:** [Ver Site Online](https://challenge-conexao-r9s9v7wrn-arthurlinsbelarminos-projects.vercel.app)
* 📺 **Vídeo de Apresentação:** [Link do YouTube aqui]

---

## 📂 Estrutura de Pastas
```text
/src
 ├── /assets      # Imagens, ícones e mídias estáticas
 ├── /components  # Header, Footer, Layout (Outlet) e CardIntegrante
 ├── /pages       # Home, Sobre, FAQ, Contato, Integrantes, Solução
 ├── App.tsx      # Configuração central de rotas (Routes/Route)
 └── main.tsx     # Ponto de entrada e renderização do React
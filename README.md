# 🦷 TechSmile Solutions - Conexão TdB

## 📝 Descrição do Projeto

O **Conexão TdB** é um CRM Social desenvolvido para a ONG **Turma do Bem**, com o objetivo de centralizar a comunicação entre voluntários e beneficiários, automatizando processos de triagem e gestão de atendimentos.

Nesta fase (**Sprint 4**), a solução evoluiu para um nível profissional, realizando a **integração direta com o Back-End em Java utilizando DDD (Domain-Driven Design)**. A aplicação agora consome endpoints REST reais utilizando a **Fetch API** para operações de CRUD, implementa tipagens avançadas com **TypeScript** e conta com tratamento completo de erros de servidor.

Além disso, o sistema atua como uma **Single Page Application (SPA)**, proporcionando navegação fluida e sem recarregamento de páginas.

---

# 📸 Screenshots da Aplicação

<p align="center">
  <img src="./src/assets/tela home.png" alt="Tela Home" width="400">
  <img src="./src/assets/tela solucao.png" alt="Tela Solução" width="400">
</p>

<p align="center">
  <em>Interface moderna com foco em responsividade, acessibilidade e integração com API.</em>
</p>

---

# 🚀 Tecnologias Utilizadas

- **React 19 + Vite**  
  Construção da SPA com alta performance de renderização e build otimizado.

- **TypeScript**  
  Tipagem estática avançada, garantindo segurança e previsibilidade nos dados consumidos da API.

- **Tailwind CSS**  
  Estilização utilitária para criação de layouts modernos, premium e 100% responsivos.

- **React Router DOM**  
  Gerenciamento de rotas estáticas e dinâmicas (`/integrantes/:id`).

- **React Hook Form**  
  Captura, gerenciamento de estados e validação eficiente de formulários.

- **Fetch API**  
  Comunicação HTTP assíncrona com o Back-End Java utilizando métodos GET e POST, além de tratamento de exceções com `try/catch`.

- **Java + DDD**  
  Arquitetura Back-End baseada em Domain-Driven Design.

---

# 📂 Estrutura de Pastas

```text
src
├── assets/         # Imagens, ícones e mídias estáticas
├── components/     # Componentes reutilizáveis
│   ├── Header
│   ├── Footer
│   ├── Layout
│   └── Cards
├── pages/          # Páginas da aplicação
│   ├── Home
│   ├── Sobre
│   ├── FAQ
│   ├── Contato
│   ├── Integrantes
│   ├── Solucao
│   └── Dashboard
├── types/          # Interfaces e modelos TypeScript
│   └── models.ts
├── App.tsx         # Configuração central de rotas
└── main.tsx        # Ponto de entrada da aplicação
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

- **React 19 + Vite** Construção da SPA com alta performance de renderização e build otimizado.

- **TypeScript** Tipagem estática avançada, garantindo segurança e previsibilidade nos dados consumidos da API.

- **Tailwind CSS** Estilização utilitária para criação de layouts modernos, premium e 100% responsivos.

- **React Router DOM** Gerenciamento de rotas estáticas e dinâmicas (`/integrantes/:id`).

- **React Hook Form** Captura, gerenciamento de estados e validação eficiente de formulários.

- **Fetch API** Comunicação HTTP assíncrona com o Back-End Java utilizando métodos GET, POST, PUT e DELETE, além de tratamento de exceções com `try/catch`.

- **Java + DDD** Arquitetura Back-End baseada em Domain-Driven Design.

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
│   └── modelo.ts
├── App.tsx         # Configuração central de rotas
└── main.tsx        # Ponto de entrada da aplicação

---

## 👥 Autores e Créditos

Equipe de desenvolvimento e engenharia responsável pelo projeto (Análise e Desenvolvimento de Sistemas - FIAP):

- **Arthur Lins Belarmino** | RM: 566845 | Turma: 1TDSPS | [LinkedIn](https://www.linkedin.com/in/arthur-lins-belarmino-3b1369328/) | [GitHub](https://github.com/ArthurLinsBelarmino)
- **Henrique Spoltore M. P. dos Santos** | RM: 568130 | Turma: 2TDSPY | [LinkedIn](https://www.linkedin.com/in/henrique-pav%C3%A3o-849407251/) | [GitHub](https://github.com/henrique477)
- **Raphael Oliveira S. M. de Mendonça** | RM: 568346 | Turma: 1TDSPS | [LinkedIn](https://www.linkedin.com/in/raphael-sinelli-675310321) | [GitHub](https://github.com/Raphael-Sinelli)

---

🔗 Links Importantes da Entrega
Para fins de avaliação da banca examinadora, seguem os links oficiais da solução publicada e recursos de apresentação:

URL do Deploy Front-End (Vercel): https://challenge-conexao-tdb.vercel.app

Vídeo de Apresentação Técnica (YouTube): A definir

Repositório do Projeto (GitHub): https://github.com/ArthurLinsBelarmino/techsmile-sprint4

URL Base da API Back-End (Render): https://crm-social-sprint4-java.onrender.com

Endpoint consumido no Dashboard de Triagem: https://crm-social-sprint4-java.onrender.com/beneficiarios

---

## 🔗 Integração com Back-End Java

O front-end da aplicação foi integrado ao Back-End Java publicado no Render, utilizando requisições HTTP com a Fetch API.

Na tela **Área do Dentista / Dashboard de Triagem**, o sistema consome o endpoint de beneficiários para exibir os dados cadastrados no banco, como nome, cidade, UF, e-mail e status.

Endpoint principal utilizado no dashboard:

GET https://crm-social-sprint4-java.onrender.com/beneficiarios

Além da listagem, a tela também possui ações integradas com a API:

PUT https://crm-social-sprint4-java.onrender.com/beneficiarios/{id}

Utilizado para atualizar o status do beneficiário para `EM_ATENDIMENTO`.

DELETE https://crm-social-sprint4-java.onrender.com/beneficiarios/{id}

Utilizado para remover um beneficiário da fila de triagem.

Essa integração comprova a comunicação entre o front-end em React + TypeScript e o back-end em Java + Quarkus publicado no Render.

---

📬 Contato
Caso necessite de suporte técnico, esclarecimentos sobre a arquitetura modular da SPA ou sobre os contratos de integração com os DTOs da API Java, entre em contato com os representantes da equipe:

E-mail Institucional: rm566845@fiap.com.br (Arthur Lins)

# FitForge – Endurance & Lift Tracker

O **FitForge** é um ecossistema mobile desenvolvido para atletas híbridos que buscam alta performance tanto na musculação quanto na corrida de rua. O projeto foi construído focando em escalabilidade, tipagem forte e qualidade de software.

## 🚀 Tecnologias Utilizadas

### Backend (API REST)
- **Node.js & TypeScript**: Core da aplicação.
- **Prisma ORM**: Modelagem de dados e integração com banco de dados.
- **SQLite**: Banco de dados relacional para desenvolvimento ágil.
- **JWT (JSON Web Tokens)**: Segurança e autenticação de usuários.
- **Jest**: Testes unitários para lógica de negócio (Pace de corrida).

### Frontend Mobile
- **React Native & Expo**: Desenvolvimento cross-platform.
- **React Navigation**: Navegação fluida entre Dashboard e Registros.
- **Axios**: Consumo da API REST.

---

## 🏗️ Arquitetura do Sistema

O sistema segue o modelo cliente-servidor, onde o aplicativo mobile consome uma API desacoplada. A lógica de cálculo de pace e validações de carga são processadas no backend para garantir a integridade dos dados.

---

## 🧪 Qualidade e Testes

Para garantir o funcionamento correto dos cálculos de performance, foram implementados testes unitários.
Para rodar os testes:
```bash
cd backend
npx jest
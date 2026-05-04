# FitForge – Endurance & Lift Tracker

O **FitForge** é um ecossistema mobile desenvolvido para atletas híbridos que buscam alta performance tanto na musculação quanto na corrida de rua. O projeto foi construído com foco em escalabilidade, tipagem forte e qualidade de software, atendendo aos requisitos técnicos para a vaga de Estágio em Desenvolvimento.

## 🚀 Tecnologias Utilizadas

### Backend (API REST)
- **Node.js & TypeScript**: Core da aplicação com tipagem estática.
- **Prisma ORM**: Modelagem de dados e abstração de consultas SQL.
- **SQLite**: Banco de dados relacional utilizado para agilidade no desenvolvimento.
- **JWT (JSON Web Tokens)**: Sistema de autenticação e proteção de rotas.
- **Jest**: Framework de testes para garantir a precisão dos cálculos de performance.

### Frontend Mobile
- **React Native & Expo**: Framework para desenvolvimento cross-platform (Android/iOS).
- **React Navigation**: Gerenciamento de navegação em abas (Tab Navigation).
- **Axios**: Cliente HTTP para integração e consumo da API.

---

## 🏗️ Arquitetura e Modelagem (SQL)

O sistema utiliza uma arquitetura cliente-servidor desacoplada. A modelagem do banco de dados relacional foi pensada para suportar o crescimento do histórico do usuário:

- **Usuários**: Gestão de perfil e credenciais.
- **Treinos**: Registro de grupos musculares, exercícios e controle de carga.
- **Medidas**: Monitoramento de evolução corporal (peso, bíceps, tríceps).
- **Corridas**: Histórico de provas com métricas de distância, tempo e data.

---

## 🧪 Qualidade e Testes (Requisito Técnico)

Para garantir o funcionamento correto da lógica de negócio, especialmente o cálculo de **Pace (ritmo)** das corridas, foram implementados testes unitários automatizados.

Para rodar os testes e verificar a integridade do sistema:
```bash
cd backend
npx jest
```

---

## 📦 Como Executar o Projeto

### 1. Clonar o Repositório
```bash
git clone [https://github.com/Kumegawwa/fitforge](https://github.com/Kumegawwa/fitforge.git)
cd fitforge
```

### 2. Configurar o Backend
```bash
cd backend
npm install
npx prisma generate
npx prisma db push
npm run dev
```
*A API estará disponível em `http://localhost:3000`.*

### 3. Configurar o Frontend
```bash
cd ../frontend
npm install
npx expo start
```
*Escaneie o QR Code com o aplicativo **Expo Go** no seu dispositivo físico.*

---

# cliberconsultoria2.0
# 💼 Cliber Consultoria - Sistema de Gestão de RH

![PHP](https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)

> **Status do Projeto:** 🚀 Concluído (Fase de Refinamento)

## 📄 Sobre o Projeto

O **Cliber Consultoria** é uma aplicação web Full Stack desenvolvida para gerenciar processos seletivos de uma consultoria de Recursos Humanos.

O objetivo do sistema é conectar candidatos a oportunidades de emprego de forma eficiente, garantindo integridade de dados e facilidade de gestão para os administradores. Este projeto foi fundamental para consolidar meus conhecimentos em **Engenharia de Software Web**, focando em segurança, arquitetura MVC e manipulação de banco de dados relacional.

## ⚙️ Funcionalidades Principais

O sistema conta com um controle de acesso robusto (ACL) dividido em três níveis:

### 1. 🔐 Autenticação e Segurança
* **Sistema de Login Seguro:** Implementação de sessões e proteção de rotas (usuários não logados não acessam áreas restritas).
* **Prevenção de SQL Injection:** Uso de **PDO (PHP Data Objects)** em todas as consultas ao banco de dados.

### 2. 👥 Perfis de Acesso
* **Candidato:** Pode visualizar vagas disponíveis e se candidatar.
    * *Regra de Negócio:* O sistema impede que um candidato se aplique mais de uma vez para a mesma vaga.
* **Administrador (ADM):** Painel de controle completo.
    * **CRUD de Usuários:** Criar, Editar e Excluir contas.
    * **CRUD de Vagas:** Adicionar novas oportunidades e gerenciar as existentes.

### 3. 🖥️ Interface (Front-End)
* Site institucional com 6 páginas informativas sobre a consultoria.
* Design responsivo utilizando **Bootstrap**.
* Manipulação dinâmica do DOM com **JavaScript Puro**.

## 🛠️ Tecnologias Utilizadas

* **Back-End:** PHP 8+ (Estruturado e Orientado a Objetos).
* **Banco de Dados:** MySQL.
* **Front-End:** HTML5, CSS3, JavaScript (ES6+), Bootstrap 5.
* **Ferramentas:** VS Code, Git/GitHub, XAMPP (Apache).

## 🚀 Como Rodar o Projeto

### Pré-requisitos
* Ter um servidor local instalado (XAMPP, WAMP ou Docker).
* Navegador Web atualizado.

### Passo a Passo
1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/SEU-USUARIO/NOME-DO-REPOSITORIO.git](https://github.com/SEU-USUARIO/NOME-DO-REPOSITORIO.git)
    ```
2.  **Configure o Banco de Dados:**
    * Abra o phpMyAdmin (ou seu gerenciador preferido).
    * Crie um banco de dados chamado `cliber_db` (ou o nome que estiver no seu arquivo de conexão).
    * Importe o arquivo `database.sql` (se disponível na pasta `db` ou `sql` do projeto).
3.  **Inicie o Servidor:**
    * Coloque a pasta do projeto dentro do diretório raiz do seu servidor (ex: `htdocs` no XAMPP).
    * Inicie o Apache e o MySQL.
4.  **Acesse:**
    * Abra o navegador e digite: `http://localhost/NOME-DA-PASTA`

## 👨‍💻 Autor

**Ruan D'Elia**

Desenvolvedor Full Stack em formação, focado em PHP, JavaScript e Tecnologias Modernas (React/Nest).

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ruan-d-elia-946310303)
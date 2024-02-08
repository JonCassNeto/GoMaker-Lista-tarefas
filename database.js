// config/database.js

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost', // Substitua pelo seu host
  username: 'root', // Substitua pelo seu nome de usuário
  password: 'jon78945', // Substitua pela sua senha
  database: 'lista_tarefas', // Substitua pelo nome do seu banco de dados
  define: {
    timestamps: true,
    underscored: true,
  },
});

module.exports = sequelize;

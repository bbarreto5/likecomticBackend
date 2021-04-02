'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('informacions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombres: {
        type: Sequelize.STRING
      },
      referencia: {
        type: Sequelize.STRING
      },
      fecha: {
        type: Sequelize.STRING
      },
      pais: {
        type: Sequelize.STRING
      },
      region: {
        type: Sequelize.STRING
      },
      ciudad: {
        type: Sequelize.STRING
      },
      variante: {
        type: Sequelize.STRING
      },
      categoria: {
        type: Sequelize.STRING
      },
      marca: {
        type: Sequelize.STRING
      },
      modelo: {
        type: Sequelize.STRING
      },
      matricula: {
        type: Sequelize.STRING
      },
      pais2: {
        type: Sequelize.STRING
      },
      campaña: {
        type: Sequelize.STRING
      },
      poliza: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('informacions');
  }
};
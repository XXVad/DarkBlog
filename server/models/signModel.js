// signModel.js

const mongoose = require('mongoose');

// Схема для моделі користувача
const UserSchema = mongoose.Schema({
  nickname: {type: String, required: true}, // Email користувача, обов'язкове поле
  password: {type: String, required: true}, // Пароль користувача, обов'язкове поле
});

// Створення моделі користувача на основі схеми
const signModel = mongoose.model('profiles', UserSchema);

// Експорт моделі для використання в інших частинах програми
module.exports = signModel;

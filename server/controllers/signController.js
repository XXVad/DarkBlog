const signModel = require('../models/signModel');
const bcrypt = require('bcrypt');

exports.signUp = async (req, res) => {
  try {
    const {nickname, password} = req.body;
    const existingUser = await signModel.findOne({nickname});

    if (existingUser) {
      return res.status(400).json({error: 'Nickname вже використовується'});
    }

    const newUser = signModel({
      nickname,
      password: bcrypt.hashSync(password, 10),
    });

    const result = await newUser.save();
    res.status(201).json({message: 'Реєстрація пройшла успішно', result});
  } catch (error) {
    console.error(error);
    res.status(500).json({error: 'Внутрішня помилка сервера'});
  }
};

exports.signIn = async (req, res) => {
  try {
    const {nickname, password} = req.body;
    const user = await signModel.findOne({nickname});

    if (!user) {
      return res.json({error: 'Невірний nickname або пароль'});
    }

    const validPassword = bcrypt.compareSync(password, user.password);

    if (!validPassword) {
      return res.json({error: 'Невірний нікнейм або пароль'});
    }

    res.status(200).json({nick: user.nickname, statusnum: 1});
  } catch (error) {
    console.error(error);
    res.status(500).json({error: 'Внутрішня помилка сервера'});
  }
};

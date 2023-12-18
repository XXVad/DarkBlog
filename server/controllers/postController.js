const postModel = require('../models/postModel');

exports.addPost = async (req, res) => {
  try {
    const {title, content, author} = req.body;
    const newPost = postModel({
      title: title,
      content: content,
      author: author,
    });
    const savedPost = await newPost.save();
    res.status(201).json({message: 'Post has been added', savedPost});
  } catch (error) {
    res.status(500).json({error: 'Внутрішня помилка сервера'});
  }
};

exports.showPosts = async (req, res) => {
  try {
    const posts = await postModel.find();
    res.status(200).json(posts);
  } catch (e) {
    console.log('something wrong');
  }
};

exports.deletePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const deletedPost = await postModel.findByIdAndDelete(postId);
    if (!deletedPost) {
      return res.status(404).json({error: 'Пост не знайдено'});
    }
    res.status(200).json({message: 'Пост успішно видалено', deletedPost});
  } catch (error) {
    console.error('Помилка при видаленні посту:', error);
  }
};

exports.editPost = async (req, res) => {
  try {
    const {title, content} = req.body;
    const postId = req.params.id;
    const updatedPost = await postModel.findByIdAndUpdate(postId, {
      title,
      content,
    });
    res.status(201).json({message: 'Post has been updated', updatedPost});
    if (!updatedPost) {
      return res.status(404).json({error: 'Пост не знайдено'});
    }
  } catch (error) {
    console.error('Помилка при оновленні посту:', error);
  }
};

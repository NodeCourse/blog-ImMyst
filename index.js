const express = require('express');
const app = express();
const Sequelize = require('sequelize');

const db = new Sequelize('database', 'user', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

const User = db.define('user', {
    fullname: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING }
});
/*
const Post = db.define('post', {
    title: { type: Sequelize.STRING }
});

const Vote = Sequelize.define('vote', {
    action: { type: Sequelize.ENUM('up', 'down')}
});

Post.hasMany(Vote);
Vote.belongsTo(Post);

app.post('/api/post/:postId/upvote', (req, res) => {
  Vote
      .create({ action: 'up', postId: req.params.postId })
      .then(( => res.redirect('/')))
});
*/
User
    .sync()
    .then(() => {
        User.create({
            fullname: 'Titouan G',
            email: 'titouan.galvani@gmail.com'
        });
    })
    .then(() => {
        User.create({
            fullname: 'ImMyst',
            email: 'titouan.galvani@laposte.net'
        });
    })
    .then(() => {
        return User.findAll();
    })
    .then((users) => {
        console.log(users);
    });


app.set('view engine', 'pug');
app.set("views", "public/views")
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('homepage');
});


app.listen(3002);

const express = require('express')
const path = require('path')

const app = express();


if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '', '../build')))
    const publicPath = path.join(__dirname, '', '../public')
    app.use(express.static(publicPath))
}

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'))
})
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Server is up!');
});
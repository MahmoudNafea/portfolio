const express = require('express')
const path = require('path')

const app = express();
const publicPath = path.join(__dirname, '', '../public')
app.use(express.static(publicPath))

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '', '../build')))
}

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'))
})
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Server is up!');
});
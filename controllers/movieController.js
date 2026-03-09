// this is the callback function for the /api/user/test route
const userTest = (req, res) => {
    res.send('API Test')
}

// GET /api/user
const user = (req, res) => {
    res.send('API User')
}

export default {
    userTest,
    user
}
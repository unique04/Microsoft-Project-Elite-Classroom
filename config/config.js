const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
    mongoUri: 'mongodb+srv://Archie_tayal:Archie04*@cluster0.gulao.mongodb.net/mern-classroom?retryWrites=true&w=majority'
}

export default config
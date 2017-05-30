module.exports = {
    server:{
        port: process.env.PORT || 5000
    },
    db: {
        connection: "mongodb://blog:blog@ds151461.mlab.com:51461/blog"
    },
    TOKEN_SECRET: process.env.TOKEN_SECRET || "79d27Mh1swkXnqGp2GdB0Xl4zmTKox2T"
}
module.exports = {
    static:{
        dir: 'uploads/',
        uploads:'./uploads'
    },
    server:{
        port: 5000
    },
    database: {
        connection: ""
    },
    TOKEN_SECRET: process.env.TOKEN_SECRET || "79d27Mh1swkXnqGp2GdB0Xlgd28gdf1864zmTKox2T"
}
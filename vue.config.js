module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:3000',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            },
            '/steamapi':{
                target:'http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002',
                changeOrigin:true,
                ws:true,
                pathRewrite:{
                    '^/steamapi':''
                }
            }
        }
    },
}

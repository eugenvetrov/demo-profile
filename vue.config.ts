module.exports = {
    configureWebpack: {
      define: {
        'process.env.API_URL': JSON.stringify('https://jsonplaceholder.typicode.com/') 
      } 
    }
  }
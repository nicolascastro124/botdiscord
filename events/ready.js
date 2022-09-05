module.exports = {
    name: 'ready',
    run: (client) => {
      console.log('Estoy listo');
     
      client.application.commands.set([
        {
          name: 'ping',
          description: 'Pong!',
          options: [],
        }
       
      ]);
  
    }
  }
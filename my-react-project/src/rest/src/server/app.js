const express = require('express');
const bodyParser = require('body-parser');
const repository = require("./repository");
const cors = require('cors');
const app = express();

//JSON kullanabilmek için.
app.use(bodyParser.json());

app.use(cors({
   origin: 'http://localhost:3000'
}));

app.get('/records',(req, res)=>{
   const since = req.query["since"];

   if(since){
      res.json(repository.getAllMoviesSince(since));
   }else {
      res.json(repository.getAllMovies());
   }
});

app.get('/records/:id',(req, res) =>{
   const movie = repository.getMovie(req.params["id"]);
   if(!movie){
      res.status(404);
      res.send();
   }else {
      res.json(movie);
   }
} );

app.delete('/records/:id',(req,res)=>{
   const deleted = repository.deleteMovie(req.params["id"]);

   if(deleted){
      res.status(204); //no content
   }else {
      //eğer kaynak silindiyse veya yoksa
      res.status(404);
   }
   res.send();
});

app.post('/records',(req,res)=>{
   const dto = req.body; //data transfer object
   const id = repository.createNewMovie(dto.userName1, dto.userName2);
   res.status(201); //created
   res.header("location","/movies/"+id);
   res.send();
   //body içerisinde raw->json olarak veri göndermek lazım.
});

app.put('/records/:id',(req,res)=>{
   //değiştirmek için gönderilen id'ler uyuşmaz ise conflict 409 kodu gönderilir.
   console.log(req.params.id )
   console.log(req.body.id)
   if(req.params.id !== req.body.id){
      res.status(409);
      res.send();
      return;
   }

   const updated = repository.updateMovie(req.body);

   if(updated){
      res.status(204);
   } else {
      //böyle bir kaynak yoksa
      res.status(404);
   }
   res.send();
});

module.exports = app;
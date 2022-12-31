/*
Burada veritabanına erişim de sağlanabilir ancak kolaylık
olması için memory'de tutuyoruz.
*/

const movies = new Map();

//tekil id için
let counter = 0;

const createNewMovie = (userName1,userName2,skor1,skor2) => {
    const id = "" + counter;
    counter++;

    const record = {
        id,
        userName1,
        userName2
    };

    movies.set(id, record);

    return id;
}

const deleteMovie = (id) => movies.delete(id);

const getMovie = (id) => movies.get(id);

const getAllMovies = () => Array.from(movies.values());

const updateMovie = (record) => {
    if(! movies.has(record.id)){
        return false;
    }

    movies.set(record.id,record);
    return true;
}

const getAllMoviesSince = (year) => Array.from(movies.values()).filter(m=>m.year>=year);

const initMovies = () => {
    movies.clear();
    counter = 0;

    createNewMovie("ali","kemal",1,2);

}


module.exports = {initMovies,getAllMovies,
getAllMoviesSince,updateMovie,getMovie,deleteMovie,createNewMovie}
import React,{useEffect,useState} from 'react';
import './App.css';
import axios from 'axios';
import Recipe from './components/Recipe';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Grid from '@mui/material/Grid';

function App() {

  // const [count,setCount] = useState(0);
  const APP_ID = "701eb24b";
  const APP_KEY = "5e76d12363b4e8f3726c2a0f5e8fc58e";

  const [recipes,setRecipes] = useState([]);
  const [search,setSearch] = useState("");
  const [query,setQuery] = useState("chicken");
  

useEffect(() =>{

  console.log("effect runs")
  getRecipe();

},[query]);

const getRecipe = async() => {
    const response = await axios.get(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    console.log(response.data.hits);
    setRecipes(response.data.hits);
};

const updateSearch = (e) =>{
  setSearch(e.target.value);
    console.log(e.target.value);
} 
const updateQuery =(e) => {
  e.preventDefault();
  setQuery(search);
}

  return (
    <div>
      <h1>GAURAV</h1>


      <Paper
      onSubmit={updateQuery}
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 ,margin:'10px auto'}}>
      
      <InputBase
      type="text" value={search} onChange={updateSearch}
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Recipe"
        inputProps={{ 'aria-label': 'search recipe' }}
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      
    </Paper>


      {/* <form onSubmit={updateQuery}>
      <input type="text" value={search} onChange={updateSearch}/>
      <button type="submit">Search</button>
      </form> */}


    {/* {count}
      <button onClick= {() => {setCount(count+1)}} >COUNT</button>
       */}

       <Grid container>
       {recipes.map((recipe)=>{
         return(
           <>
           <Grid item xs={2} />
         <Recipe key={recipe.recipe.label} title={recipe.recipe.label} calories = {recipe.recipe.calories} image = {recipe.recipe.image} ingredients={recipe.recipe.ingredients} />
         </>
         )
       } )}
      </Grid>
    </div>
  );
}

export default App;

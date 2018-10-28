import axios from 'axios';

export const fetchRecipes = ingredient => axios.get(`https://api.edamam.com/search?q=${ingredient}&app_id=68d59548&app_key=c4a1c2b75e93db176aa16ac0de9e66bb&to=100`);	



export const fetchBackupRecipes = (ingredient) => axios.get(
  `/api/backup/`, 
   { params: {
    ingredient: ingredient
   }
  });
  //`/api.edamam.com/search?q=${ingredient}&app_id=6d9d0107&app_key=4e66ac21b03248caf02cc471ba4749c1`);

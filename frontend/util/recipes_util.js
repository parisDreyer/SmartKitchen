export const fetchRecipes = (ingredient) => (
    $.ajax({
        method: 'GET',
        url: `/api.edamam.com/search?q=${ingredient}&app_id=6d9d0107&app_key= 4e66ac21b03248caf02cc471ba4749c1`
    })
);
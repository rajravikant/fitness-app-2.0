const baseUrl =  "https://www.themealdb.com/api/json/v1/1/"

export const getMeals = async(param : string)=>{
    try {
        const response = await fetch(baseUrl+`search.php?s=${param}`, {
            method: 'GET',
        });
        const result = await response.json();
    
        return result.meals;
    } catch (error) {
        console.error(error);
    }
}

const baseUrl = 'https://exercisedb.p.rapidapi.com/';
const apiKey = 'fbd9979de8msh4c3c590313f42dap1f02a7jsn81b56e156f89';
const apiHost = 'exercisedb.p.rapidapi.com';

const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': apiKey,
      'x-rapidapi-host': apiHost
    }
  };
  

export const testApi = async()=>{
    try {
        const response = await fetch(baseUrl, options);
        const data = await response.json();
        if (!response.ok) {
            return { error: data.message || 'Something went wrong!' };
        }
        console.log(data);
        return data
    } catch (error) {
        console.log(error);
    }
}

export const getExercises = async(limit:number = 10,offset :number = 0)=>{
    try {
        const response = await fetch(baseUrl+`exercises?limit=${limit}&offset=${offset}`, options);
        const result = await response.json();
        
        return result;
    } catch (error) {
        console.error(error);
    }
}

export const getExercisesByTarget = async(target : string,offset :number = 0,limit:number = 10)=>{
    try {
        const response = await fetch(baseUrl+`exercises/target/${target}?limit=${limit}&offset=${offset}`, options);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
}

export const getBodyParts = async()=>{
    try {
        const response = await fetch(baseUrl+'exercises/bodyPartList', options);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
}

export const getExercisesByBodyPart = async(bodyPart : string,offset :number = 0,limit:number = 10)=>{
    try {
        const response = await fetch(baseUrl+`exercises/bodyPart/${bodyPart}?limit=${limit}&offset=${offset}`, options);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
}



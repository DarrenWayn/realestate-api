import axios from 'axios'

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async(url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': 'ae9c37b302mshf18f6bdeabd3a3cp131c7cjsnec96c2f702e9'
          }
    })
    
    return data
}
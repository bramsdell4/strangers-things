const strangerThingsAPI_URL = 'https://strangers-things.herokuapp.com/api/2204-FTB-MT-WEB-PT'

export const apiCall = async (url, method='GET', token, body) => {

    let data = false;
    try {
      const response = await fetch(
        strangerThingsAPI_URL + url, 
        setToken(getFetchOptions(method, body), token)
      );
      data = await response.json();
  
      if (data.error) {
        throw data.error;
      }
    } catch(e) {
      console.error(e);
    }
  
    return data;
  }
  
  
  const getFetchOptions = (method, body) => {
    return {
      method: method.toUpperCase(),
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }
  }
  
  const setToken = (body, token) => {
    return token ? 
      Object.assign(body, {'Authorization': `Bearer ${token}` }) :
      body;
  }


export const fetchPosts = async () => {
  const data = await apiCall('/posts')
  if (!data || !data.data) {
    return []
  }
  return data.data.posts || [];
}
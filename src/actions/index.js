export const FETCH_REQUEST="FETCH_REQUEST";
export const FETCH_SUCCESS="FETCH_SUCCESS";
export const FETCH_ERROR="FETCH_ERROR";

export const url='https://content.viaplay.se/pc-se/serier/samtliga';

function fetchPostsRequest(){
  return {
    type: FETCH_REQUEST
  }
}

function fetchPostsSuccess(payload) {
  return {
    type: FETCH_SUCCESS,
    payload
  }
}

function fetchPostsError() {
  return {
    type: FETCH_ERROR
  }
}
export function fetchPostsWithRedux() {
	return (dispatch) => {
  	dispatch(fetchPostsRequest());
    return fetchPosts().then(([response, json]) =>{
    	if(response.status === 200){
        dispatch(fetchPostsSuccess(json));
      }
      else{
        dispatch(fetchPostsError());
      }
    })
  }
}

function fetchPosts() {
  
  return fetch(url, { method: 'GET'})
     .then( response => Promise.all([response,response.json()]));
}
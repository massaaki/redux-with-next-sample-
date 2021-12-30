// import axios from 'axios';

import * as T from '../types';

export const fetchposts = () => async dispatch => {
  // const res = await axios.get('api/posts');
  console.log('02');
  dispatch({
    type: T.GET_POSTS,
    payload: ['1st post', '2nd post', '3rd post']
  })

}
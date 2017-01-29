import fetch from 'isomorphic-fetch'

export const REQUEST_POSTS = 'REQUEST_POSTS'
function requestPosts(objRequest) {
  return {
    type: REQUEST_POSTS,
    objRequest
  }
}

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
function receivePosts(option, json) {
  return {
    type: RECEIVE_POSTS,
    option,
    posts: json,
    receivedAt: Date.now()
  }
}

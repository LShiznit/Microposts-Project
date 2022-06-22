import { http } from './http'

// Get posts on DOM load
document.addEventListener('DOMContentLoaded', getPosts)

function getPosts() {
  http.get('')
}

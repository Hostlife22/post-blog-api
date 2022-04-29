const express = require("express");
const {
  getPost,
  deletePost,
  editPost,
  getPosts,
  getAddPost,
} = require("../controllers/api-post-controller");

const router = express.Router();

// Get all Posts
router.get("/api/posts", getPosts);
// Add new Post
router.post("/api/post", getAddPost);
// Get Post by ID
router.get("/api/post/:id", getPost);
// Delete Post by ID
router.delete("/api/post/:id", deletePost);
// Update Post by ID
router.put("/api/post/:id", editPost);

module.exports = router;

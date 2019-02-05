import axios from "axios";

export default {
  // Gets all books
  getTrashmen: function() {
    console.log("HERE")
    return axios.get("/api/trashman/");
  },
  // Gets the book with the given id
  getTrashman: function(id) {
    return axios.get("/api/trashman/" + id);
  },
  // Deletes the book with the given id
  deleteTrashman: function(id) {
    return axios.delete("/api/trashman/" + id);
  },
  // Saves a book to the database
  saveTrashman: function(bookData) {
    return axios.post("/api/trashman", bookData);
  }
};

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
  saveTrashman: function(newTrashman) {
    return axios.post("/api/trashman", newTrashman);
  },
  getOwners: function() {
    console.log("HERE")
    return axios.get("/api/homeowner/");
  },
  // Gets the book with the given id
  getOwner: function(id) {
    return axios.get("/api/homeowner/" + id);
  },
  // Deletes the book with the given id
  deleteOwner: function(id) {
    return axios.delete("/api/homeowner/" + id);
  },
  // Saves a book to the database
  saveOwner: function(bookData) {
    return axios.post("/api/homeowner", bookData);
  }
};

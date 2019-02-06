import axios from 'axios';

export default {
  // Gets all trashmen
  getTrashmen: function() {
    return axios.get('/api/trashman/');
  },
  // Gets the trashman with the given id
  getTrashman: function(id) {
    return axios.get('/api/trashman/' + id);
  },
  // Deletes the trashman with the given id
  deleteTrashman: function(id) {
    return axios.delete('/api/trashman/' + id);
  },
  // Saves a trashman to the database
  saveTrashman: function(newTrashman) {
    console.log('trying to save trashman!');
    console.log('newTrashman', newTrashman);
    return axios.post('/api/trashman/', newTrashman);
  },
  getOwners: function() {
    return axios.get('/api/homeowner/');
  },
  // Gets the homeowner with the given id
  getOwner: function(id) {
    return axios.get('/api/homeowner/' + id);
  },
  // Deletes the homeowner with the given id
  deleteOwner: function(id) {
    return axios.delete('/api/homeowner/' + id);
  },
  // Saves a homeowner to the database
  saveOwner: function(newOwner) {
    return axios.post('/api/homeowner', newOwner);
  }
};

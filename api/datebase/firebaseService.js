const db = require("./firebase").db;
const { getDocs, collection } = require("firebase/firestore");

class FirebaseService {
  constructor() {}

  static getInstance() {
    if (!FirebaseService.instance) {
      FirebaseService.instance = new FirebaseService();
    }

    return FirebaseService.instance;
  }

  async fetchDataCollection(params) {
    const dataRef = collection(db, params);
    const querySnapshot = await getDocs(dataRef);
    const data = [];

    querySnapshot.forEach((document) => {
      const user = document.data();
      data.push(user);
    });

    return data;
  }
}

module.exports = FirebaseService;

/*
	Singleton is a special creational design pattern where only one instance of a class can exist. It works like this - if no instance of the singleton class exists then a new instance is created and returned but if an instance already exists then the reference to the existing instance is returned.
	A perfect real-life example would be that of mongoose (the famous Node.js ODM library for MongoDB). It utilizes the singleton pattern.
*/

class Database {
  constructor(data) {
    if (Database.exists) {
      return Database.instance;
    }

    this._data = data;
    Database.instance = this;
    Database.exists = true;
    return this;
  }

  getData() {
    return this._data;
  }

  setData(data) {
    this._data = data;
  }
}

// usage

const mongo = new Database("mongo");
const mysql = new Database("mysql");

console.log(mongo === mysql);

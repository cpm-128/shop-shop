export function pluralize(name, count) {
  if (count === 1) {
    return name
  }
  return name + 's'
}

export function idbPromise(storeName, method, object) {
  return new Promise((resolve, reject) => {
    //open the db connection
    const request = window.indexedDB.open('shop-shop', 1);

    // create variables to hold reference to the db, transaction (tx), and object store
    let db, tx, store;

    // if verions has changed (of it first time), run this method and create the three object stores
    request.onupgradeneeded = function(e) {

      const db = request.result;

      // create object store for each type of data and set primary key index to be the id of the data
      db.createObjectStore('products', { keyPath: '_id' });
      db.createObjectStore('categories', { keyPath: '_id' });
      db.createObjectStore('cart', { keyPath: '_id' });

    };

    // handle any errors with connecting
    request.onerror = function(e) {
      console.log('>> There was an error connecting to the database. <<');
    };

    // on db open success
    request.onsuccess = function(e) {
      // save a reference of the db to the 'db' cariable
      db = request.result;
      // open a transaction
      tx = db.transaction(storeName, 'readwrite');
      // save a reference to that object store
      store = tx.objectStore(storeName);

      // error check
      db.onerror = function(e) {
        console.log('>> error >> ', e);
      };

      // check which value was passed into the function as a method
      switch (method) {
        case 'put':
          store.put(object);
          break;
        case 'get':
          const all = store.getAll();
          all.onsuccess = function() {
            resolve(all.result);
          };
          break
        case 'delete':
          store.delete(object._id);
          break;
        default:
          console.log('>> No valid method. <<');
          break;
      }

      // when transaction complete, close connection
      tx.oncomplete = function() {
        db.close();
      };

    }

  });
}

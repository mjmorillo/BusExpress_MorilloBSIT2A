import * as SQLite from 'expo-sqlite';
import AsyncStorage from '@react-native-async-storage/async-storage';

let db = null;

const openDatabaseAndInitializeTables = async () =>{
  try{
    if(db){
      return db;
    }

    db = await SQLite.openDatabaseAsync('busExpress_db')

    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS users (
      user_id INTEGER PRIMARY KEY , 
      username TEXT UNIQUE, 
      password TEXT
      );
    `);
    console.log('Users table created successfully');

    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS booking (
        bookingID INTEGER PRIMARY KEY NOT NULL ,
        user_id INTEGER,
        locationFrom TEXT,
        locationTo TEXT,
        busType TEXT,
        date INT,
        passengerQtty INT,
        passengerFare INT,
        FOREIGN KEY(user_id) REFERENCES users(user_id);
        FOREIGN KEY(checkboxID) REFERENCES checkbox(checkboxID)
        );
    `);
    console.log('Booking table created successfully');

    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS booked_bus(
        bookedBusID INTEGER PRIMARY KEY NOT NULL ,
        destinationFrom TEXT NOT NULL,
        destinationTo TEXT NOT NULL,
        busTypeChoice TEXT NOT NULL,
        dateChoice INT,
        passChoiceQtty INT,
        passChoiceFare
        );
    `);
    console.log('Check box table created successfully');

  }catch(error){
    console.log(error);
  }
}

export const insertNewAcc = async (username, password) => {
  try{
    const db = await openDatabaseAndInitializeTables();

    if(!db){
      throw new Error("Database not initialized.");
    }
    // create new acc
    const result = await db.runAsync('INSERT INTO users (username, password) VALUES (?, ?)', [username, password]);
    const newAccId = result.lastInsertRowId;

    //store the new acc id in asyncStorage
    await AsyncStorage.setItem('account_id', newAccId.toString());
    console.log('Account inserted with ID: ', newAccId);

    return newAccId;
  }catch(error){
    console.log(error)
  }
}

export const checkLogin = async (username, password) => {
  try{
    const db = await openDatabaseAndInitializeTables();

    if(!db){
      throw new Error("Database not initialized.");
    }
    // select user acc
    const resultSet = await db.getAllAsync('SELECT * FROM users WHERE username = ? AND password = ?', [username, password]);
    if(resultSet && resultSet > 0){
      const user_id = resultSet[0].user_id;
      await AsyncStorage.setItem(`user_id`, user_id.toString()); // store account id in Async Storage
      return true;
    }
    return false;
  }catch(error){
    console.log(error)
  }
}

export const insertBookRecord = async (locationFrom, locationTo, busType, date, passengerQtty, passengerFare) => {
  try{
    const db = await openDatabaseAndInitializeTables();

    await db.runAsync('INSERT INTO booking (locationFrom, locationTo, busType, date, passengerQtty, passengerFare) VALUES (?, ?, ?, ?, ?, ?)',
                        [selectedValueFrom, selectedValueTo, selectedBusType, selectedDate, selectedPassQtty, selectedFare]);
      Alert.alert('Success!!', 'You have booked trip!');
      navigation.navigate('Summary');
  }catch(error){
    console.log(error);
  }
}


export const bookRecords = async (locationFrom, locationTo, busType, date, passengerQtty, passengerFare) => {
  try{
    const db = await openDatabaseAndInitializeTables();
    if(!db){
      throw new Error("Database not initialized");
    }
    //select user book
    const bookQuery = await db.getAllAsync('SELECT * FROM booking WHERE locationFrom = ? AND locationTo = ? AND busType = ? AND date = ? passengerQtty = ? passengerFare = ?', 
                                              [locationFrom, locationTo, busType, date, passengerQtty, passengerFare]);

        const params = [locationFrom, locationTo, busType, date, passengerQtty, passengerFare];
        const bookResults = await db.getAllAsync(bookQuery, params);
        return bookResults;
  }catch(error){
    console.log(error)
  }
}

export const initializeDB = async () => {
    try{
        await openDatabaseAndInitializeTables();
        console.log('Database initialization complete');
    }catch(error){
        console.log('Error initializing database: ' . error);
    }
}
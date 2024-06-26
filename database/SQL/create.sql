-- DROP DATABASE SBSM;
CREATE DATABASE SBSM;
USE SBSM;

CREATE TABLE User (
	ID VARCHAR(36) PRIMARY KEY,
	Email VARCHAR(30) UNIQUE,
    Password VARCHAR(100) NOT NULL,
    Fullname VARCHAR(20),
    Region VARCHAR(20),
    Phone VARCHAR(20)
);

CREATE TABLE SensorRecord(
	ID INT AUTO_INCREMENT PRIMARY KEY,
    UserID CHAR(10) ,
    Time DATETIME NOT NULL, 
    Temperature FLOAT,
    Humidity FLOAT,
    FOREIGN KEY (UserID) 
		REFERENCES User(ID)
        ON DELETE SET NULL
        ON UPDATE SET NULL
);

CREATE TABLE Feedback(
	ID INT AUTO_INCREMENT PRIMARY KEY,
    UserID CHAR(10) ,
    Content MEDIUMTEXT,
    Time DATETIME, 
    FOREIGN KEY (UserID) 
		REFERENCES User(ID)
		ON DELETE SET NULL
        ON UPDATE SET NULL
);

CREATE TABLE Alarms(
	ID INT AUTO_INCREMENT PRIMARY KEY,
    UserID CHAR(10) ,
    Text TEXT,
    Time DATETIME, 
    IsActive BOOLEAN,
    FOREIGN KEY (UserID) 
		REFERENCES User(ID)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

CREATE TABLE Device(
	ID INT AUTO_INCREMENT PRIMARY KEY,
    UserID CHAR(10) ,
    Name VARCHAR(20) NOT NULL,
    Supplier VARCHAR(20),
    Icon VARCHAR(20), 
    IsActive BOOLEAN,
    FOREIGN KEY (UserID) 
		REFERENCES User(ID)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

CREATE TABLE Light(
    DeviceID INT PRIMARY KEY,
    FOREIGN KEY (DeviceID) 
		REFERENCES Device(ID)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

CREATE TABLE Fan(
    DeviceID INT PRIMARY KEY,
    Level INT NOT NULL DEFAULT 0,
    FOREIGN KEY (DeviceID) 
		REFERENCES Device(ID)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

CREATE TABLE DeviceSchedule(
	ID INT ,
    DeviceID INT NOT NULL,
    FromTime DATETIME NOT NULL,
    ToTime DATETIME NOT NULL,
    Action VARCHAR(30),
    PRIMARY KEY (DeviceID, ID),
    FOREIGN KEY (DeviceID) 
		REFERENCES Device(ID)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

CREATE TABLE Logs(
	ID INT AUTO_INCREMENT PRIMARY KEY,
    DeviceID INT,
    Content TEXT NOT NULL,
    Time DATETIME NOt NULL,
    FOREIGN KEY (DeviceID) 
		REFERENCES Device(ID)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

CREATE TABLE Message (
	ID INT AUTO_INCREMENT PRIMARY KEY,
	Content MEDIUMTEXT NOT NULL,
    Time DATETIME NOT NULL,
    Type VARCHAR(20)
);

CREATE TABLE SystemMessage (
	MessID INT PRIMARY KEY,
    UserID CHAR(10),
    FOREIGN KEY (MessID) 
		REFERENCES Message(ID)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    FOREIGN KEY (UserID) 
		REFERENCES User(ID)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

CREATE TABLE PersonalMessage (
	MessID INT PRIMARY KEY,
    ReceiverID CHAR(10),
    SenderID CHAR(10),
    FOREIGN KEY (MessID) 
		REFERENCES Message(ID)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    FOREIGN KEY (ReceiverID) 
		REFERENCES User(ID)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
	FOREIGN KEY (SenderID) 
		REFERENCES User(ID)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);
-- Data for User
INSERT INTO User
VALUES ("0000000001", "vana@gmail.com", "123", "Nguyen Van A", "VietNam", "01234567"),
		("0000000002", "phanb@gmail.com", "123", "Phan Van B", "VietNam", "01234567")
;
-- Data for Feedback
INSERT INTO Feedback (UserID, Content, Time)
VALUES ("0000000001", "App rat tot", "2024-05-28"),
		("0000000002", "Toi rat hai long", "2024-05-28")
;

-- Data for SensorRecord
INSERT INTO SensorRecord (UserID, Time, Temperature, Humidity)
VALUES 	("0000000001",  "2024-05-28 00:00:00", 30, 20),
		("0000000001",  "2024-05-28 00:10:00", 32, 25),
		("0000000002",  "2024-05-28 00:10:00",31, 22),
        ("0000000002",  "2024-05-28 00:00:00",35, 20)
;



-- DATA for Fan
CALL insert_fan("0000000001", "Fan 1", "Panasonic", "");
CALL insert_fan("0000000001", "Fan 2", "SOHA", "");

CALL insert_fan("0000000002", "Fan 1", "Panasonic", "");
CALL insert_fan("0000000002", "Fan 2", "EleFan", "");

-- DATA for Light
CALL insert_light("0000000001", "Light 1", "Panasonic", "");
CALL insert_light("0000000001", "Light 2", "SOHA", "");

CALL insert_light("0000000002", "Light 1", "Panasonic", "");
CALL insert_light("0000000002", "Light 2", "EleLight", "");

-- Data for Logs
INSERT INTO Logs(DeviceId, Content, Time)
VALUES (5, "has been turned off because of light exceeds", "2024-05-29"),
		(7, "has been turned off because of light exceeds", "2024-05-29"),
		(1, "has been turned of due to the schedule", "2024-05-29"),
        (3, "has been turned of due to the schedule", "2024-05-29")
;

-- Data for SystemMessage
CALL insert_systemMessage("0000000001", "You has shared the bedroom with B successfully", "2024-05-29");
CALL insert_systemMessage("0000000002", "You has shared the bedroom with A successfully", "2024-05-29");
CALL insert_systemMessage("0000000001", "Welcome to SBSM", "2024-05-28");
CALL insert_systemMessage("0000000002", "Welcome to SBSM", "2024-05-28");

-- Data for PersonalMessage
CALL insert_personalMessage("0000000001", "0000000002", "Hello","2024-05-28");
CALL insert_personalMessage("0000000002", "0000000001", "Hi","2024-05-29");
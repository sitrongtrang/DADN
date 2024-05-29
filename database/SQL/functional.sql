-- PROCEDURE to INSERT a Fan
-- DROP PROCEDURE insert_fan
DELIMITER $$
CREATE PROCEDURE insert_fan(
	IN userID CHAR(10),
	IN name VARCHAR(20),
    IN supplier VARCHAR(20),
    IN icon VARCHAR(20)
)
BEGIN
	DECLARE deviceID INT;
	INSERT INTO Device(userID, Name, Supplier, Icon, IsActive)
		VALUES (userID, name, supplier, icon, 0);
	SET deviceID = LAST_INSERT_ID();
    INSERT INTO Fan(DeviceID, Level)
		VALUES (deviceID, 0);
END$$
DELIMITER ;

-- PROCEDURE to INSERT a Light
-- DROP PROCEDURE insert_fan
DELIMITER $$
CREATE PROCEDURE insert_light(
	IN userID CHAR(10),
	IN name VARCHAR(20),
    IN supplier VARCHAR(20),
    IN icon VARCHAR(20)
)
BEGIN
	DECLARE deviceID INT;
	INSERT INTO Device(userID, Name, Supplier, Icon, IsActive)
		VALUES (userID, name, supplier, icon, 0);
	SET deviceID = LAST_INSERT_ID();
    INSERT INTO Light(DeviceID)
		VALUES (deviceID);
END$$
DELIMITER ;

-- Function to check which type of devices of a DeviceID
-- DROP FUNCTION device_type
DELIMITER $$
CREATE FUNCTION device_type(inDeviceID INT)
RETURNS VARCHAR(20)
DETERMINISTIC
BEGIN
    DECLARE DeviceType VARCHAR(20);
    SET DeviceType = (
        SELECT 
            CASE 
                WHEN EXISTS (SELECT 1 FROM Fan WHERE DeviceID = inDeviceID) THEN 'Fan'
                WHEN EXISTS (SELECT 1 FROM Light WHERE DeviceID = inDeviceID) THEN 'Light'
                ELSE 'Unknown'
            END
    );
    RETURN DeviceType;
END $$
DELIMITER ;

-- PROCEDURE to INSERT a SystemMessage
-- DROP PROCEDURE insert_systemMessage
DELIMITER $$
CREATE PROCEDURE insert_systemMessage(
	IN inUserID CHAR(10),
	IN inContent MEDIUMTEXT,
    IN intTime DATETIME
)
BEGIN
	DECLARE newNessID INT;
	INSERT INTO Message(Content, Time, Type)
		VALUES (inContent, intTime, "System");
	SET newNessID = LAST_INSERT_ID();
    INSERT INTO SystemMessage(MessID, userID)
		VALUES (newNessID, inUserID);
END$$
DELIMITER ;

-- PROCEDURE to INSERT a PersonalMessage
-- DROP PROCEDURE insert_personalMessage
DELIMITER $$
CREATE PROCEDURE insert_personalMessage(
	IN inSenderID CHAR(10),
	IN inReceiverID CHAR(10),
	IN inContent MEDIUMTEXT,
    IN intTime DATETIME
)
BEGIN
	DECLARE newNessID INT;
	INSERT INTO Message(Content, Time, Type)
		VALUES (inContent, intTime, "Personal");
	SET newNessID = LAST_INSERT_ID();
    INSERT INTO PersonalMessage(MessID, ReceiverID, SenderID)
		VALUES (newNessID, inReceiverID, inSenderID);
END$$
DELIMITER ;
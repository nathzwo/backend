--database inicial
CREATE database database_esteticaa;

use database_esteticaa;

CREATE TABLE
    users(
        id INT(11) NOT NULL,
        usersname VARCHAR(16) NOT NULL,
        password VARCHAR(60) NOT NULL,
        fullname VARCHAR(100) NOT NULL
    );

ALTER TABLE users
ADD PRIMARY key (id);

ALTER TABLE
    users modify id INT(11) NOT NULL auto_increment,
    auto_increment = 2;

DESCRIBE users;

--table de links
CREATE TABLE
    link(
        id INT(11) NOT NULL,
        title VARCHAR(150) NOT NULL,
        url VARCHAR(255) NOT NULL,
        description text,
        user_id INT(11) NOT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id)
    );

ALTER TABLE link
ADD PRIMARY key (id);

ALTER TABLE
    link modify id INT(11) NOT NULL auto_increment,
    auto_increment = 2;

DESCRIBE link;
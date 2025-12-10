CREATE TABLE poruke (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ime VARCHAR(100),
    prezime VARCHAR(100),
    broj VARCHAR(30),
    poruka TEXT,
    tip_noktiju VARCHAR(50),
    newsletter_email VARCHAR(100),
    datum TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
import { turso } from "../db/config.js";

export async function categoryTable() {
    try {

        turso.execute(`
        CREATE TABLE Category(
            id UUID PRIMARY KEY,
            name VARCHAR(50) NOT NULL,
            is_deleted BOOLEAN NOT NULL DEFAULT FALSE,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
        `);
    } catch (err) {
        console.log(err)
    }
}
async function measure() {
    query = `
    CREATE TABLE Measure(
        _ID BINARY(16) PRIMARY KEY,
        UNIT VARCHAR(50) NOT NULL,
        isDeleted Boolean NOT NULL DEFAULT false
    );
    `;
}
async function createProductTable() {
    query = `
    CREATE TABLE Product(
        _ID BINARY(16) PRIMARY KEY,
        Name VARCHAR(50) NOT NULL,
        CategoryId BINARY(16) NOT NULL,
        FOREIGN KEY (CategoryId) REFERENCES Category(_ID),
         VARCHAR(50) NOT NULL,
        Rate DECIMAL(10,2),
        MeasureId VARCHAR(50) NOT NULL,
        FOREIGN KEY (MeasureId) REFERENCES Measure(_ID),
        Quantity INT,
        IsDeleted Boolean NOT NULL DEFAULT false
    );
    `;
}

async function Receipt() {
    query = `
    CREATE TABLE Receipt(
        _ID BINARY(16) PRIMARY KEY,
        Image BINARY(16),
        IsDeleted Boolean NOT NULL DEFAULT false
    );
    `;
}
async function createTransactionTable() {
    query = `
    CREATE TABLE Transaction(
        _ID BINARY(16) PRIMARY KEY,
        Receipt_ID VARCHAR(50),
        FOREIGN KEY (Receipt_ID) REFERENCES Receipt(_ID),
        Mode VARCHAR(50),
        Date DATE,
        product_id VARCHAR(50),
        FOREIGN KEY (product_id) REFERENCES Product(_ID),
        Amount DECIMAL(10,2) GENERATE ALWAYS AS (((SELECT Rate FROM Product WHERE _ID = product_id) * Quantity) - Discount) STORED,
        Note VARCHAR(30),
        Discount DECIMAL(10,2) DEFAULT 0,
        Quantity INT,
        IsDeleted Boolean NOT NULL DEFAULT false
    );
    `;
}
async function createOrderTable() {
    query = `
    CREATE TABLE Order(
        _ID BINARY(16) PRIMARY KEY,
         Name VARCHAR(50) NOT NULL,
         Purpose VARCHAR(50) NOT NULL,
        Date DATE,
        product_id VARCHAR(50),
        FOREIGN KEY (product_id) REFERENCE Product(_ID),
        Ouantity INT,
        Description VARCHAR(500),
        Amount DECIMAL(10,2) GENERATE ALWAYS AS (((SELECT Rate FROM Product WHERE _ID = product_id) * Quantity) - Discount) STORED,
        IsDeleted Boolean NOT NULL DEFAULT false
    );
    `;
}

// categoryTable();
// measure();
// createProductTable();
// Receipt();
// createTransactionTable();
// createOrderTable();
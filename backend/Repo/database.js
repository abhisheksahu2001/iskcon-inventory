import { turso } from "../db/config.js";

export async function categoryTable() {
    try {
        turso.execute(`
            CREATE TABLE Category (
                id UUID PRIMARY KEY,
                name VARCHAR(50) NOT NULL UNIQUE,
                is_deleted BOOLEAN NOT NULL DEFAULT FALSE,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
            );
        `).then(()=>{
            turso.execute(`
            CREATE TRIGGER IF NOT EXISTS update_category_timestamp
            AFTER UPDATE ON Category
            FOR EACH ROW
            BEGIN
                UPDATE Category SET updated_at = CURRENT_TIMESTAMP WHERE id = OLD.id;
            END;
            `)
        });
    } catch (err) {
        console.log(err);
    }
}

export async function measureTable() {
    try {
        turso.execute(`
            CREATE TABLE Measure (
                id UUID PRIMARY KEY,
                unit VARCHAR(50) NOT NULL UNIQUE,
                is_deleted BOOLEAN NOT NULL DEFAULT FALSE
            );
        `);
    } catch (err) {
        console.log(err);
    }
}

export async function productTable() {
    try {
        turso.execute(`
            CREATE TABLE Product (
                id UUID PRIMARY KEY,
                name VARCHAR(50) NOT NULL,
                category_id UUID NOT NULL,
                price DECIMAL(10, 2) NOT NULL DEFAULT 0,
                measure_id UUID NOT NULL,
                product_quantity INT NOT NULL DEFAULT 0,
                is_deleted BOOLEAN NOT NULL DEFAULT FALSE,
                FOREIGN KEY (category_id) REFERENCES Category(id) ON DELETE SET NULL,
                FOREIGN KEY (measure_id) REFERENCES Measure(id) ON DELETE SET NULL
            );
        `);
    } catch (err) {
        console.log(err);
    }
}

export async function receiptTable() {
    try {
        turso.execute(`
            CREATE TABLE Receipt (
                id UUID PRIMARY KEY,
                image BLOB, 
                is_deleted BOOLEAN NOT NULL DEFAULT FALSE
            );
        `);
    } catch (err) {
        console.log(err);
    }
}

export async function transactionTable() {
    try {
        turso.execute(`
            CREATE TABLE Transactions (
                id UUID PRIMARY KEY,
                receipt_id UUID,
                transactions_mode VARCHAR(50),
                transaction_date DATE NOT NULL DEFAULT CURRENT_DATE,
                product_id UUID,
                gst DECIMAL(10, 2) DEFAULT 0,
                product_quantity INT NOT NULL DEFAULT 0,
                discount DECIMAL(10, 2) DEFAULT 0,
                amount DECIMAL(10, 2) NOT NULL,
                note VARCHAR(255),
                is_deleted BOOLEAN NOT NULL DEFAULT FALSE,
                FOREIGN KEY (product_id) REFERENCES Product(id) ON DELETE SET NULL,
                FOREIGN KEY (receipt_id) REFERENCES Receipt(id) ON DELETE SET NULL
            );
        `)
    } catch (err) {
        console.log(err);
    }
}

export async function orderTable() {
    try {
        turso.execute(`
            CREATE TABLE Orders (
                id UUID PRIMARY KEY,
                name VARCHAR(50) NOT NULL,
                purpose VARCHAR(50) NOT NULL,
                order_date DATE NOT NULL DEFAULT CURRENT_DATE,
                product_id UUID,
                product_quantity INT NOT NULL DEFAULT 0,
                description VARCHAR(500),
                discount DECIMAL(10, 2) DEFAULT 0,
                amount DECIMAL(10, 2) NOT NULL,
                receipt_id UUID,
                is_deleted BOOLEAN NOT NULL DEFAULT FALSE,
                FOREIGN KEY (product_id) REFERENCES Product(id) ON DELETE SET NULL,
                FOREIGN KEY (receipt_id) REFERENCES Receipt(id) ON DELETE SET NULL
            );
        `)
        } catch (err) {
        console.log(err);
    }
}
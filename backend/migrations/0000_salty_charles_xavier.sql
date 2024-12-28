CREATE TABLE `Category` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`is_deleted` integer DEFAULT 0 NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP,
	`updated_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `Category_name_unique` ON `Category` (`name`);--> statement-breakpoint
CREATE INDEX `category_name_idx` ON `Category` (`name`);--> statement-breakpoint
CREATE INDEX `category_id_idx` ON `Category` (`id`);--> statement-breakpoint
CREATE TABLE `Measure` (
	`id` text PRIMARY KEY NOT NULL,
	`unit` text NOT NULL,
	`is_deleted` integer DEFAULT 0 NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP,
	`updated_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `Measure_unit_unique` ON `Measure` (`unit`);--> statement-breakpoint
CREATE INDEX `measure_unit_idx` ON `Measure` (`unit`);--> statement-breakpoint
CREATE INDEX `measure_id_idx` ON `Measure` (`id`);--> statement-breakpoint
CREATE TABLE `Orders` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`purpose` text NOT NULL,
	`order_date` text DEFAULT (CURRENT_DATE) NOT NULL,
	`product_id` text,
	`product_quantity` integer DEFAULT 0 NOT NULL,
	`description` text,
	`discount` real DEFAULT 0,
	`amount` real NOT NULL,
	`receipt_id` text,
	`is_deleted` integer DEFAULT 0 NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP,
	`updated_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	FOREIGN KEY (`product_id`) REFERENCES `Product`(`id`) ON UPDATE no action ON DELETE set null,
	FOREIGN KEY (`receipt_id`) REFERENCES `Receipt`(`id`) ON UPDATE no action ON DELETE set null
);
--> statement-breakpoint
CREATE INDEX `orders_id_idx` ON `Orders` (`id`);--> statement-breakpoint
CREATE INDEX `orders_name_idx` ON `Orders` (`name`);--> statement-breakpoint
CREATE INDEX `orders_product_idx` ON `Orders` (`product_id`);--> statement-breakpoint
CREATE INDEX `orders_receipt_idx` ON `Orders` (`receipt_id`);--> statement-breakpoint
CREATE INDEX `orders_date_idx` ON `Orders` (`order_date`);--> statement-breakpoint
CREATE TABLE `Product` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`category_id` text NOT NULL,
	`price` real DEFAULT 0 NOT NULL,
	`measure_id` text NOT NULL,
	`product_quantity` integer DEFAULT 0 NOT NULL,
	`is_deleted` integer DEFAULT 0 NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP,
	`updated_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	FOREIGN KEY (`category_id`) REFERENCES `Category`(`id`) ON UPDATE no action ON DELETE set null,
	FOREIGN KEY (`measure_id`) REFERENCES `Measure`(`id`) ON UPDATE no action ON DELETE set null
);
--> statement-breakpoint
CREATE INDEX `product_name_idx` ON `Product` (`name`);--> statement-breakpoint
CREATE INDEX `product_id_idx` ON `Product` (`id`);--> statement-breakpoint
CREATE INDEX `product_category_idx` ON `Product` (`category_id`);--> statement-breakpoint
CREATE INDEX `product_measure_idx` ON `Product` (`measure_id`);--> statement-breakpoint
CREATE TABLE `Receipt` (
	`id` text PRIMARY KEY NOT NULL,
	`image` text,
	`is_deleted` integer DEFAULT 0 NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP,
	`updated_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE INDEX `receipt_id_idx` ON `Receipt` (`id`);--> statement-breakpoint
CREATE TABLE `Transactions` (
	`id` text PRIMARY KEY NOT NULL,
	`receipt_id` text,
	`transactions_mode` text,
	`transaction_date` text DEFAULT (CURRENT_DATE) NOT NULL,
	`product_id` text,
	`rate` real NOT NULL,
	`gst` real DEFAULT 0,
	`product_quantity` integer DEFAULT 0 NOT NULL,
	`discount` real DEFAULT 0,
	`amount` real NOT NULL,
	`note` text,
	`is_deleted` integer DEFAULT 0 NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP,
	`updated_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	FOREIGN KEY (`receipt_id`) REFERENCES `Receipt`(`id`) ON UPDATE no action ON DELETE set null,
	FOREIGN KEY (`product_id`) REFERENCES `Product`(`id`) ON UPDATE no action ON DELETE set null
);
--> statement-breakpoint
CREATE INDEX `transactions_id_idx` ON `Transactions` (`id`);--> statement-breakpoint
CREATE INDEX `transactions_receipt_idx` ON `Transactions` (`receipt_id`);--> statement-breakpoint
CREATE INDEX `transactions_product_idx` ON `Transactions` (`product_id`);--> statement-breakpoint
CREATE INDEX `transactions_date_idx` ON `Transactions` (`transaction_date`);
CREATE TABLE `deans_vote` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`email` varchar(256) NOT NULL,
	`grade` varchar(256),
	`raffleEntry` boolean,
	`option` varchar(256) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `deans_vote_id` PRIMARY KEY(`id`)
);

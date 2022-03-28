-- User Table 
CREATE TABLE IF NOT EXISTS `user` (
  `id` integer not null primary key autoincrement,
  `username` text not null,
  `email` text not null,
  `created_at` datetime not null default CURRENT_TIMESTAMP,
  `updated_at` datetime not null default CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS `simple_main` (
  `id` integer not null primary key autoincrement,
  `surah` integer not null default 0,
  `ayah` integer not null default 0,
  `text` TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS `simple_plain` (
  `id` integer not null primary key autoincrement,
  `surah` integer not null default 0,
  `ayah` integer not null default 0,
  `text` TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS `simple_minimal` (
  `id` integer not null primary key autoincrement,
  `surah` integer not null default 0,
  `ayah` integer not null default 0,
  `text` TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS `simple_clean` (
  `id` integer not null primary key autoincrement,
  `surah` integer not null default 0,
  `ayah` integer not null default 0,
  `text` TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS `uthmani` (
  `id` integer not null primary key autoincrement,
  `surah` integer not null default 0,
  `ayah` integer not null default 0,
  `text` TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS `uthmani_minimal` (
  `id` integer not null primary key autoincrement,
  `surah` integer not null default 0,
  `ayah` integer not null default 0,
  `text` TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS `ayah` (
  `id` integer not null primary key autoincrement,
  `surah` integer not null default 0,
  `ayah` integer not null default 0,
  `simple_id` integer,
  `simple_plain_id` integer,
  `simple_minimal_id` integer,
  `simple_clean_id` integer,
  `uthmani_id` integer,
  `uthmani_minimal_id` integer,
  FOREIGN KEY (simple_id) REFERENCES simple_main(id),
  FOREIGN KEY (simple_plain_id) REFERENCES simple_plain(id),
  FOREIGN KEY (simple_minimal_id) REFERENCES simple_minimal(id),
  FOREIGN KEY (simple_clean_id) REFERENCES simple_clean(id),
  FOREIGN KEY (uthmani_id) REFERENCES uthmani(id),
  FOREIGN KEY (uthmani_minimal_id) REFERENCES uthmani_minimal(id)
);

CREATE TABLE IF NOT EXISTS `surah` (
  `id` integer not null primary key autoincrement,
  `arabic` text NOT NULL,
  `english` text NOT NULL,
  `place` text NOT NULL
);

create table `translations` (
  `id` integer not null primary key autoincrement,
  `translator` TEXT null,
  `title` TEXT null,
  `language` TEXT null default en,
  `translation_id` TEXT NOT NULL,
  `table_name` TEXT NOT NULL,
  `created_at` datetime not null default CURRENT_TIMESTAMP,
  `updated_at` datetime not null default CURRENT_TIMESTAMP
);


create table `transliteration` (
  `index` integer not null primary key autoincrement,
  `surah` TEXT not null,
  `ayah` TEXT not null,
  `text` TEXT not null
);



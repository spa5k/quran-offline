-- User Table 
create table `user` (
  `id` integer not null primary key autoincrement,
  `username` TEXT not null,
  `email` varchar(255) not null,
  `created_at` datetime not null default CURRENT_TIMESTAMP,
  `updated_at` datetime not null default CURRENT_TIMESTAMP
);

create table `simple` (
  `index` integer not null primary key autoincrement,
  `surah` integer not null default 0,
  `ayah` integer not null default 0,
  `text` text not null
);

create table `uthmanic` (
  `index` integer not null primary key autoincrement,
  `surah` integer not null default 0,
  `ayah` integer not null default 0,
  `text` text not null
);




INSERT INTO `translations` (`translator`, `title`, `language`,`translation_id`,`table_name`) VALUES
('Saheeh International', 'Saheeh International', 'English','en.sahih','en_sahih');

DROP TABLE IF EXISTS `en_sahih`;
CREATE TABLE `en_sahih` (
  `index` integer not null primary key autoincrement,
  `surah` int(3) NOT NULL default '0',
  `ayah` int(3) NOT NULL default '0',
  `text` text NOT NULL
);




INSERT INTO
  `translations` (
    `translator`,
    `title`,
    `language`,
    `translation_id`,
    `table_name`
  )
VALUES
  (
    'Muhammad Hamidullah',
    'Hamidullah',
    'French',
    'fr.hamidullah',
    'fr_hamidullah'
  );

DROP TABLE IF EXISTS `fr_hamidullah`;

CREATE TABLE `fr_hamidullah` (
  `index` integer not null primary key autoincrement,
  `surah` int(3) NOT NULL default '0',
  `ayah` int(3) NOT NULL default '0',
  `text` text NOT NULL
);



INSERT INTO `translations` (`translator`, `title`, `language`,`translation_id`,`table_name`) VALUES
('Hasan Efendi Nahi', 'Efendi Nahi', 'Albanian','sq.nahi','sq_nahi');

DROP TABLE IF EXISTS `sq_nahi`;
CREATE TABLE `sq_nahi` (
  `index` integer not null primary key autoincrement,
  `surah` int(3) NOT NULL default '0',
  `ayah` int(3) NOT NULL default '0',
  `text` text NOT NULL
);




INSERT INTO `translations` (`translator`, `title`, `language`,`translation_id`,`table_name`) VALUES
('Muhammad Farooq Khan and Muhammad Ahmed', 'फ़ारूक़ ख़ान & अहमद', 'Hindi','hi.farooq','hi_farooq');

DROP TABLE IF EXISTS `hi_farooq`;
CREATE TABLE `hi_farooq` (
  `index` integer not null primary key autoincrement,
  `surah` int(3) NOT NULL default '0',
  `ayah` int(3) NOT NULL default '0',
  `text` text NOT NULL
);



INSERT INTO `translations` (`translator`, `title`, `language`,`translation_id`,`table_name`) VALUES
('Suhel Farooq Khan and Saifur Rahman Nadwi', 'फ़ारूक़ ख़ान & नदवी', 'Hindi','hi.hindi','hi_hindi');

DROP TABLE IF EXISTS `hi_hindi`;
CREATE TABLE `hi_hindi` (
  `index` integer not null primary key autoincrement,
  `surah` int(3) NOT NULL default '0',
  `ayah` int(3) NOT NULL default '0',
  `text` text NOT NULL
);



INSERT INTO `translations` (`translator`, `title`, `language`,`translation_id`,`table_name`) VALUES
('Ma Jian', 'Ma Jian', 'Chinese','zh.jian','zh_jian');

DROP TABLE IF EXISTS `zh_jian`;
CREATE TABLE `zh_jian` (
  `index` integer not null primary key autoincrement,
  `surah` int(3) NOT NULL default '0',
  `ayah` int(3) NOT NULL default '0',
  `text` text NOT NULL
);






INSERT INTO `translations` (`translator`, `title`, `language`,`translation_id`,`table_name`) VALUES
('Ramdane At Mansour', 'At Mensur', 'Amazigh','ber.mensur','ber_mensur');

DROP TABLE IF EXISTS `ber_mensur`;
CREATE TABLE `ber_mensur` (
  `index` integer not null primary key autoincrement,
  `surah` int(3) NOT NULL default '0',
  `ayah` int(3) NOT NULL default '0',
  `text` text NOT NULL
);



INSERT INTO `translations` (`translator`, `title`, `language`,`translation_id`,`table_name`) VALUES
('Jalal ad-Din al-Mahalli and Jalal ad-Din as-Suyuti', 'تفسير الجلالين', 'Arabic','ar.jalalayn','ar_jalalayn');

DROP TABLE IF EXISTS `ar_jalalayn`;
CREATE TABLE `ar_jalalayn` (
  `index` integer not null primary key autoincrement,
  `surah` int(3) NOT NULL default '0',
  `ayah` int(3) NOT NULL default '0',
  `text` text NOT NULL
);





INSERT INTO `translations` (`translator`, `title`, `language`,`translation_id`,`table_name`) VALUES
('Zohurul Hoque', 'জহুরুল হক', 'Bengali','bn.hoque','bn_hoque');

DROP TABLE IF EXISTS `bn_hoque`;
CREATE TABLE `bn_hoque` (
  `index` integer not null primary key autoincrement,
  `surah` int(3) NOT NULL default '0',
  `ayah` int(3) NOT NULL default '0',
  `text` text NOT NULL
);







INSERT INTO `translations` (`translator`, `title`, `language`,`translation_id`,`table_name`) VALUES
('Besim Korkut', 'Korkut', 'Bosnian','bs.korkut','bs_korkut');

DROP TABLE IF EXISTS `bs_korkut`;
CREATE TABLE `bs_korkut` (
  `index` integer not null primary key autoincrement,
  `surah` int(3) NOT NULL default '0',
  `ayah` int(3) NOT NULL default '0',
  `text` text NOT NULL
);







INSERT INTO `translations` (`translator`, `title`, `language`,`translation_id`,`table_name`) VALUES
('Tzvetan Theophanov', 'Теофанов', 'Bulgarian','bg.theophanov','bg_theophanov');

DROP TABLE IF EXISTS `bg_theophanov`;
CREATE TABLE `bg_theophanov` (
  `index` integer not null primary key autoincrement,
  `surah` int(3) NOT NULL default '0',
  `ayah` int(3) NOT NULL default '0',
  `text` text NOT NULL
);





INSERT INTO `translations` (`translator`, `title`, `language`,`translation_id`,`table_name`) VALUES
('Preklad I. Hrbek', 'Hrbek', 'Czech','cs.hrbek','cs_hrbek');

DROP TABLE IF EXISTS `cs_hrbek`;
CREATE TABLE `cs_hrbek` (
  `index` integer not null primary key autoincrement,
  `surah` int(3) NOT NULL default '0',
  `ayah` int(3) NOT NULL default '0',
  `text` text NOT NULL
);




INSERT INTO `translations` (`translator`, `title`, `language`,`translation_id`,`table_name`) VALUES
('Office of the President of Maldives', 'ދިވެހި', 'Divehi','dv.divehi','dv_divehi');

DROP TABLE IF EXISTS `dv_divehi`;
CREATE TABLE `dv_divehi` (
  `index` integer not null primary key autoincrement,
  `surah` int(3) NOT NULL default '0',
  `ayah` int(3) NOT NULL default '0',
  `text` text NOT NULL
);





INSERT INTO `translations` (`translator`, `title`, `language`,`translation_id`,`table_name`) VALUES
('Salomo Keyzer', 'Keyzer', 'Dutch','nl.keyzer','nl_keyzer');

DROP TABLE IF EXISTS `nl_keyzer`;
CREATE TABLE `nl_keyzer` (
  `index` integer not null primary key autoincrement,
  `surah` int(3) NOT NULL default '0',
  `ayah` int(3) NOT NULL default '0',
  `text` text NOT NULL
);





INSERT INTO `translations` (`translator`, `title`, `language`,`translation_id`,`table_name`) VALUES
('Ahmed Ali', 'Ahmed Ali', 'English','en.ahmedali','en_ahmedali');

DROP TABLE IF EXISTS `en_ahmedali`;
CREATE TABLE `en_ahmedali` (
  `index` integer not null primary key autoincrement,
  `surah` int(3) NOT NULL default '0',
  `ayah` int(3) NOT NULL default '0',
  `text` text NOT NULL
);





INSERT INTO `translations` (`translator`, `title`, `language`,`translation_id`,`table_name`) VALUES
('Safi-ur-Rahman al-Mubarakpuri', 'Mubarakpuri', 'English','en.mubarakpuri','en_mubarakpuri');

DROP TABLE IF EXISTS `en_mubarakpuri`;
CREATE TABLE `en_mubarakpuri` (
  `index` integer not null primary key autoincrement,
  `surah` int(3) NOT NULL default '0',
  `ayah` int(3) NOT NULL default '0',
  `text` text NOT NULL
);






INSERT INTO `translations` (`translator`, `title`, `language`,`translation_id`,`table_name`) VALUES
('Abu Rida Muhammad ibn Ahmad ibn Rassoul', 'Abu Rida', 'German','de.aburida','de_aburida');

DROP TABLE IF EXISTS `de_aburida`;
CREATE TABLE `de_aburida` (
  `index` integer not null primary key autoincrement,
  `surah` int(3) NOT NULL default '0',
  `ayah` int(3) NOT NULL default '0',
  `text` text NOT NULL
);









INSERT INTO `translations` (`translator`, `title`, `language`,`translation_id`,`table_name`) VALUES
('Abubakar Mahmoud Gumi', 'Gumi', 'Hausa','ha.gumi','ha_gumi');

DROP TABLE IF EXISTS `ha_gumi`;
CREATE TABLE `ha_gumi` (
  `index` integer not null primary key autoincrement,
  `surah` int(3) NOT NULL default '0',
  `ayah` int(3) NOT NULL default '0',
  `text` text NOT NULL
);










INSERT INTO `translations` (`translator`, `title`, `language`,`translation_id`,`table_name`) VALUES
('Indonesian Ministry of Religious Affairs', 'Bahasa Indonesia', 'Indonesian','id.indonesian','id_indonesian');

DROP TABLE IF EXISTS `id_indonesian`;
CREATE TABLE `id_indonesian` (
  `index` integer not null primary key autoincrement,
  `surah` int(3) NOT NULL default '0',
  `ayah` int(3) NOT NULL default '0',
  `text` text NOT NULL
);









INSERT INTO `translations` (`translator`, `title`, `language`,`translation_id`,`table_name`) VALUES
('Hamza Roberto Piccardo', 'Piccardo', 'Italian','it.piccardo','it_piccardo');

DROP TABLE IF EXISTS `it_piccardo`;
CREATE TABLE `it_piccardo` (
  `index` integer not null primary key autoincrement,
  `surah` int(3) NOT NULL default '0',
  `ayah` int(3) NOT NULL default '0',
  `text` text NOT NULL
);











INSERT INTO `translations` (`translator`, `title`, `language`,`translation_id`,`table_name`) VALUES
('Unknown', 'Japanese', 'Japanese','ja.japanese','ja_japanese');

DROP TABLE IF EXISTS `ja_japanese`;
CREATE TABLE `ja_japanese` (
  `index` integer not null primary key autoincrement,
  `surah` int(3) NOT NULL default '0',
  `ayah` int(3) NOT NULL default '0',
  `text` text NOT NULL
);











INSERT INTO `translations` (`translator`, `title`, `language`,`translation_id`,`table_name`) VALUES
('Unknown', 'Korean', 'Korean','ko.korean','ko_korean');

DROP TABLE IF EXISTS `ko_korean`;
CREATE TABLE `ko_korean` (
  `index` integer not null primary key autoincrement,
  `surah` int(3) NOT NULL default '0',
  `ayah` int(3) NOT NULL default '0',
  `text` text NOT NULL
);










INSERT INTO `translations` (`translator`, `title`, `language`,`translation_id`,`table_name`) VALUES
('Burhan Muhammad-Amin', 'ته‌فسیری ئاسان', 'Kurdish','ku.asan','ku_asan');

DROP TABLE IF EXISTS `ku_asan`;
CREATE TABLE `ku_asan` (
  `index` integer not null primary key autoincrement,
  `surah` int(3) NOT NULL default '0',
  `ayah` int(3) NOT NULL default '0',
  `text` text NOT NULL
);









INSERT INTO `translations` (`translator`, `title`, `language`,`translation_id`,`table_name`) VALUES
('Abdullah Muhammad Basmeih', 'Basmeih', 'Malay','ms.basmeih','ms_basmeih');

DROP TABLE IF EXISTS `ms_basmeih`;
CREATE TABLE `ms_basmeih` (
  `index` integer not null primary key autoincrement,
  `surah` int(3) NOT NULL default '0',
  `ayah` int(3) NOT NULL default '0',
  `text` text NOT NULL
);







INSERT INTO `translations` (`translator`, `title`, `language`,`translation_id`,`table_name`) VALUES
('Cheriyamundam Abdul Hameed and Kunhi Mohammed Parappoor', 'അബ്ദുല്‍ ഹമീദ് & പറപ്പൂര്‍', 'Malayalam','ml.abdulhameed','ml_abdulhameed');

DROP TABLE IF EXISTS `ml_abdulhameed`;
CREATE TABLE `ml_abdulhameed` (
  `index` integer not null primary key autoincrement,
  `surah` int(3) NOT NULL default '0',
  `ayah` int(3) NOT NULL default '0',
  `text` text NOT NULL
);










INSERT INTO `translations` (`translator`, `title`, `language`,`translation_id`,`table_name`) VALUES
('Einar Berg', 'Einar Berg', 'Norwegian','no.berg','no_berg');

DROP TABLE IF EXISTS `no_berg`;
CREATE TABLE `no_berg` (
  `index` integer not null primary key autoincrement,
  `surah` int(3) NOT NULL default '0',
  `ayah` int(3) NOT NULL default '0',
  `text` text NOT NULL
);









INSERT INTO `translations` (`translator`, `title`, `language`,`translation_id`,`table_name`) VALUES
('Abdulwali Khan', 'عبدالولي', 'Pashto','ps.abdulwali','ps_abdulwali');

DROP TABLE IF EXISTS `ps_abdulwali`;
CREATE TABLE `ps_abdulwali` (
  `index` integer not null primary key autoincrement,
  `surah` int(3) NOT NULL default '0',
  `ayah` int(3) NOT NULL default '0',
  `text` text NOT NULL
);










INSERT INTO `translations` (`translator`, `title`, `language`,`translation_id`,`table_name`) VALUES
('Hussain Ansarian', 'انصاریان', 'Persian','fa.ansarian','fa_ansarian');

DROP TABLE IF EXISTS `fa_ansarian`;
CREATE TABLE `fa_ansarian` (
  `index` integer not null primary key autoincrement,
  `surah` int(3) NOT NULL default '0',
  `ayah` int(3) NOT NULL default '0',
  `text` text NOT NULL
);







INSERT INTO `translations` (`translator`, `title`, `language`,`translation_id`,`table_name`) VALUES
('Józefa Bielawskiego', 'Bielawskiego', 'Polish','pl.bielawskiego','pl_bielawskiego');

DROP TABLE IF EXISTS `pl_bielawskiego`;
CREATE TABLE `pl_bielawskiego` (
  `index` integer not null primary key autoincrement,
  `surah` int(3) NOT NULL default '0',
  `ayah` int(3) NOT NULL default '0',
  `text` text NOT NULL
);







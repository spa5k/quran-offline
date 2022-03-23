-- This will add to the column surah and ayah of table surahs one by one as they are in table simple_main
-- This will be used to create table surah_and_ayah
INSERT INTO ayah (surah, ayah, simple_id, simple_clean_id,simple_minimal_id,simple_plain_id,uthmani_minimal_id,uthmani_id)
SELECT surah, ayah, id as a, id as b, id as c, id as d, id as e, id as f FROM simple_main;
;

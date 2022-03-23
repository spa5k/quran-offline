-- This will drop surah and ayah column from simple_main, simple_minimal, simple_plain, simple_clean, uthmani, uthmani_minimal
ALTER TABLE simple_main DROP COLUMN surah;
ALTER TABLE simple_main DROP COLUMN ayah;
ALTER TABLE simple_minimal DROP COLUMN surah;
ALTER TABLE simple_minimal DROP COLUMN ayah;
ALTER TABLE simple_plain DROP COLUMN surah;
ALTER TABLE simple_plain DROP COLUMN ayah;
ALTER TABLE simple_clean DROP COLUMN surah;
ALTER TABLE simple_clean DROP COLUMN ayah;
ALTER TABLE uthmani DROP COLUMN surah;
ALTER TABLE uthmani DROP COLUMN ayah;
ALTER TABLE uthmani_minimal DROP COLUMN surah;
ALTER TABLE uthmani_minimal DROP COLUMN ayah;


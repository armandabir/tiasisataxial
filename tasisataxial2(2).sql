-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Aug 10, 2025 at 08:00 PM
-- Server version: 8.0.31
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tasisataxial2`
--

-- --------------------------------------------------------

--
-- Table structure for table `articles`
--

DROP TABLE IF EXISTS `articles`;
CREATE TABLE IF NOT EXISTS `articles` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `cat_id` bigint UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `pic` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `content` varchar(1000) COLLATE utf8mb4_general_ci NOT NULL,
  `publish` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `articles`
--

INSERT INTO `articles` (`id`, `cat_id`, `title`, `slug`, `pic`, `content`, `publish`, `created_at`, `updated_at`) VALUES
(1, 3, 'ایمنی مهندسین111', 'ایمنی-مهندسین111', '1012.jpg', '<p>ایمنی مهندسین ایمنی مهندسین ایمنی مهندسین ایمنی مهندسین ایمنی مهندسین ایمنی مهندسین ایمنی مهندسین ایمنی مهندسین ایمنی مهندسین ایمنی مهندسین ایمنی مهندسین ایمنی مهندسین ایمنی مهندسین ایمنی مهندسین ایمنی مهندسین ایمنی مهندسین ایمنی مهندسین ایمنی مهندسین&nbsp;</p><figure class=\"image image_resized\" style=\"width:54.06%;\"><img src=\"http://127.0.0.1:3000/storage/articles/470licensed-image.jpg\" srcset=\"http://127.0.0.1:3000/storage/articles/470licensed-image.jpg 500w\" sizes=\"100vw\" width=\"500\"></figure>', 1, '2025-07-20 14:36:41', '2025-08-09 18:27:05'),
(2, 4, 'مقاله ایمنی جالب', 'مقاله-ایمنی-جالب', '327pxfuel(53).jpg', '<p>تست ایمنی مهندسین تست ایمنی مهندسین تست ایمنی مهندسین تست ایمنی مهندسین تست ایمنی مهندسین تست ایمنی مهندسین تست ایمنی مهندسین تست ایمنی مهندسین تست ایمنی مهندسین تست ایمنی مهندسین تست ایمنی مهندسین تست ایمنی مهندسین تست ایمنی مهندسین تست ایمنی مهندسین تست ایمنی مهندسین تست ایمنی مهندسین تست ایمنی مهندسین تست ایمنی مهندسین تست ایمنی مهندسین تست ایمنی مهندسین تست ایمنی مهندسین&nbsp;</p><figure class=\"image image-style-side\"><img src=\"http://127.0.0.1:3000/storage/articles/606pxfuel(37).jpg\" srcset=\"http://127.0.0.1:3000/storage/articles/606pxfuel(37).jpg 500w\" sizes=\"100vw\" width=\"500\"></figure>', 1, '2025-07-23 14:53:14', '2025-08-09 18:33:58'),
(3, 4, 'ایمنی مهندسین آرمان', 'ایمنی-مهندسین-آرمان', '1012.jpg', '<p>ایمنی مهندسین ایمنی مهندسین ایمنی مهندسین ایمنی مهندسین ایمنی مهندسین ایمنی مهندسین ایمنی مهندسین ایمنی مهندسین ایمنی مهندسین ایمنی مهندسین ایمنی مهندسین ایمنی مهندسین ایمنی مهندسین ایمنی مهندسین ایمنی مهندسین ایمنی مهندسین ایمنی مهندسین ایمنی مهندسین&nbsp;</p><figure class=\"image image_resized\" style=\"width:54.06%;\"><img src=\"http://127.0.0.1:3000/storage/articles/470licensed-image.jpg\" srcset=\"http://127.0.0.1:3000/storage/articles/470licensed-image.jpg 500w\" sizes=\"100vw\" width=\"500\"></figure>', 1, '2025-07-20 14:36:41', '2025-08-09 18:27:50'),
(4, 3, 'مقاله ایمنی', 'مقاله-ایمنی', '327pxfuel(53).jpg', '<p>تست ایمنی مهندسین تست ایمنی مهندسین تست ایمنی مهندسین تست ایمنی مهندسین تست ایمنی مهندسین تست ایمنی مهندسین تست ایمنی مهندسین تست ایمنی مهندسین تست ایمنی مهندسین تست ایمنی مهندسین تست ایمنی مهندسین تست ایمنی مهندسین تست ایمنی مهندسین تست ایمنی مهندسین تست ایمنی مهندسین تست ایمنی مهندسین تست ایمنی مهندسین تست ایمنی مهندسین تست ایمنی مهندسین تست ایمنی مهندسین تست ایمنی مهندسین&nbsp;</p><figure class=\"image image-style-side\"><img src=\"http://127.0.0.1:3000/storage/articles/606pxfuel(37).jpg\" srcset=\"http://127.0.0.1:3000/storage/articles/606pxfuel(37).jpg 500w\" sizes=\"100vw\" width=\"500\"></figure>', 1, '2025-07-23 14:53:14', '2025-07-23 14:53:23');

-- --------------------------------------------------------

--
-- Table structure for table `article_tag`
--

DROP TABLE IF EXISTS `article_tag`;
CREATE TABLE IF NOT EXISTS `article_tag` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `article_id` bigint UNSIGNED NOT NULL,
  `tag_id` bigint UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `article_tag_article_id_foreign` (`article_id`),
  KEY `article_tag_tag_id_foreign` (`tag_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
CREATE TABLE IF NOT EXISTS `categories` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `pic` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `parent_id` int NOT NULL,
  `maincat_id` bigint UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `categories_maincat_id_foreign` (`maincat_id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `pic`, `description`, `parent_id`, `maincat_id`, `created_at`, `updated_at`) VALUES
(1, 'دسته محصول 1', NULL, 'دسته محصول 1 دسته محصول 1 دسته محصول 1 دسته محصول 1 دسته محصول 1 دسته محصول 1 دسته محصول 1 دسته محصول 1 دسته محصول 1 دسته محصول 1', 0, 2, '2025-07-20 14:27:44', '2025-07-20 14:27:44'),
(2, 'مصالح', '5112.jpg', 'مصالح مصالح مصالح مصالح مصالح مصالح مصالح مصالح مصالح مصالح مصالح مصالح مصالح مصالح مصالح مصالح مصالح مصالح مصالح مصالح', 1, 2, '2025-07-20 14:28:52', '2025-07-20 14:28:52'),
(3, 'مقالات', NULL, NULL, 0, 1, '2025-07-20 14:30:14', '2025-07-20 14:30:14'),
(4, 'ایمنی مهندسین', NULL, NULL, 0, 1, '2025-07-23 14:51:47', '2025-07-23 14:51:47'),
(5, 'دسته پروژه 1', NULL, 'دسته پروژه 1دسته پروژه 1دسته پروژه 1دسته پروژه 1دسته پروژه 1دسته پروژه 1دسته پروژه 1', 0, 3, '2025-08-09 18:09:45', '2025-08-09 18:09:45'),
(6, 'دسته پروژه 2', NULL, NULL, 0, 3, '2025-08-10 11:40:44', '2025-08-10 11:40:44');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
CREATE TABLE IF NOT EXISTS `failed_jobs` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `uuid` varchar(191) COLLATE utf8mb4_general_ci NOT NULL,
  `connection` text COLLATE utf8mb4_general_ci NOT NULL,
  `queue` text COLLATE utf8mb4_general_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_general_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_general_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `migration` varchar(191) COLLATE utf8mb4_general_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2022_11_12_145401_create_views_table', 1),
(6, '2022_12_12_202127_create_articles_table', 1),
(7, '2022_12_15_135532_create_tags_table', 1),
(8, '2022_12_18_195733_create_article_tag_table', 1),
(9, '2023_04_14_153338_create_categories_table', 1),
(10, '2024_08_08_153639_create_products_table', 1),
(11, '2024_08_26_204723_create_product_tag_table', 1),
(12, '2024_11_17_204320_create_orders_table', 1),
(13, '2024_11_17_204342_create_order_details_table', 1),
(14, '2025_07_29_123045_create_pages_table', 2),
(15, '2025_08_07_101315_create_pages_table', 3),
(16, '2025_08_09_183333_create_projects_table', 4);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
CREATE TABLE IF NOT EXISTS `orders` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `count` int NOT NULL,
  `price` int NOT NULL,
  `user_id` int NOT NULL,
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `referenceId` varchar(1000) COLLATE utf8mb4_general_ci NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `done` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`)
) ENGINE=MyISAM AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `count`, `price`, `user_id`, `description`, `referenceId`, `status`, `done`, `created_at`, `updated_at`) VALUES
(33, 1, 340000, 1, NULL, '1642401', 'OK', 0, '2025-07-25 08:29:51', '2025-07-25 08:29:51'),
(34, 1, 14000000, 1, NULL, '1642901', 'OK', 0, '2025-07-25 08:35:36', '2025-07-25 08:35:36'),
(35, 1, 340000, 1, NULL, '1643201', 'OK', 0, '2025-07-25 08:37:17', '2025-07-25 08:37:17'),
(36, 1, 14000000, 2, NULL, '1676001', 'OK', 0, '2025-07-25 14:41:05', '2025-07-25 14:41:05');

-- --------------------------------------------------------

--
-- Table structure for table `order_details`
--

DROP TABLE IF EXISTS `order_details`;
CREATE TABLE IF NOT EXISTS `order_details` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `order_id` bigint UNSIGNED NOT NULL,
  `product_id` bigint UNSIGNED NOT NULL,
  `qty` int NOT NULL,
  `price` int NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `order_details_order_id_foreign` (`order_id`),
  KEY `order_details_product_id_foreign` (`product_id`)
) ENGINE=MyISAM AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `order_details`
--

INSERT INTO `order_details` (`id`, `order_id`, `product_id`, `qty`, `price`, `created_at`, `updated_at`) VALUES
(33, 36, 1, 1, 14000000, '2025-07-25 14:41:05', '2025-07-25 14:41:05'),
(32, 35, 2, 2, 340000, '2025-07-25 08:37:17', '2025-07-25 08:37:17'),
(31, 34, 1, 1, 14000000, '2025-07-25 08:35:36', '2025-07-25 08:35:36'),
(30, 33, 2, 2, 340000, '2025-07-25 08:29:51', '2025-07-25 08:29:51');

-- --------------------------------------------------------

--
-- Table structure for table `pages`
--

DROP TABLE IF EXISTS `pages`;
CREATE TABLE IF NOT EXISTS `pages` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `page_id` int NOT NULL,
  `sect_id` int NOT NULL,
  `sect_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `pic` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `desc` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `pages`
--

INSERT INTO `pages` (`id`, `page_id`, `sect_id`, `sect_name`, `title`, `pic`, `desc`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 'slider', NULL, '[\"978pxfuel(4).jpg\",\"80profile.jpg\",\"934pxfuel(1).jpg\",\"774pxfuel(6).jpg\"]', NULL, NULL, '2025-08-10 10:59:27'),
(18, 2, 0, 'خدمات', 'خدمات 1', '221pxfuel(53).jpg', 'خدمات 1خدمات 1خدمات 1خدمات 1خدمات 1خدمات 1خدمات 1خدمات 1خدمات 1خدمات 1خدمات 1خدمات 1خدمات 1خدمات 1خدمات 1خدمات 1خدمات 1خدمات 1خدمات 1', '2025-08-10 14:45:26', '2025-08-10 14:45:26'),
(13, 1, 2, 'ارائه خدمات مهندسی', 'تست 2222', NULL, 'تست 2222تست 2222تست 2222تست 2222تست 2222تست 2222تست 2222', '2025-08-09 14:09:10', '2025-08-09 14:09:10'),
(16, 1, 3, 'نمایندگی فروش', 'تست 2222', '391pxfuel(4).jpg', NULL, '2025-08-10 10:15:10', '2025-08-10 10:15:10'),
(17, 1, 2, 'ارائه خدمات مهندسی', 'نمایندگی 1', NULL, 'نمایندگی 1نمایندگی 1نمایندگی 1نمایندگی 1نمایندگی 1نمایندگی 1نمایندگی 1نمایندگی 1نمایندگی 1نمایندگی 1نمایندگی 1نمایندگی 1نمایندگی 1نمایندگی 1نمایندگی 1نمایندگی 1', '2025-08-10 10:59:58', '2025-08-10 10:59:58'),
(19, 2, 0, 'خدمات', 'خدمات 32', '228pxfuel(44).jpg', '<p>خدمات 2خدمات 2خدمات 2خدمات 2خدمات 2خدمات 2خدمات 2خدمات 2خدمات 2خدمات 2خدمات 2خدمات 2خدمات 2خدمات 2خدمات 2</p>', '2025-08-10 14:46:43', '2025-08-10 14:47:37'),
(20, 3, 1, 'تماس با ما', 'با ما آشنا شوید', NULL, 'با ما آشنا شوید با ما آشنا شوید با ما آشنا شوید با ما آشنا شوید با ما آشنا شوید با ما آشنا شوید با ما آشنا شوید با ما آشنا شوید با ما آشنا شوید با ما آشنا شوید با ما آشنا شوید با ما آشنا شوید با ما آشنا شوید با ما آشنا شوید با ما آشنا شوید با ما آشنا شوید با ما آشنا شوید با ما آشنا شوید با ما آشنا شوید با ما آشنا شوید', '2025-08-10 15:36:47', '2025-08-10 16:20:02'),
(21, 3, 2, 'تماس با ما', 'تست 2222', NULL, NULL, '2025-08-10 15:44:01', '2025-08-10 15:44:01'),
(22, 3, 2, 'تماس با ما', 'تست 3333', NULL, NULL, '2025-08-10 15:44:07', '2025-08-10 15:44:07'),
(23, 3, 2, 'تماس با ما', 'تست 4444', NULL, NULL, '2025-08-10 15:44:15', '2025-08-10 15:44:15'),
(24, 3, 2, 'تماس با ما', 'تست 33333', NULL, NULL, '2025-08-10 15:44:21', '2025-08-10 15:44:21'),
(25, 3, 3, 'تماس با ما', 'اهداف و ماموریت', NULL, 'اهداف و ماموریت اهداف و ماموریت اهداف و ماموریت اهداف و ماموریت اهداف و ماموریت اهداف و ماموریت اهداف و ماموریت اهداف و ماموریت اهداف و ماموریت اهداف و ماموریت اهداف و ماموریت اهداف و ماموریت اهداف و ماموریت اهداف و ماموریت اهداف و ماموریت', '2025-08-10 15:45:08', '2025-08-10 15:45:08'),
(26, 3, 4, 'تماس با ما', 'هدف 1', NULL, 'هدف 1هدف 1هدف 1هدف 1هدف 1هدف 1هدف 1هدف 1هدف 1هدف 1هدف 1هدف 1هدف 1هدف 1هدف 1هدف 1هدف 1هدف 1هدف 1', '2025-08-10 15:46:00', '2025-08-10 15:46:00'),
(27, 3, 4, 'تماس با ما', 'هدف 2', NULL, 'هدف 2هدف 2هدف 2هدف 2هدف 2هدف 2هدف 2هدف 2هدف 2هدف 2هدف 2هدف 2هدف 2هدف 2هدف 2هدف 2هدف 2هدف 2هدف 2هدف 2هدف 2هدف 2هدف 2هدف 2', '2025-08-10 15:46:08', '2025-08-10 15:46:08'),
(28, 3, 4, 'تماس با ما', 'هدف 3', NULL, 'هدف 2هدف 2هدف 2هدف 2هدف 2هدف 2هدف 2هدف 2هدف 2هدف 2هدف 2هدف 2هدف 2هدف 2هدف 2هدف 2هدف 2هدف 2هدف 2هدف 2هدف 2', '2025-08-10 15:46:15', '2025-08-10 15:46:15');

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
CREATE TABLE IF NOT EXISTS `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_general_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_general_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
CREATE TABLE IF NOT EXISTS `personal_access_tokens` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(191) COLLATE utf8mb4_general_ci NOT NULL,
  `tokenable_id` bigint UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_general_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_general_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_general_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `pic` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `price` int NOT NULL,
  `content` varchar(1000) COLLATE utf8mb4_general_ci NOT NULL,
  `publish` tinyint(1) NOT NULL DEFAULT '0',
  `cat_id` bigint UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `products_cat_id_foreign` (`cat_id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `slug`, `pic`, `price`, `content`, `publish`, `cat_id`, `created_at`, `updated_at`) VALUES
(1, 'test', 'test', '[\"66cheese-burger.png\",\"97REZA.png\",\"439assortment-of-fruits.jpg\",\"746MV5BZGM1MDI1MDQtZDdiZS00YzBjLWE2NzAtZTJkODQwNTU2ODMzXkEyXkFqcGc@._V1_.jpg\"]', 14000000, 'تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست', 1, 2, '2025-07-20 15:25:10', '2025-07-21 12:36:49'),
(2, 'دسر شکلاتی', 'دسر-شکلاتی', '[\"741pxfuel(5).jpg\",\"642pxfuel(3).jpg\",\"332pxfuel(29).jpg\"]', 170000, 'دسر شکلاتی دسر شکلاتی دسر شکلاتی دسر شکلاتی دسر شکلاتی دسر شکلاتی دسر شکلاتی دسر شکلاتی دسر شکلاتی دسر شکلاتی دسر شکلاتی دسر شکلاتی دسر شکلاتی دسر شکلاتی دسر شکلاتی دسر شکلاتی', 0, 2, '2025-07-21 12:39:56', '2025-07-21 12:40:28');

-- --------------------------------------------------------

--
-- Table structure for table `product_tag`
--

DROP TABLE IF EXISTS `product_tag`;
CREATE TABLE IF NOT EXISTS `product_tag` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `product_id` bigint UNSIGNED NOT NULL,
  `tag_id` bigint UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `product_tag_product_id_foreign` (`product_id`),
  KEY `product_tag_tag_id_foreign` (`tag_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

DROP TABLE IF EXISTS `projects`;
CREATE TABLE IF NOT EXISTS `projects` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `cat_id` bigint UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pic` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `publish` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `projects_cat_id_foreign` (`cat_id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`id`, `cat_id`, `title`, `slug`, `pic`, `content`, `publish`, `created_at`, `updated_at`) VALUES
(1, 5, 'تست جدید', 'تست-جدید', '127pxfuel(50).jpg', '<p>تست 2222تست 2222تست 2222تست 2222تست 2222تست 2222تست 2222تست 2222تست 2222تست 2222تست 2222تست 2222تست 2222تست 2222تست 2222تست 2222تست 2222تست 2222تست 2222تست 2222تست&nbsp;</p><p>&nbsp;</p><p><img src=\"http://127.0.0.1:8000/storage/projects/642logo.jpg\" srcset=\"http://127.0.0.1:8000/storage/projects/642logo.jpg 500w\" sizes=\"100vw\" width=\"500\">2222</p>', 1, '2025-08-09 18:12:51', '2025-08-09 18:40:01'),
(2, 6, 'پروژه 2', 'پروژه-2', '998pxfuel (2).jpg', '<p>پروژه 2پروژه 2پروژه 2پروژه 2پروژه 2پروژه 2پروژه 2پروژه 2پروژه 2پروژه 2پروژه 2پروژه 2پروژه 2پروژه 2پروژه 2پروژه 2پروژه 2پروژه 2پروژه 2پروژه 2پروژه 2پروژه 2پروژه 2</p>', 1, '2025-08-10 11:41:11', '2025-08-10 11:45:14');

-- --------------------------------------------------------

--
-- Table structure for table `tags`
--

DROP TABLE IF EXISTS `tags`;
CREATE TABLE IF NOT EXISTS `tags` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `lastName` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `username` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `phone_number` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `password` varchar(191) COLLATE utf8mb4_general_ci NOT NULL,
  `gender` tinyint(1) DEFAULT NULL,
  `role_as` int NOT NULL,
  `address` text COLLATE utf8mb4_general_ci,
  `remember_token` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstName`, `lastName`, `email`, `email_verified_at`, `username`, `phone_number`, `password`, `gender`, `role_as`, `address`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'آرمان', 'dabir', 'dabirmoghadam.a.com', NULL, 'armandabir', '09361811998', '$2y$10$yrjNbhnJ/yApNpUMQn.WYOru5/A8TusiwTKiW6iC1eZAAT4yNobRm', 1, 0, NULL, 'PwDPZ9EdYAFadq8UJ4edNP0To69Yv2OTfGeADmFc4gb2vf4EtWoLyH2QIC3y', '2025-07-19 15:29:37', '2025-08-07 06:17:35'),
(2, 'مصطفی', 'قربانی', 'dabirmoghadam.a2@gmail.com', NULL, 'mostafa', '09113847982', '$2y$10$kAj0vF8THUlJCHwLrVG6y.dUL2zdLNdDVDZP1bw4HXFfRUN/yYhUa', NULL, 1, 'رشت رشت رشت', '2tDvNIyOWiFNTMqlLNVHJZqelZNB6vd9kdne0SzkFmSeMhoVM2lvA1XFeWd7', '2025-07-20 14:24:05', '2025-07-25 14:37:44'),
(3, 'کاربر', 'کاربر', 'karbar.a2@gmail.com', NULL, 'user', '09361811999', '$2y$10$kAj0vF8THUlJCHwLrVG6y.dUL2zdLNdDVDZP1bw4HXFfRUN/yYhUa', NULL, 4, 'رشت رشت رشت', '2MKFFNES7aBVEJL6NtgSUnx5xa3Q8fwRF8l8iba0WXdBZoK9aqUB8TXoBOs9', '2025-07-20 14:24:05', '2025-07-25 14:53:44');

-- --------------------------------------------------------

--
-- Table structure for table `views`
--

DROP TABLE IF EXISTS `views`;
CREATE TABLE IF NOT EXISTS `views` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `ip` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `views`
--

INSERT INTO `views` (`id`, `ip`, `created_at`, `updated_at`) VALUES
(1, '127.0.0.1', '2025-07-19 13:57:50', '2025-07-19 13:57:50');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

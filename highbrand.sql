-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th3 06, 2023 lúc 03:11 PM
-- Phiên bản máy phục vụ: 10.4.24-MariaDB
-- Phiên bản PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `highbrand`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `banners`
--

CREATE TABLE `banners` (
  `id` int(11) NOT NULL,
  `url` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `banners`
--

INSERT INTO `banners` (`id`, `url`) VALUES
(1, 'https://i.ytimg.com/vi/CXSko9ySpyo/maxresdefault.jpg'),
(2, 'https://thietke6d.com/wp-content/uploads/2021/05/banner-quang-cao-giay-4.webp'),
(3, 'https://i.ytimg.com/vi/88g98VcVIko/maxresdefault.jpg');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `categoryproduct`
--

CREATE TABLE `categoryproduct` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `isusing` smallint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `categoryproduct`
--

INSERT INTO `categoryproduct` (`id`, `name`, `isusing`) VALUES
(1, 'Danh mục 6', 1),
(2, 'Danh mục 5', 1),
(3, 'Danh mục 4', 1),
(4, 'Danh mục 3', 1),
(15, 'Danh mục 2', 1),
(16, 'Danh mục 1', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `orderdetail`
--

CREATE TABLE `orderdetail` (
  `idorder` int(11) DEFAULT NULL,
  `idproduct` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `status` smallint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `orderdetail`
--

INSERT INTO `orderdetail` (`idorder`, `idproduct`, `quantity`, `status`) VALUES
(176, 3, 1, 1),
(176, 4, 2, 1),
(176, 5, 3, 1),
(176, 6, 2, 1),
(176, 9, 1, 1),
(177, 5, 1, 1),
(177, 6, 1, 1),
(177, 9, 1, 1),
(177, 1, 1, 1),
(177, 2, 1, 1),
(178, 5, 1, 1),
(178, 6, 1, 1),
(178, 9, 1, 1),
(178, 1, 1, 1),
(178, 2, 1, 1),
(180, 13, 1, 1),
(180, 1, 1, 1),
(180, 2, 2, 1),
(184, 4, 3, 1),
(184, 5, 2, 1),
(184, 6, 1, 1),
(184, 3, 1, 1),
(185, 4, 3, 1),
(185, 5, 2, 1),
(185, 6, 1, 1),
(185, 3, 1, 1),
(186, 4, 4, 1),
(186, 4, 4, 1),
(186, 7, 3, 1),
(187, 4, 4, 1),
(187, 4, 4, 1),
(187, 7, 3, 1),
(189, 4, 1, 1),
(189, 4, 1, 1),
(189, 7, 3, 1),
(189, 4, 4, 1),
(189, 4, 4, 1),
(189, 7, 3, 1),
(189, 4, 3, 1),
(189, 4, 3, 1),
(189, 7, 1, 1),
(189, 4, 1, 1),
(189, 4, 1, 1),
(189, 4, 1, 1),
(189, 4, 1, 1),
(189, 7, 1, 1),
(189, 5, 1, 1),
(189, 6, 1, 1),
(189, 16, 1, 1),
(189, 19, 1, 1),
(189, 24, 1, 1),
(190, 3, 1, 1),
(191, 3, 1, 1),
(191, 34, 1, 1),
(196, 4, 1, 1),
(196, 5, 1, 1),
(196, 20, 1, 1),
(201, 35, 1, 1),
(201, 34, 1, 1),
(201, 32, 1, 1),
(201, 3, 1, 1),
(201, 4, 1, 1),
(202, 35, 1, 1),
(202, 34, 1, 1),
(203, 36, 1, 1),
(203, 35, 1, 1),
(203, 34, 1, 1),
(203, 32, 1, 1),
(203, 3, 1, 1),
(204, 36, 1, 1),
(204, 35, 1, 1),
(204, 34, 1, 1),
(204, 32, 1, 1),
(204, 3, 1, 1),
(205, 35, 1, 1),
(205, 34, 1, 1),
(205, 32, 1, 1),
(205, 30, 1, 1),
(206, 35, 1, 1),
(206, 34, 1, 1),
(206, 32, 1, 1),
(206, 30, 1, 1),
(207, 36, 1, 1),
(208, 36, 1, 1),
(209, 35, 1, 1),
(211, 35, 1, 1),
(212, 36, 1, 1),
(212, 35, 1, 1),
(213, 35, 1, 1),
(214, 35, 1, 1),
(215, 35, 2, 1),
(215, 36, 1, 1),
(216, 35, 2, 1),
(216, 36, 1, 1),
(217, 35, 2, 1),
(218, 35, 1, 1),
(218, 34, 1, 1),
(220, 35, 2, 1),
(221, 36, 1, 1),
(222, 36, 1, 1),
(223, 36, 1, 1),
(224, 35, 2, 1),
(224, 42, 1, 1),
(65, 35, 2, 0),
(65, 42, 1, 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `iduser` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `totalPrice` double(10,0) NOT NULL,
  `isPay` smallint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `orders`
--

INSERT INTO `orders` (`id`, `iduser`, `createdAt`, `totalPrice`, `isPay`) VALUES
(176, 65, '2023-02-16 19:57:03', 8100000, 1),
(177, 65, '2023-02-16 19:58:50', 102710000, 1),
(178, 65, '2023-02-16 19:59:43', 102710000, 1),
(180, 64, '2023-02-16 20:03:22', 200910000, 1),
(184, 64, '2023-02-17 02:34:45', 5401000, 1),
(185, 64, '2023-02-17 02:35:14', 5401000, 1),
(186, 65, '2023-02-17 10:55:16', 9900000, 1),
(187, 65, '2023-02-17 10:55:34', 9900000, 1),
(189, 65, '2023-02-18 23:25:54', 29700000, 1),
(190, 65, '2023-02-18 23:37:23', 1000, 1),
(191, 65, '2023-02-19 14:04:59', 23222, 1),
(196, 64, '2023-02-19 15:50:02', 2700000, 1),
(201, 65, '2023-02-21 18:35:05', 1843222, 1),
(202, 65, '2023-02-21 18:35:50', 1843222, 1),
(203, 65, '2023-02-21 18:36:12', 1276555, 1),
(204, 65, '2023-02-21 18:37:46', 1276555, 1),
(205, 65, '2023-02-21 18:38:30', 952222, 1),
(206, 65, '2023-02-21 18:39:38', 952222, 1),
(207, 65, '2023-02-21 18:39:42', 333333, 1),
(208, 65, '2023-02-21 18:40:25', 333333, 1),
(209, 65, '2023-02-21 18:40:29', 900000, 1),
(211, 65, '2023-02-21 18:41:42', 900000, 1),
(212, 64, '2023-02-21 18:58:11', 1233333, 1),
(213, 65, '2023-02-22 12:23:12', 900000, 1),
(214, 65, '2023-02-22 12:25:54', 900000, 1),
(215, 65, '2023-02-22 12:32:04', 2133333, 1),
(216, 65, '2023-02-22 12:33:51', 2133333, 0),
(217, 65, '2023-02-22 12:33:56', 1800000, 0),
(218, 65, '2023-02-22 12:34:48', 922222, 0),
(220, 65, '2023-02-22 12:36:07', 1800000, 0),
(221, 64, '2023-02-22 12:37:00', 333333, 0),
(222, 64, '2023-02-22 12:38:14', 333333, 0),
(223, 64, '2023-02-22 12:43:59', 333333, 0),
(224, 65, '2023-02-22 13:51:30', 1822222, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `otpcode`
--

CREATE TABLE `otpcode` (
  `code` varchar(6) DEFAULT NULL,
  `iduser` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `otpcode`
--

INSERT INTO `otpcode` (`code`, `iduser`) VALUES
('486989', 65);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `posts`
--

CREATE TABLE `posts` (
  `id` smallint(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `content` varchar(1000) NOT NULL,
  `image` varchar(500) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `isusing` smallint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `posts`
--

INSERT INTO `posts` (`id`, `title`, `content`, `image`, `createdAt`, `isusing`) VALUES
(2, 'title hello', 'content hello world', '0', '2023-02-11 13:24:24', 1),
(3, 'new title', 'đây là bài ádasdasádasbasdasdasdasviết mớizzzz', '0', '2023-02-11 13:24:24', 1),
(4, 'title hello', 'content hello world', '0', '2023-02-11 13:24:24', 1),
(5, 'title hello', 'content hello world', '0', '2023-02-11 13:24:24', 1),
(6, 'title hello', 'content hello world', '0', '2023-02-11 13:24:24', 1),
(7, 'title hello', 'content hello world', '0', '2023-02-11 13:24:24', 1),
(8, 'title hello', 'content hello world', '0', '2023-02-11 13:24:24', 1),
(9, 'title hello', 'content hello world', '0', '2023-02-11 13:24:24', 1),
(10, 'title hello', 'content hello world', '0', '2023-02-11 13:24:24', 1),
(11, 'title hello', 'content hello world', '0', '2023-02-11 13:24:24', 1),
(12, 'title hello', 'content hello world', '0', '2023-02-11 13:24:24', 1),
(13, 'new title', 'đây là bài viết mới', '0', '2023-02-11 13:48:35', 1),
(14, 'new title', 'đây là bài viết mới', '0', '2023-02-11 13:49:15', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(60) NOT NULL,
  `price` double(10,0) NOT NULL,
  `image` varchar(500) DEFAULT NULL,
  `idCategory` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `description` varchar(1500) DEFAULT NULL,
  `isUsing` smallint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `image`, `idCategory`, `createdAt`, `description`, `isUsing`) VALUES
(1, 'Giày đẹp vãi ò', 10000, 'https://tintuc.hoang-phuc.com/wp-content/uploads/2021/12/giay-sneaker-nam-de-cao-ca-tinh.jpg', 1, '2023-02-11 14:12:02', 'new ', 1),
(2, 'Giày xinh vãi ò', 100000000, 'https://i0.wp.com/salt.tikicdn.com/cache/w1200/ts/product/57/eb/c8/4a039dcf151ac490e63e65f039036272.jpg', 1, '2023-02-12 13:45:11', 'mô tả 123', 1),
(3, 'Giày xinh333', 1000, 'https://cf.shopee.vn/file/671be9199140e3a45b2649078104f347', 4, '2023-02-14 07:21:12', 'đây là giày siêu đẹp ', 0),
(4, 'Giày xinh', 900000, 'https://cf.shopee.vn/file/4eab48575f5ea9a0e4dafaa9e343d4be', 4, '2023-02-14 07:21:12', 'đây là giày siêu đẹp', 0),
(5, 'Giày xinh', 900000, 'https://vn-live-01.slatic.net/p/dbfdaa25a9f4333283033c87e4c11376.png', 4, '2023-02-14 07:21:12', 'đây là giày siêu đẹp', 1),
(6, 'Giày xinh', 900000, 'https://agiay.vn/wp-content/uploads/2022/04/adsfb4.jpg', 4, '2023-02-14 07:21:12', 'đây là giày siêu đẹp', 1),
(7, 'Giày xinh', 900000, 'https://i0.wp.com/salt.tikicdn.com/cache/w1200/ts/product/be/69/c7/479390fd3b130863198608cf280589fc.jpg', 4, '2023-02-14 07:21:12', 'đây là giày siêu đẹp', 1),
(8, 'Giày xinh', 900000, 'https://vn-live-01.slatic.net/p/dbfdaa25a9f4333283033c87e4c11376.png', 4, '2023-02-14 07:21:12', 'đây là giày siêu đẹp', 1),
(9, 'Giày xinh', 900000, 'http://btsneaker.vn/wp-content/uploads/2021/10/nhung-doi-giay-dep-nam-0.jpg', 4, '2023-02-14 07:21:12', 'đây là giày siêu đẹp', 1),
(10, 'Giày xinh', 900000, 'https://cf.shopee.vn/file/bad5bf9496b58d77d869ebd0c75e6a3b_tn', 4, '2023-02-14 07:21:12', 'đây là giày siêu đẹp', 1),
(11, 'Giày xinh', 900000, 'https://www.elleman.vn/wp-content/uploads/2022/03/29/212830/sneakers-giay-nam-2022.jpg', 4, '2023-02-14 07:21:12', 'đây là giày siêu đẹp', 1),
(12, 'Giày xinh', 900000, 'https://i.pinimg.com/736x/9b/cc/f0/9bccf0f92292e118b779e01e642298cd.jpg', 4, '2023-02-14 07:21:12', 'đây là giày siêu đẹp', 1),
(13, 'Giày xinh', 900000, 'https://img.websosanh.vn/v10/users/review/images/h42dlsoikv9rf/giay-nam-trang-5.jpg?compress=85', 4, '2023-02-14 07:21:12', 'đây là giày siêu đẹp', 1),
(14, 'Giày xinh', 900000, 'https://inhat.vn/wp-content/uploads/2021/06/gi%C3%A0y-nam-%C4%91%E1%BA%B9p-gi%C3%A1-r%E1%BA%BB-min.jpg', 4, '2023-02-14 07:21:12', 'đây là giày siêu đẹp', 1),
(15, 'Giày xinh', 900000, 'https://shopkhoinghiep.com/wp-content/uploads/2020/10/giay-sneaker-nu-trang-de-cao-lam-mua-lam-gio-tren-thi-truong.jpg', 4, '2023-02-14 07:21:12', 'đây là giày siêu đẹp', 1),
(16, 'Giày xinh', 900000, 'https://armyhaus.com/wp-content/uploads/2021/01/NewBalance_Cover-600x353-1.jpg', 4, '2023-02-14 07:21:12', 'đây là giày siêu đẹp', 1),
(17, 'Giày xinh', 900000, 'https://nhaxinhplaza.vn/wp-content/uploads/cac-mau-custom-giay-dep.jpg', 4, '2023-02-14 07:21:12', 'đây là giày siêu đẹp', 1),
(18, 'Giày xinh', 900000, 'https://a.ipricegroup.com/trends-article/nhung-mau-giay-the-thao-nu-dep-hop-ca-xu-huong-giay-sneaker-2018-medium.jpg', 4, '2023-02-14 07:21:12', 'đây là giày siêu đẹp', 1),
(19, 'Giày xinh', 900000, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVfFM93l_KU0mEkN3R1ZUJy2l2sZnJRRwPjP8bZy1h6jrlTUaCQXYdO0VF8v0aszRXxXw&usqp=CAU', 4, '2023-02-14 07:21:12', 'đây là giày siêu đẹp', 1),
(20, 'Giày xinh', 900000, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeTxPIXwNakkIsM1KAsDYzTJrr-jJ8J1Wv2Q&usqp=CAU', 4, '2023-02-14 07:21:12', 'đây là giày siêu đẹp', 1),
(21, 'Giày xinh', 900000, 'https://malanaz.com/wp-content/uploads/2020/01/gi%C3%A0y-nam-c%C3%B4ng-s%E1%BB%9F-%C4%91%E1%BA%B9p-GD26D.jpg', 4, '2023-02-14 07:21:12', 'đây là giày siêu đẹp', 1),
(22, 'Giày xinh', 900000, 'https://cdn.shopify.com/s/files/1/0456/5070/6581/files/nhung-mau-giay-the-thao-nu-duoc-ban-chay-nam-2022_600x600.jpg?v=1664964733', 4, '2023-02-14 07:21:12', 'đây là giày siêu đẹp', 1),
(23, 'Giày xinh', 900000, 'https://topbienhoa.com/public/userfiles/images/cua-hang-giay-xau-bh-dn.webp', 4, '2023-02-14 07:21:12', 'đây là giày siêu đẹp', 1),
(24, 'Giày xinh', 900000, 'https://img.websosanh.vn/v2/users/review/images/08vkxj9gymh3a.jpg?compress=85', 4, '2023-02-14 07:21:12', 'đây là giày siêu đẹp', 1),
(25, 'Giày xinh', 900000, 'https://artia.vn/wp-content/uploads/2020/12/chup-giay-1.jpg', 4, '2023-02-14 07:21:12', 'đây là giày siêu đẹp', 1),
(26, 'Giày xinh', 900000, 'https://nhiet.vn/wp-content/uploads/2018/06/shop-gi%C3%A0y-th%E1%BB%83-thao-nam-H%C3%A0-N%E1%BB%99i.png', 4, '2023-02-14 07:21:12', 'đây là giày siêu đẹp', 1),
(27, 'Giày xinh', 900000, 'https://giaygiavi.vn/wp-content/uploads/2017/01/giay-the-thao-tre-em-9.jpg', 4, '2023-02-14 07:21:12', 'đây là giày siêu đẹp', 1),
(30, 'Châu Văn Hiệu', 10000, 'https://cf.shopee.vn/file/4eab48575f5ea9a0e4dafaa9e343d4be', 4, '2023-02-19 13:52:43', '', 1),
(31, 'Giày này của hiệu', 800000, 'https://i0.wp.com/salt.tikicdn.com/cache/w1200/ts/product/be/69/c7/479390fd3b130863198608cf280589fc.jpg', 4, '2023-02-19 13:53:26', '', 1),
(32, 'chó chi', 20000, 'https://i0.wp.com/salt.tikicdn.com/cache/w1200/ts/product/be/69/c7/479390fd3b130863198608cf280589fc.jpg', 3, '2023-02-19 13:54:05', 'helll', 0),
(34, 'Giày xinh333', 22222, 'https://vn-live-01.slatic.net/p/dbfdaa25a9f4333283033c87e4c11376.png', 4, '2023-02-19 13:55:10', '', 1),
(35, 'venus19032001', 900000, 'https://cf.shopee.vn/file/671be9199140e3a45b2649078104f347', 4, '2023-02-19 13:56:36', '', 1),
(36, 'gggg', 333333, 'https://vn-live-01.slatic.net/p/dbfdaa25a9f4333283033c87e4c11376.png', 1, '2023-02-21 17:38:43', '', 1),
(37, 'Nike Air Jordan', 850000, 'https://cf.shopee.vn/file/4c9b924566996cfd483a7d14733b4d46', 4, '2023-02-22 12:39:51', '', 1),
(38, 'AF1 trắng rep 1:1', 950000, 'https://statics.hnbmg.com/Nike-Air-Force-1-Shadow-Spruce-CW2655_001-5.jpg', 1, '2023-02-22 12:45:10', 'Giày Nike Air Force 1 rep 1:1', 1),
(39, 'Châu Văn Hiệu', 100000, 'https://i0.wp.com/salt.tikicdn.com/cache/w1200/ts/product/be/69/c7/479390fd3b130863198608cf280589fc.jpg', 3, '2023-02-22 13:34:43', 'lkhjealkjfdk;lasl;dsadas', 1),
(40, 'Châu Văn Hiệu', 10000, 'https://i0.wp.com/salt.tikicdn.com/cache/w1200/ts/product/be/69/c7/479390fd3b130863198608cf280589fc.jpg', 3, '2023-02-22 13:34:58', 'lkjalsjdlkasdsadas', 1),
(41, 'lkalksjdfasd', 10000, 'https://vn-live-01.slatic.net/p/dbfdaa25a9f4333283033c87e4c11376.png', 1, '2023-02-22 13:35:31', 'rqweqwe', 1),
(42, 'Châu Văn Hiệu', 22222, 'https://cf.shopee.vn/file/671be9199140e3a45b2649078104f347', 3, '2023-02-22 13:37:05', 'jahsdkjgsdfgsdf', 1),
(43, 'Giày xinh33333333333', 22222, 'https://vn-live-01.slatic.net/p/dbfdaa25a9f4333283033c87e4c11376.png', 4, '2023-02-22 13:52:49', 'mô tẩtlkshfklasfasdg', 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(30) NOT NULL,
  `password` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `gioHangTam` smallint(1) NOT NULL,
  `soDienThoai` varchar(10) NOT NULL,
  `address` varchar(100) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `isUsing` smallint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `email`, `gioHangTam`, `soDienThoai`, `address`, `createdAt`, `isUsing`) VALUES
(1, 'ADMIN', '123123', 'hieucvpk02147@fpt.edu.vn', 1, '[value-6]', '', '0000-00-00 00:00:00', 9),
(2, 'hello world 12312312', '123', '[value-4]', 0, '[value-6]', '', '0000-00-00 00:00:00', 1),
(4, 'venus', '123', 'hieu@gmail.com', 0, '0935998954', '', '2023-02-11 11:46:42', 0),
(48, 'Châu Văn Hiệu', 'Venus19032001', '', 1, '0935998954', 'áljdflksdfadsfadsfds', '2023-02-13 20:10:36', 1),
(49, 'Châu Văn Hiệu', 'Venus19032001', 'sad123@gmail.com', 0, '0935998954', 'áljdflksdfadsfadsfds', '2023-02-13 20:12:49', 1),
(50, 'Châu Văn Hiệu', 'Venus19032001', 'venus@gmail.com', 0, '0935998954', 'áljdflksdfadsfadsfds', '2023-02-13 20:13:14', 1),
(51, 'Châu Văn Hiệu', 'Venus19032001', 'venufs@gmail.com', 0, '0935998954', 'áljdflksdfadsfadsfds', '2023-02-13 20:14:54', 1),
(52, 'Hà Thế Chi', 'Venus19032001', 'chitheha@gmail.com', 0, '0935998954', 'hello world ', '2023-02-13 20:25:31', 1),
(53, 'Hà Thế Chi', 'Venus19032001', 'chithehda@gmail.com', 0, '0935998954', 'hello world ', '2023-02-13 20:26:19', 0),
(54, 'Hà Thế Chi', 'Venus19032001', 'chithezzhfffda@gmail.com', 0, '0935998954', 'hello world ', '2023-02-13 20:27:00', 1),
(55, 'Hà Thế Chi', 'Venus19032001', 'chithezzhfffdffffa@gmail.com', 0, '0935998954', 'hello world ', '2023-02-13 20:27:34', 1),
(56, 'Hà Thế Chi', 'Venus19032001', 'chithez3zhfffdffffa@gmail.com', 0, '0935998954', 'hello world ', '2023-02-13 20:29:12', 1),
(57, 'Hà Thế Chi', 'Venus19032001', 'chithez3ffffzhfffdffffa@gmail.com', 0, '0935998954', 'hello world ', '2023-02-13 20:29:52', 1),
(58, 'Hà Thế Chi', 'Venus19032001', 'chithvvvvez3ffffzhfffdffffa@gmail.com', 0, '0935998954', 'hello world ', '2023-02-13 20:30:19', 1),
(59, 'Hà Thế Chi', 'Venus19032001', 'hieu123@gmail.com', 0, '0935998954', 'hello world ', '2023-02-13 20:31:07', 1),
(61, 'Châu Văn Hiệu', 'Venus19032001', 'hizzvvvvvvzeu@gmail.com', 0, '0935998954', 'hfkdjsahfjkdsahflkjds', '2023-02-13 20:43:20', 1),
(62, 'Châu Văn Hiệu', 'Venus19032001', 'hizzvv2vvvvzeu@gmail.com', 0, '0935998954', 'hfkdjsahfjkdsahflkjds', '2023-02-13 20:45:41', 1),
(63, 'Châu Văn Hiệu', 'Venus19032001', 'hizzvv2vrvvvzeu@gmail.com', 0, '0935998954', 'hfkdjsahfjkdsahflkjds', '2023-02-13 20:46:20', 1),
(64, 'Vũ Thị Huyền Trang', 'Venus19032001', 'vutrang@gmail.com', 0, '0987678752', 'Ea Ô, Eakar, ĐăkLăk', '2023-02-14 01:28:31', 1),
(65, 'Lê Hoàng Khải', 'Venus19032001', 'lehoangkhai@gmail.com', 1, '0935998954', 'venus19032001', '2023-02-15 10:52:52', 1),
(66, 'Lê Hoàng Sơn', 'V123123', 'lehoangson@gmail.com', 1, '0935998954', 'venuasdádsadsad', '2023-02-15 10:58:58', 1),
(67, 'Bruce Wayne', 'Wayne1', 'Wayne@gmail.com', 1, '0887999651', '123 Wall Strest', '2023-02-15 11:30:19', 0),
(68, 'Nguyễn Viết Hồng Anh', 'V123123', 'anhnvhpk02081@fpt.edu.vn', 0, '0989789789', 'hà huy tập,tp.bmt', '2023-02-22 12:20:15', 1);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `banners`
--
ALTER TABLE `banners`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `categoryproduct`
--
ALTER TABLE `categoryproduct`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `orderdetail`
--
ALTER TABLE `orderdetail`
  ADD KEY `idproduct` (`idproduct`);

--
-- Chỉ mục cho bảng `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `iduser` (`iduser`);

--
-- Chỉ mục cho bảng `otpcode`
--
ALTER TABLE `otpcode`
  ADD KEY `iduser` (`iduser`);

--
-- Chỉ mục cho bảng `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idCategory` (`idCategory`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `banners`
--
ALTER TABLE `banners`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `categoryproduct`
--
ALTER TABLE `categoryproduct`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT cho bảng `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=225;

--
-- AUTO_INCREMENT cho bảng `posts`
--
ALTER TABLE `posts`
  MODIFY `id` smallint(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT cho bảng `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `orderdetail`
--
ALTER TABLE `orderdetail`
  ADD CONSTRAINT `orderdetail_ibfk_1` FOREIGN KEY (`idproduct`) REFERENCES `products` (`id`);

--
-- Các ràng buộc cho bảng `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`iduser`) REFERENCES `users` (`id`);

--
-- Các ràng buộc cho bảng `otpcode`
--
ALTER TABLE `otpcode`
  ADD CONSTRAINT `otpcode_ibfk_1` FOREIGN KEY (`iduser`) REFERENCES `users` (`id`);

--
-- Các ràng buộc cho bảng `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`idCategory`) REFERENCES `categoryproduct` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2019-06-04 08:09:32
-- 服务器版本： 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ueser`
--

-- --------------------------------------------------------

--
-- 表的结构 `my_list`
--

CREATE TABLE `my_list` (
  `id` int(15) NOT NULL COMMENT '用户名',
  `phone` varchar(15) NOT NULL COMMENT '电话',
  `pasword` varchar(15) NOT NULL COMMENT '密码',
  `name` varchar(15) DEFAULT NULL COMMENT '姓名',
  `age` int(3) DEFAULT NULL COMMENT '年龄'
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- 转存表中的数据 `my_list`
--

INSERT INTO `my_list` (`id`, `phone`, `pasword`, `name`, `age`) VALUES
(10000, '13456889829', 'ma123456', 'majianan', 24),
(10019, '13456889888', '123456', NULL, NULL),
(10018, '13456889822', '123456', NULL, NULL),
(10017, '13456889827', '123456', NULL, NULL),
(10021, '13333333333', '123456', NULL, NULL),
(10013, '13456889820', '123456', NULL, NULL),
(10012, '13456889821', '123456', NULL, NULL),
(10020, '13888888888', '123456', NULL, NULL);

-- --------------------------------------------------------

--
-- 表的结构 `product`
--

CREATE TABLE `product` (
  `id` int(30) NOT NULL COMMENT '商品id',
  `title` varchar(255) NOT NULL COMMENT '商品标题',
  `price` float NOT NULL COMMENT '商品价格',
  `num` int(15) NOT NULL COMMENT '商品库存',
  `pic` varchar(255) NOT NULL COMMENT '商品图片',
  `details` varchar(255) NOT NULL COMMENT '商品详情'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `product`
--

INSERT INTO `product` (`id`, `title`, `price`, `num`, `pic`, `details`) VALUES
(10000, 'CK短袖T恤', 598, 1321, '{"a":"imgs/p01-0.jpg","b":"imgs/p01-1.jpg"}', 'CK短袖T恤 购于香港专柜 面料优秀'),
(10001, '匡威1970s黄色高帮', 99, 123, '{"a":"imgs/p02-0.jpg","b":"imgs/p02-1.jpg"}', '穿过两次几乎全新 原盒原标原袋都留着呢 谁买我的鞋真的是赚到了这双鞋真的特别舒服(鞋子是38码的)匡威偏大一码 价格可商议'),
(10002, 'BURBERRY 博柏利 伦敦男士香水 50ML', 300, 131, '{"a":"imgs/p03-0.jpg","b":"imgs/p03-1.jpg"}', '买来喷了没几次，几乎全新！巴宝莉官网买的，国内行货！现在一口价300包邮转让！江浙沪包邮！'),
(10003, '闲置Lv手拿包洗漱包路易威登手包', 2000, 144, '{"a":"imgs/p04-0.jpg","b":"imgs/p04-1.jpg"}', '因家里lv手包有好几个，所以闲置一个用的比较少的.'),
(10004, '钱夫人CHINSTUDIO港味系带灯笼袖碎花衬衫', 84, 113, '{"a":"imgs/p05-0.jpg","b":"imgs/p05-1.jpg"}', '新旧程度:全新，仅习惯性到手下水一次转手原因:衣服太多换不过来，喜新厌旧了'),
(10005, 'Y71 vivo手机', 460, 11321, '{"a":"imgs/p06-0.jpg","b":"imgs/p06-1.jpg"}', 'vivo vivo Y71 3+32G内存 全网通 带面部识别解锁 反应速度快 备用机首选 一款全面屏的手机，9.5新'),
(10006, 'JBL DUET BT无线蓝牙耳机立体声音乐头戴', 279, 1132, '{"a":"imgs/p07-0.jpg","b":"imgs/p07-1.jpg"}', '品牌型号:JBL DUET BT新旧程度:9成新转手原因:因为自己不常使用入手渠道:官方旗舰店'),
(10007, '李宁badfive中长款微燕尾防水篮球风衣XL150包', 150, 131, '{"a":"imgs/p08-0.jpg","b":"imgs/p08-1.jpg"}', '下水一次，无任何瑕疵，挺括版型，适合身高178~183，体重72~85kg的朋友。总计四个兜，手揣高还是低都可以');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `my_list`
--
ALTER TABLE `my_list`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `my_list`
--
ALTER TABLE `my_list`
  MODIFY `id` int(15) NOT NULL AUTO_INCREMENT COMMENT '用户名', AUTO_INCREMENT=10022;
--
-- 使用表AUTO_INCREMENT `product`
--
ALTER TABLE `product`
  MODIFY `id` int(30) NOT NULL AUTO_INCREMENT COMMENT '商品id', AUTO_INCREMENT=10008;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

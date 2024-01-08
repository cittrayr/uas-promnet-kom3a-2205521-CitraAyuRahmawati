-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 08, 2024 at 01:08 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_2205521_citraayurahmawati_uas`
--

-- --------------------------------------------------------

--
-- Table structure for table `inventory_citra`
--

CREATE TABLE `inventory_citra` (
  `id` int(11) NOT NULL,
  `nama_barang` varchar(200) NOT NULL,
  `jumlah` int(11) NOT NULL,
  `harga_satuan` int(11) NOT NULL,
  `lokasi` varchar(200) NOT NULL,
  `deskripsi` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `inventory_citra`
--

INSERT INTO `inventory_citra` (`id`, `nama_barang`, `jumlah`, `harga_satuan`, `lokasi`, `deskripsi`) VALUES
(1, 'handphone', 10, 3500000, 'Bandung', 'alat komunikasi'),
(2, 'laptop lenovo', 9, 6000000, 'Jakarta', 'kebutuhan kerja'),
(3, 'komputer', 8, 4000000, 'Denpasar', 'keperluan kuliah'),
(4, 'ipad ', 7, 3000000, 'Manokwari', 'keperluan desain grafis'),
(5, 'ac', 6, 2000000, 'Subang', 'alat pendingin ruangan');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `inventory_citra`
--
ALTER TABLE `inventory_citra`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `inventory_citra`
--
ALTER TABLE `inventory_citra`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

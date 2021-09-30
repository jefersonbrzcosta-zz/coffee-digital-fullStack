-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 30-Set-2021 às 19:56
-- Versão do servidor: 10.4.20-MariaDB
-- versão do PHP: 7.3.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `cardapio`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `adonis_schema`
--

CREATE TABLE `adonis_schema` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL,
  `migration_time` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `adonis_schema`
--

INSERT INTO `adonis_schema` (`id`, `name`, `batch`, `migration_time`) VALUES
(1, 'database\\migrations\\1632996483167_orders', 1, '2021-09-30 10:44:38'),
(2, 'database\\migrations\\1632996511050_order_product', 1, '2021-09-30 10:44:38'),
(3, 'database\\migrations\\1632997829102_products', 1, '2021-09-30 10:44:38');

-- --------------------------------------------------------

--
-- Estrutura da tabela `orders`
--

CREATE TABLE `orders` (
  `id` int(10) UNSIGNED NOT NULL,
  `paid` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `orders`
--

INSERT INTO `orders` (`id`, `paid`) VALUES
(1, NULL),
(2, 0),
(3, 0),
(4, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `order_product`
--

CREATE TABLE `order_product` (
  `id` int(10) UNSIGNED NOT NULL,
  `order_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `comment` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `order_product`
--

INSERT INTO `order_product` (`id`, `order_id`, `product_id`, `quantity`, `comment`) VALUES
(1, 1, 1, 2, ''),
(2, 1, 2, 1, ''),
(3, 4, 1, 1, ''),
(4, 4, 4, 1, '');

-- --------------------------------------------------------

--
-- Estrutura da tabela `products`
--

CREATE TABLE `products` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `price` float(8,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `products`
--

INSERT INTO `products` (`id`, `title`, `image`, `price`) VALUES
(1, 'Chocolate Latte', 'https://images.all-free-download.com/images/graphiclarge/two_coffee_lattes_192597.jpg', 3.50),
(2, 'Classic Coffee', 'https://images.all-free-download.com/images/graphiclarge/1_x_coffee_515935.jpg', 2.00),
(3, 'Baguette', 'https://images.all-free-download.com/images/graphiclarge/bread_baguette_white_bread_217425.jpg', 1.20),
(4, 'Cereal', 'https://images.all-free-download.com/images/graphiclarge/chocolate_serial_182655.jpg', 5.00),
(5, 'Doughnut', 'https://images.all-free-download.com/images/graphiclarge/food_amp_drink_234423.jpg', 1.00),
(6, 'Sandwich', 'https://images.all-free-download.com/images/graphiclarge/sandwich_183774.jpg', 5.60);

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `adonis_schema`
--
ALTER TABLE `adonis_schema`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `order_product`
--
ALTER TABLE `order_product`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `adonis_schema`
--
ALTER TABLE `adonis_schema`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `order_product`
--
ALTER TABLE `order_product`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

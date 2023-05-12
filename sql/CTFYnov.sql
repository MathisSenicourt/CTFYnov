-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : lun. 06 mars 2023 à 12:35
-- Version du serveur : 10.4.22-MariaDB
-- Version de PHP : 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `nodejs_CTFYnov`
--

-- --------------------------------------------------------

DROP TABLE IF EXISTS `boxs`;
DROP TABLE IF EXISTS `boxPosts`;
DROP TABLE IF EXISTS `chatComments`;
DROP TABLE IF EXISTS `chatPosts`;
DROP TABLE IF EXISTS `users`;

--
-- Structure de la table `boxs`
--

CREATE TABLE `boxs` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `title` text NOT NULL,
  `correctFlag` text NOT NULL,
  `URLinstructions` text NOT NULL,
  `instructions` text NOT NULL,
  `boxAcces` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `boxs`
--

INSERT INTO `boxs` (`title`, `correctFlag`, `URLinstructions`, `instructions`, `boxAcces`) VALUES
('box1', 'correctFLagValue', 'https://www.fine-s.fr/9959/test.jpg', 'Ceci est une test de box', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'),
('box2', 'correctFLagValue', 'https://www.fine-s.fr/9959/test.jpg', 'Ceci est une test de box', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley');

-- --------------------------------------------------------

--
-- Structure de la table `boxPosts`
--

CREATE TABLE `boxPosts` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `flag` text NOT NULL,
  `content` text NOT NULL,
  `user_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `boxPosts`
--


-- --------------------------------------------------------

--
-- Structure de la table `chatComments`
--

CREATE TABLE `chatComments` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `content` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `user_id` int NOT NULL,
  `post_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `chatComments`
--

INSERT INTO `chatComments` (`content`, `created_at`, `user_id`, `post_id`) VALUES
('Réponse au post !', '2023-03-06 09:32:24', 1, 1),
('Super blog !', '2023-03-06 09:36:53', 1, 1),
('Suuuuuper', '0000-00-00 00:00:00', 1, 1);

-- --------------------------------------------------------

--
-- Structure de la table `chatPosts`
--

CREATE TABLE `chatPosts` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `user_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `chatPosts`
--

INSERT INTO `chatPosts` (`title`, `content`, `created_at`, `user_id`) VALUES
('Test de post', 'Ceci est une test de post pour l\'interro de DEV API', '2023-03-06 09:17:29', 1),
('Super', 'Super', '2023-03-06 09:53:40', 1),
('Génial', 'Super Blog', '0000-00-00 00:00:00', 3);

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`name`, `email`, `password`) VALUES
('Antoine', 'antoine.raimand@gmail.com', 'test'),
('Mathis', 'mathis.senicourt@gmail.com', 'test2'),
('Thomas', 'thomas.cornu@gmail.com', 'test3'),
('Axel', 'axel.carry@gmail.com', 'aaaaa'),
('Alexis', 'alexis@gmail.com', 'fgdthdrth');

-- --------------------------------------------------------

--
-- Index pour la table `chatComments`
--
ALTER TABLE `chatComments`
  ADD KEY `user_id` (`user_id`),
  ADD KEY `post_id` (`post_id`);

--
-- Index pour la table `chatPosts`
--
ALTER TABLE `chatPosts`
  ADD KEY `user_id` (`user_id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD UNIQUE KEY `email` (`email`);


--
-- Contraintes pour la table `chatComments`
--
ALTER TABLE `chatComments`
  ADD CONSTRAINT `chatComments_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `chatComments_ibfk_2` FOREIGN KEY (`post_id`) REFERENCES `chatPosts` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `chatPosts`
--
ALTER TABLE `chatPosts`
  ADD CONSTRAINT `chatPosts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

--
-- Base de données : `nodejs_CTFYnov`
--
-- --------------------------------------------------------
DROP TABLE IF EXISTS `boxs`;
DROP TABLE IF EXISTS `chatComments`;
DROP TABLE IF EXISTS `chatPosts`;
DROP TABLE IF EXISTS `users`;
-- --------------------------------------------------------
--
-- Structure de la table `boxs`
--
CREATE TABLE `boxs` (
                        `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
                        `title` text NOT NULL,
                        `correctFlag` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `boxs` (`title`, `correctFlag`) VALUES
                                                ('IntrusionBDD', 'welcomeAfrica'),
                                                ('EscaladePrivilege', 'Fl@G is {You''re_G0d}'),
                                                ('MemoryForensicxVolatilityQ1', 'Win7SP1x64'),
                                                ('MemoryForensicxVolatilityQ2', 'goodmorningindia'),
                                                ('MemoryForensicxVolatilityQ3', 'flag{w3ll_3rd_stage_was_easy}'),
                                                ('WiresharkFlagFinder', 'FLAG{W1r3Extr4ct}');

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

INSERT INTO `users` (`name`, `email`, `password`) VALUES
                                                      ('Antoine', 'antoine.raimand@gmail.com', 'test'),
                                                      ('Mathis', 'mathis.senicourt@gmail.com', 'test2'),
                                                      ('Thomas', 'thomas.cornu@gmail.com', 'test3');

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

INSERT INTO `chatPosts` (`title`, `content`, `created_at`, `user_id`) VALUES
                                                                          ('Test de post', 'Ceci est une test de post pour le forum', '2023-03-06 09:17:29', 2),
                                                                          ('Super', 'Super', '2023-03-06 09:53:40', 2);

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

INSERT INTO `chatComments` (`content`, `created_at`, `user_id`, `post_id`) VALUES
                                                                               ('Réponse au post !', '2023-03-06 09:32:24', 2, 1),
                                                                               ('Super blog !', '2023-03-06 09:36:53', 2, 1),
                                                                               ('Suuuuuper', '0000-00-00 00:00:00', 2, 1);

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
<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'ecommerce' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '~)&qr;gqWi{&+rOQ%0.huzHYzuP599qE)CYxq>R;%s>d1*]h4P8es)9Mh[V.qdZ+' );
define( 'SECURE_AUTH_KEY',  '1Fd5OfC+faD994e0G[P,JMK7qu #5wKf^UyR,;ndOM2PO#2h8Y/UU?rLbaQ}1X}E' );
define( 'LOGGED_IN_KEY',    'hkxXPf,S+LXP|3!QFj}2zq{m3_`)!<A(m@~r9A9z+Y3p[[(<vHt>[,63-UR]pvX4' );
define( 'NONCE_KEY',        '}Ilw_mNJFM)si+}}lx!dLJEBUo72Xn;qHuO&|XcJW}c>%${/m^,t?lk6;sHJ3|sO' );
define( 'AUTH_SALT',        'p/8l;Z|0@av=;E,SLpPtY7@@*?o&hVTBnzL`#]6R/v6Z=r@Gg:^[t4>/`|^]cBS(' );
define( 'SECURE_AUTH_SALT', 'I%k7V3IyJUNHSLQ[/^_2RY*zR0R}~gEU:E$=+9?g#NJ-lc+nmHY9zc;y@Ls2tL>R' );
define( 'LOGGED_IN_SALT',   '/r/vbVzH/xKINp|^gzlD5s3o/]b8IP+pK]|M3Ntj$1#@m7TcRjvz}c3VM~IK[a>d' );
define( 'NONCE_SALT',       'Ly]NECbRatB$TXCgr_,3 M#VAR79RV&.ZC,cPeak5>T@fPP2IM,kDPByP/Dv8xzX' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

# Focus Laravel Test

A minimal Laravel application to test PHP hosting. Laravel version is locked by `composer.lock`; dependencies are installed on the server with Composer, not committed as `vendor/`.

## Plesk deployment checklist

1. Configure Git deployment to fetch this public GitHub repository and the `main` branch. If Plesk reports **Access denied**, fix repository access first; that happens before Laravel or PHP is executed.
2. Deploy the repository into the domain's `httpdocs` directory (or another application directory outside the public web root).
3. Set the domain's document root to the app's `public` directory (for example, `httpdocs/public`). Do not expose the Laravel project root: `.env`, `vendor`, and application source must stay outside the public document root.
4. Ensure the domain's PHP version satisfies `composer.json` and enable the required PHP extensions. From the project root, run `composer install --no-dev --prefer-dist --optimize-autoloader`.
5. Create the private runtime config (`cp .env.example .env`) and set production values, including `APP_ENV=production`, `APP_DEBUG=false`, and a unique `APP_KEY` (`php artisan key:generate --force`). Never commit `.env` or expose it through the web root.
6. Make `storage/` and `bootstrap/cache/` writable by the PHP runtime. The example config uses file sessions/cache and synchronous queues so a database is not required for this smoke test.

## Smoke test

After deployment, open `/healthz`. A working Laravel request returns JSON with `status`, Laravel version, and PHP version. The homepage (`/`) is Laravel's welcome page.

For local development, run `composer install` and `php artisan serve` from the project root.

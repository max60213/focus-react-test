# Focus Laravel PHP 8.1 Compatibility Test

Disposable compatibility probe for this host's PHP 8.1.28 environment. It uses Laravel 10.50.3, which is end-of-life and has known security advisories. **Do not use this app for production or real user data. Remove it after the smoke test.**

Composer dependency resolution is pinned to PHP 8.1.28 so the lock file won't silently select packages requiring a newer PHP runtime.

## Plesk setup

1. Pull the `main` branch from the public GitHub repository. If Plesk reports `Access denied`, fix Git/deployment permissions first; that error occurs before PHP runs.
2. Deploy the repository to `httpdocs` and change the domain document root to `httpdocs/public`. Do not expose the Laravel project root.
3. Use the domain's PHP 8.1 handler and install dependencies from the project root with `composer install --no-dev --prefer-dist --optimize-autoloader`.
4. Create the private environment file (`cp .env.example .env`), set `APP_ENV=production`, `APP_DEBUG=false`, and generate a unique key with `php artisan key:generate --force`. Never commit `.env`.
5. Ensure `storage/` and `bootstrap/cache/` are writable by PHP.

## Smoke test

Open `/healthz`. A working request returns JSON with `status`, Laravel version, and the active PHP version. The homepage (`/`) should show Laravel's welcome page. This confirms PHP/Laravel request execution only; it is not a production-readiness test.

## Local

```bash
composer install
cp .env.example .env
php artisan key:generate
php artisan serve
```

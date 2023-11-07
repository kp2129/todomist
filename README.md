# Setting Up a todomist from GitHub

This guide will help you set up a Laravel project or a React project that you've cloned from GitHub.

## Setting Up a Laravel Project

Follow these steps to set up a Laravel project:

1. Navigate to the project directory:

   ```sh
   cd todomist/backend
    ```
   
2. Install the project dependencies using Composer:

   ```sh
   composer install
   ```
   
3. Create a .env file by making a copy of the .env.example file:

   ```sh
   cp .env.example .env
   ```
   
4. Generate an application key:

   ```sh
   php artisan key:generate
   ```
   
5. You may install Laravel Sanctum via the Composer package manager:

   ```sh
   composer require laravel/sanctum
   ```
6. Next, you should publish the Sanctum configuration and migration files using the vendor:publish Artisan command. The sanctum configuration file will be placed in your application's config directory:

   ```sh
   php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"
   ```
   
7. Run the database migrations to create the necessary database tables:

   ```sh
   php artisan migrate
   ```
8. Next, if you plan to utilize Sanctum to authenticate a SPA, you should add Sanctum's middleware to your api middleware group within your application's app/Http/Kernel.php file:
   ```sh
   'api' => [
    \Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class,
    \Illuminate\Routing\Middleware\ThrottleRequests::class.':api',
    \Illuminate\Routing\Middleware\SubstituteBindings::class,
   ],
   ```
## Setting Up a React Project

To set up a React project, follow these steps:

1. Navigate to the project directory:

   ```sh
   cd todomist/frontend
    ```
   
2. Install the project dependencies using npm:

   ```sh
   npm install
    ```
   
3. Once the dependencies are installed, you can start the development server. If the project uses npm, run:
   
   ```sh
   npm start
    ```

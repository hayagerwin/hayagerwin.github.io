# 🛒 Lucky Star E-commerce Platform

[![Laravel](https://img.shields.io/badge/Laravel-12.x-FF2D20?style=flat-square&logo=laravel)](https://laravel.com)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?style=flat-square&logo=react)](https://reactjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Neon.tech-336791?style=flat-square&logo=postgresql)](https://neon.tech)

A modern, full-featured grocery e-commerce platform built with Laravel and React. Lucky Star provides a comprehensive solution for online grocery stores with an intuitive customer experience and powerful admin management tools.

## 🌟 Project Overview

Lucky Star E-commerce is a sophisticated grocery shopping platform designed specifically for the food retail industry. Built with modern web technologies, it offers a seamless shopping experience for customers and comprehensive management tools for store administrators.

The platform focuses on grocery-specific features including fresh produce management, category-based organization (Fresh Produce, Dairy & Eggs, Meat & Seafood, Bakery, etc.), and specialized product attributes like expiration dates, storage instructions, and nutritional information.

## ✨ Key Features

### 🛍️ Customer Experience
- **Modern Shopping Interface**: Clean, responsive design optimized for grocery shopping
- **Product Catalog**: Comprehensive product browsing with category filtering and search
- **Shopping Cart**: Persistent cart with quantity management and real-time updates
- **User Authentication**: Secure registration, login, and profile management
- **Order Management**: Complete order history and status tracking
- **Product Reviews**: Customer review and rating system
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

### 🔧 Admin Dashboard
- **Product Management**: Add, edit, and organize products with detailed attributes
- **Category Management**: Hierarchical category structure with nested subcategories
- **Order Processing**: Complete order management and fulfillment workflow
- **Inventory Tracking**: Stock level monitoring and low-stock alerts
- **Customer Management**: User account administration and order history
- **Coupon System**: Flexible discount and promotion management
- **Analytics Dashboard**: Sales metrics and performance insights

### 🏪 Grocery-Specific Features
- **Fresh Produce Categories**: Specialized categories for perishable goods
- **Product Attributes**: Weight, volume, brand, organic status, expiration dates
- **Nutritional Information**: Detailed product nutrition facts and allergen information
- **Storage Instructions**: Proper storage and handling guidelines
- **Inventory Management**: Stock tracking with expiration date monitoring

## 🛠️ Technology Stack

### Backend
- **Framework**: Laravel 12.x (PHP 8.2+)
- **Database**: PostgreSQL with Neon.tech hosting
- **Authentication**: Laravel Breeze with Inertia.js
- **API**: RESTful API architecture
- **Queue System**: Laravel Queues for background processing
- **Testing**: Pest PHP for unit and feature testing

### Frontend
- **Framework**: React 19.x with TypeScript
- **Routing**: Inertia.js for SPA-like experience
- **Styling**: Tailwind CSS 4.0 with custom design system
- **UI Components**: shadcn/ui with Radix UI primitives
- **Icons**: Lucide React icon library
- **Build Tool**: Vite for fast development and optimized builds

### Development Tools
- **Code Quality**: ESLint, Prettier, Laravel Pint
- **Type Safety**: TypeScript with strict configuration
- **Version Control**: Git with conventional commits
- **Package Management**: Composer (PHP) and npm (JavaScript)

## 🚀 Installation Instructions

### Prerequisites
- PHP 8.2 or higher
- Node.js 18+ and npm
- PostgreSQL database
- Composer
- Git

### Step-by-Step Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/lucky-star-e-commerce.git
   cd lucky-star-e-commerce
   ```

2. **Install PHP Dependencies**
   ```bash
   composer install
   ```

3. **Install JavaScript Dependencies**
   ```bash
   npm install
   ```

4. **Environment Configuration**
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

5. **Database Setup**
   - Create a PostgreSQL database on Neon.tech or your preferred provider
   - Update your `.env` file with database credentials:
   ```env
   DB_CONNECTION=pgsql
   DB_HOST=your-neon-host
   DB_PORT=5432
   DB_DATABASE=your-database-name
   DB_USERNAME=your-username
   DB_PASSWORD=your-password
   ```

6. **Run Database Migrations**
   ```bash
   php artisan migrate
   ```

7. **Seed the Database (Optional)**
   ```bash
   php artisan db:seed
   ```

8. **Build Frontend Assets**
   ```bash
   npm run build
   ```

9. **Start the Development Server**
   ```bash
   # Start Laravel development server
   php artisan serve

   # In a separate terminal, start the frontend development server
   npm run dev

   # Optional: Start queue worker in another terminal
   php artisan queue:work
   ```

10. **Access the Application**
    - Frontend: http://localhost:8000
    - Admin Dashboard: http://localhost:8000/dashboard (after registration)
    - Vite Dev Server: http://localhost:5173 (for hot reload)

## 📁 Project Structure

```
lucky-star-e-commerce/
├── app/
│   ├── Http/Controllers/     # Laravel controllers
│   ├── Models/              # Eloquent models
│   └── Providers/           # Service providers
├── database/
│   ├── migrations/          # Database schema migrations
│   ├── seeders/            # Database seeders
│   └── factories/          # Model factories for testing
├── resources/
│   ├── js/                 # React components and TypeScript files
│   ├── css/                # Tailwind CSS styles
│   └── views/              # Blade templates (minimal usage)
├── routes/
│   ├── web.php             # Web routes
│   ├── auth.php            # Authentication routes
│   └── settings.php        # Settings routes
├── public/                 # Public assets and entry point
├── storage/                # File storage and logs
├── tests/                  # PHP tests (Pest)
└── vendor/                 # PHP dependencies
```

## 👥 Development Guidelines

### Code Standards
- **PHP**: Follow PSR-12 coding standards
- **JavaScript/TypeScript**: Use ESLint and Prettier configurations
- **Git**: Use conventional commit messages
- **Testing**: Write tests for new features and bug fixes

### Contribution Workflow
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes following the coding standards
4. Write or update tests as needed
5. Commit your changes (`git commit -m 'feat: add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### Development Commands
```bash
# Start development servers
php artisan serve          # Laravel backend
npm run dev                # Vite frontend with hot reload

# Run tests
composer run test
php artisan test

# Code formatting
npm run format
./vendor/bin/pint

# Type checking
npm run types

# Linting
npm run lint

# Build for production
npm run build
```

## 🔮 Future Development

This project has an extensive roadmap of planned features and enhancements. For detailed specifications of upcoming features, please see our comprehensive **[Future Features Documentation](docs/FUTURE_FEATURES.md)**.

The Future Features document includes:
- **Detailed Feature Specifications**: Complete user experience descriptions, technical requirements, and implementation guidelines
- **Advanced Order Tracking**: Real-time tracking with carrier integrations and customer notifications
- **Multi-location Inventory**: Warehouse management and inter-location transfers
- **Marketing & Promotions**: Loyalty programs, coupon campaigns, and flash sales
- **Content Management System**: Dynamic content management and theme customization
- **Analytics & Reporting**: Comprehensive business intelligence and performance metrics
- **API Integrations**: Third-party service integrations for shipping, payments, and accounting
- **Mobile Applications**: Native mobile apps for customers and staff
- **AI-Powered Features**: Product recommendations, chatbot support, and predictive analytics

The roadmap is organized into development phases with clear priorities and implementation timelines.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact Information

- **Project Maintainer**: Lucky Star Development Team
- **Email**: dev@luckystar-ecommerce.com
- **GitHub**: [Lucky Star E-commerce Repository](https://github.com/your-username/lucky-star-e-commerce)
- **Documentation**: [Project Wiki](https://github.com/your-username/lucky-star-e-commerce/wiki)

## 🙏 Acknowledgments

- Built with [Laravel](https://laravel.com) - The PHP Framework for Web Artisans
- UI Components powered by [shadcn/ui](https://ui.shadcn.com) and [Radix UI](https://www.radix-ui.com)
- Database hosting provided by [Neon.tech](https://neon.tech)
- Icons by [Lucide](https://lucide.dev)

---

**Happy Coding! 🚀**

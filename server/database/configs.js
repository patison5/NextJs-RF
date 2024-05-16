exports.RussianLauncherConnectionOptions = {
    host: process.env.DB_MAIN_HOST || '127.0.0.1',
    port: process.env.DB_MAIN_PORT || 3306,
    user: process.env.DB_MAIN_USER || 'root',
    password: process.env.DB_MAIN_PASSWORD || "",
    database: process.env.DB_MAIN_DATABASE || "launcher",
    dateStrings: [
        'DATE',
        'DATETIME'
    ]
};

exports.CanadianLauncherConnectionOptions = {
    host: process.env.DB_MAIN_HOST || '127.0.0.1',
    port: process.env.DB_MAIN_PORT || 3306,
    user: process.env.DB_MAIN_USER || 'root',
    password: process.env.DB_MAIN_PASSWORD || "",
    database: process.env.DB_MAIN_DATABASE || "launcher",
    dateStrings: [
        'DATE',
        'DATETIME'
    ]
};

exports.MarketplaceConnectionOptions = {
    host: process.env.DB_LICENSE_HOST || '127.0.0.1',
    port: process.env.DB_LICENS_PORT || 3306,
    user: process.env.DB_LICENSE_USER || 'root',
    password: process.env.DB_LICENSE_PASSWORD || "",
    database: process.env.DB_LICENSE_DATABASE || "rf_marketplace",
    dateStrings: [
        'DATE',
        'DATETIME'
    ]
};
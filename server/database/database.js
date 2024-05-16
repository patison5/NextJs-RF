const mysql = require('mysql2');
const Configs = require('./configs')

var russianLauncherPool = mysql.createPool(Configs.RussianLauncherConnectionOptions);
var canadianLauncherPool = mysql.createPool(Configs.CanadianLauncherConnectionOptions);
var marketPool = mysql.createPool(Configs.MarketplaceConnectionOptions);

exports.GetConnection = (type) => {
    var connectionPool;
    switch (type) {
        case "Russian": {
            connectionPool  = russianLauncherPool;
            break;
        }
        case "Canadian": {
            connectionPool  = canadianLauncherPool;
            break;
        }
        case "Market": {
            connectionPool  = marketPool;
            break;
        }
        default: {
            throw Error("Ошибка, запрошен коннект к несуществующему месту с базой!");
        }
    }

    return {
        beginTransaction: function (callback) {
            connectionPool.getConnection(function (err, conn) {
                if (err) {
                    return callback(err, null);
                }

                conn.beginTransaction(function (err) {
                    if (err) {
                        conn.release();
                        // console.log(`connection for ${type} database released`)
                        return callback(err, null);
                    }
                    callback(null, conn);
                });
            });
        },

        commit: function (conn, callback) {
            conn.commit(function (err) {
                if (err) {
                    return conn.rollback(function () {
                        conn.release();
                        // console.log(`connection for ${type} database released`)
                        callback(err, null);
                    });
                }

                conn.release();
                // console.log(`connection for ${type} database released`)
                callback(null, true);
            });
        },

        rollback: function (conn, callback) {
            conn.rollback(function () {
                conn.release();
                // console.log(`connection for ${type} database released`)
                callback(null, true);
            });
        },
        
        query: async function () {
            var queryArgs = Array.prototype.slice.call(arguments),
                events = [],
                eventNameIndex = {};

            connectionPool.getConnection((err, conn) => {
                if (err) {
                    if (eventNameIndex.error) {
                        eventNameIndex.error();
                    }
                }
                if (conn) { 
                    var q = conn.query.apply(conn, queryArgs);
                    q.on('end', function () {
                        conn.release();
                        // console.log(`connection for ${type} database released`)
                    });

                    events.forEach(function (args) {
                        q.on.apply(q, args);
                    });
                }
            });

            return {
                on: function (eventName, callback) {
                    events.push(Array.prototype.slice.call(arguments));
                    eventNameIndex[eventName] = callback;
                    return this;
                }
            };
        },

        checkDatabaseLockStatus: function () {
            return new Promise((resolve, reject) => {

                // const query = `SELECT * FROM INFORMATION_SCHEMA.INNODB_LOCKS;`;
                const query = `
                    SELECT 
                        * 
                    FROM 
                        information_schema.tables
                    WHERE 
                        table_schema = 'rf_licenses' 
                            AND 
                        table_name = 'rf_airdrops_se'
                    LIMIT 1;
                `;

                connectionPool.getConnection(function (err, conn) {
                    if (err) {
                        return reject(err);
                    }

                    conn.query(query, function (err, results) {
                        conn.release();

                        if (err) {
                            return reject(err);
                        }

                        if (results.length <= 0) {
                            console.log(results)
                        }
                        resolve(results.length <= 0);
                    });
                });
            });
        },

        checkTableLockStatus: function () {
            return new Promise((resolve, reject) => {

                // const query = `SELECT * FROM INFORMATION_SCHEMA.INNODB_LOCKS;`;
                const query = `
                    SELECT 
                        * 
                    FROM 
                        information_schema.tables
                    WHERE 
                        table_schema = ? 
                            AND 
                        table_name = ??
                    LIMIT 1;
                `;

                connectionPool.getConnection(function (err, conn) {
                    if (err) {
                        return reject(err);
                    }

                    conn.query(query, function (err, results) {
                        conn.release();

                        if (err) {
                            return reject(err);
                        }

                        if (results.length <= 0) {
                            console.log(results)
                        }
                        resolve(results.length <= 0);
                    });
                });
            });
        }
    }
}


// MARK: - Private Methods --------------------------------------------------------------------------

checkDatabase = async (pool, prefix) => {
    try {
        await pool.promise().query('SELECT 1');
        console.log(`[MySql][${prefix}]: Database is available.`);
        return true;
    } catch (error) {
        console.log(`[MySql][${prefix}]:`, error)
        return false;
    }
}

checkDatabases = async function () {
    const isRussianDatabaseEnable = await checkDatabase(russianLauncherPool, "russianLauncher");
    const isCanadianDatabaseEnable = await checkDatabase(canadianLauncherPool, "canadianLauncher");
    const isOstDatabaseEnable = await checkDatabase(marketPool, "Market");
    return isRussianDatabaseEnable && isOstDatabaseEnable && isCanadianDatabaseEnable;
};

// MARK: - Exports --------------------------------------------------------------------------

exports.CheckDatabaseConnection = checkDatabase;
exports.CheckDatabasesConnection = checkDatabases;
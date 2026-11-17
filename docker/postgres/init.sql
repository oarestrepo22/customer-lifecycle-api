
SELECT 'CREATE DATABASE customers_dev'
WHERE NOT EXISTS (
  SELECT FROM pg_database WHERE datname = 'customers_dev'
)\gexec

SELECT 'CREATE DATABASE customers_prod'
WHERE NOT EXISTS (
  SELECT FROM pg_database WHERE datname = 'customers_prod'
)\gexec

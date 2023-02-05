# 🍱 Golang Graphql Boilerplate

Golang, is a statically typed, compiled programming language designed at Google that aids in building simple, reliable, and efficient software. 99designs/gqlgen is go generate based graphql server library schema first, type safe and enables Codegen.

## 📚 Description 

This boilerplate leverages the Graphql to quickly prototype backend applications. It comes with database, logging, security, and authentication features out of the box.

---

## 🍬 Features

- Based on [gqlgen](https://github.com/99designs/gqlgen).

- [SQLC](https://sqlc.dev/) to Compile SQL to type-safe code for Postgres. But can support MYSQL, SQLite.

- [Paseto](https://paseto.io/) for token-based authentication, provide strong token signing algorithms out of the box.

- [godotenv](https://github.com/joho/godotenv) for working with env configurations.

---

## 🛠️ Prerequisites
### 🐳 Docker

Please make sure to have Docker Desktop operational on the preferred operating system of choice to quickly get started. To get started, please see the following [link](https://www.docker.com/products/docker-desktop).

 **Note: Despite the fact that Docker Desktop comes free for both Mac and Windows, it only supports the Pro edition of Windows 10. A common workaround is to get [Docker Toolbox](https://docs.docker.com/toolbox/toolbox_install_windows/) which will bypass the Windows 10 Pro restriction by executing Docker in a VM.**

---
## 🔨 Getting Started

## 📦  Packages to install 

### Migrate 

``` bash
$ brew install golang-migrate
```
### Sqlc 

``` bash
$ brew install sqlc
```

## Setup infrastructure

- Create postgres container:

    ```bash
    make postgres
    ```
- Start postgres container:

    ```bash
    make startdb
    ```

- Create database:

    ```bash
    make createdb
    ```

- Run db migration up all versions:

    ```bash
    make migrateup
    ```

- Run db migration down all versions:

    ```bash
    make migratedown
    ```

### How to generate code

- Generate schema SQL file with DBML:

    ```bash
    make db_schema
    ```

- Generate SQL CRUD with sqlc:

    ```bash
    make sqlc
    ```

- Generate DB mock with gomock:

    ```bash
    make mock
    ```

- Create a new db migration:

    ```bash
    migrate create -ext sql -dir db/migration -seq <migration_name>
    ```

### How to run

- Run server:

    ```bash
    make server
    ```

- Run test:

    ```bash
    make test
    ```

# Backend Services

## Tech Stack Used

1. MongoDB (Database)
2. Express (Routing)
3. Mongoose (Database Connection and Querying)

## Setting up database

### Packages needed to be installed

1. MongoDB
2. MongoDB Extension for VS Code (Optional)
3. MongoDB Compass

### Steps to setting up Database

1. Start the mongodb database using the following command on your shell:

    ```text
    mongod --dbpath ./path-to-data-folder
    ```

2. Run the playground files present in the services folder in the following order:

    a. Creation-playground
    b. user-collection
    c. package-collection
    d. shipment-collection

    Note: If you do not have the plugin run the contents of the files as individual commands on the mongo shell

Here is how to get everything up and running!


- Configuring files:

    > package.json            - Change the "name" and "description" fields.
    > static/manifest.json    - Change the "name" and "short_name" fields.
    > static/favicon.png      - Change to a valid image.
    > static/img/manifest.png - Change to a valid image.


- Installing packages:
    > npm i

- Running in Dev mode:
    > npm run dev

- Running in Production [PM2]:
    > npm run build
    > pm2 start npm --name "conan" -- start

- Running in Production [NO PM2]:
    > npm run build
    > node __sapper__/build
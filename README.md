# Jenkins-Learning

Learning Jenkins with base react project
A bit rushed as I done this as a freestyle project on an assignment, had 2 weeks to learn and deploy it

A react-app setup to get familiar with setting up Jenkins as a CI/CD Pipeline for this repo
> Jenkins Website: <https://www.jenkins.io/>

## Docker/Docker-Compose

### All applications configured to be deployable with Jenkins via Docker-Compose

- Deploys the react app in an Nginx webserver container
- Deploys the back end as an ASP.NET runtime container
- Deploys the PostgreSQL Database standalone

## React app

- Shopping list webpage mockup application
- Has a product selection component that is filled via DB, Select product quantity and calcs price
- Shopping List Table that stores the list of items added/deleted

## .NET Core Web API

- Using Entity Framework Core and Npgsql package as a code first approach for dev
- Handles Adding products to shopping list
- Removing products from shopping list

## PostgreSQL Database

- Database that stores she products and shopping list.

### Packages

- TailwindCSS <https://tailwindcss.com/>

## Smee Webhook Payload Forwarding

- Smee Website: <https://smee.io>

> Used to run a local channel to receive webhook payloads without port forwarding.

## Testing

Testing may be added if I get more time.

## Demo

> Basic Demo of the complete app: <https://www.youtube.com/watch?v=RNYwh4-pgqk>

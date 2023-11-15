# Kubernetes project learning with Node.js

This project is to learn how to use Kubernetes using Node.js. It provides detailed steps to create deployment, service, and ingress for a Node.js application running on port 3000.

# System requirements

- Docker
- Kubernetes
- nginx-ingress

## Running Node.js using Docker and Kubernetes

### 1. Building the Docker image

- Use the command `docker build -t node-app:<tag_version> .` to build the image

### 2. Creating Deployment and Service for Node.js through Kubernetes

- Use the command `kubectl apply -f kubernetes/node-deployment.yml` to create the deployment
- Use the command `kubectl apply -f kubernetes/node-service.yml` to create the service
- Use the command `kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.2.0/deploy/static/provider/baremetal/deploy.yaml` to create ingress
- Use the command `kubectl apply -f kubernetes/nginx-ingress.yml` to create the nginx ingress

### 3. Accessing the Node.js application

- Use the command `kubectl get svc -n ingress-nginx` to get port ingress to access the application
- Access the application using the url `http://<localhost>:<port_number>/node-app`

## Related Files

- `app.js`: The code of the Node.js application
- `Dockerfile`: The Dockerfile for building the Docker image
- `node-deployment.yml`: File defining the deployment of Node.js through Kubernetes
- `node-service.yml`: File defining the service for Node.js through Kubernetes
- `nginx-ingress.yml`: File defining the Ingress for Node.js in Kubernetes

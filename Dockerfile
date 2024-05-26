FROM jenkins/jenkins:lts

# Instala o Docker no contêiner Jenkins
USER root
RUN apt-get update && apt-get install -y docker.io

# Ajusta as permissões para o diretório Jenkins
RUN chown -R jenkins:jenkins /var/jenkins_home

# Define o usuário para Jenkins
USER jenkins

# Expor a porta necessária e iniciar Jenkins
EXPOSE 8080
CMD ["jenkins"]

# Etapa 1: Build
FROM node:16-alpine AS build

# Define o diretório de trabalho no contêiner
WORKDIR /app

# Copia os arquivos package.json e package-lock.json para o contêiner
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia todo o código fonte para o contêiner
COPY . .

# Compila a aplicação React
RUN npm run build

# Etapa 2: Servir
FROM nginx:alpine

# Copia os arquivos compilados da etapa de build para o diretório de serviço do Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Exponha a porta que o Nginx usa
EXPOSE 80

# Comando para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]

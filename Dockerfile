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

# Використовуємо Node для створення білду
FROM node:20-alpine as build
WORKDIR /app

# Встановлюємо залежності
COPY package.json package-lock.json ./
RUN npm install

# Копіюємо решту проєкту
COPY . .

# Вимикаємо помилки ESLint warnings
ENV CI=false

# Створюємо продакшн-білд React-додатку
RUN npm run build

# Запускаємо сервер Nginx
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

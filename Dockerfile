# Gunakan image Node.js resmi
FROM node:20

# Set workdir di dalam container
WORKDIR /app

# Copy file ke container
COPY package*.json ./

RUN npm install

COPY . .

# Command untuk menjalankan server
CMD ["node", "server.js"]

# Port yang akan digunakan
EXPOSE 8080
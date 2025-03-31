FROM node:16-alpine

WORKDIR /app

# Kopieren Sie zuerst nur package.json und package-lock.json
COPY package*.json ./

# Abhängigkeiten installieren
RUN npm ci --only=production

# Dann kopieren Sie den Rest des Codes
COPY . .

# Debug-Ausgabe (optional)
RUN ls -la

EXPOSE 4000

CMD ["node", "server.js"]
# 서버만 별도 실행합니다.
FROM node:18-alpine
WORKDIR .
COPY . .
RUN npm install 
CMD ["npm", "start"]
EXPOSE 3000
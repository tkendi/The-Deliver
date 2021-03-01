#nginx가 제공을 해줄 빌드 파일들을 생성하는 코드
FROM node:12 as builder 
# node 12버젼사용 / build파일임을 명시
WORKDIR /app 
# working dir를 /app으로 설정
COPY ./package*.json ./ 
# 먼저 package.json/ package.lock.json 파일을 복사
RUN npm install 
# npm install
COPY . . 
# 로컬에 있는 모든 파일을 복사
RUN npm run build 
# 빌드


FROM nginx 
EXPOSE 3001
COPY ./defalut.conf /etc/nginx/conf.d/default.conf 
# 로컬에 있는 default.conf 파일을 도커 /etc/nginx/conf.d/defalut.conf로 복사
COPY --from=builder /app/build  /usr/share/nginx/html 
# 위에서 생성한 build 파일을 /usr/share/nginx/html로 복사
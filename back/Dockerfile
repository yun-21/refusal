# Node.js 기반의 이미지 사용
FROM node:14

# 작업 디렉토리 생성
WORKDIR /app

# package.json과 package-lock.json을 컨테이너로 복사
COPY package*.json ./

# 의존성 설치 (여기서 추가된 라이브러리도 설치됨)
RUN npm install

# 애플리케이션 소스 코드를 컨테이너로 복사
COPY . .

# 애플리케이션 실행
CMD ["npm", "start"]

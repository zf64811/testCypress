FROM cypress/included:12.9.0

WORKDIR /app
# 复制并安装依赖
COPY package.json package-lock.json ./
RUN npm ci

# 复制项目代码
COPY . .

# 默认运行脚本（可根据需要修改）
CMD ["npm", "run", "test"]
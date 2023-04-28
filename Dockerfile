FROM node:18.12.1-alpine

WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Install dependencies
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --development

# add app
COPY . ./

# Build
RUN npm run build


EXPOSE 3000
# start app
CMD ["npm", "run", "serve"]
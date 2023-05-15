run_server: 
	nodemon ./server/bin/www

prisma_studio:
	cd ./server/ && npx prisma studio

run_client:
	cd ./client && npm start
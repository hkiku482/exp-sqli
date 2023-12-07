local:
	docker compose -f compose.yml up --build -d
	docker compose -f compose.yml exec be sh -c 'npx prisma migrate dev'
	docker compose -f compose.yml exec be sh -c 'npx ts-node ./prisma/seed/main.ts'
	docker compose -f compose.yml up

dev:
	docker compose -f compose-dev.yml up --build

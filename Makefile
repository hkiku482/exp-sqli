local:
	docker compose -fcompose.yml up --build -d

dev:
	docker compose -f compose-dev.yml up --build

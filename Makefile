.PHONY: server
server:
	npx -y http-server -c-1

.PHONY: sass
sass:
	sass --watch index.scss:index.css

.PHONY: esh
esh:
	while sleep 5; do ./esh -s bash -o index.html esh.index.html; done

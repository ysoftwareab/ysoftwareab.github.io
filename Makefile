.PHONY: server
server:
	python -m SimpleHTTPServer

.PHONY: sass
sass:
	sass --watch index.scss:index.css

.PHONY: esh
esh:
	while sleep 5; do ./esh -s bash -o index.html esh.index.html; done

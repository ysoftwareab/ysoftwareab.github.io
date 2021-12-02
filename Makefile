NODE_MODULES_ASSETS += \
	node_modules/@fortawesome/fontawesome-free/webfonts \
	node_modules/bootstrap-icons/font/fonts \
	node_modules/lodash/lodash.js \
	node_modules/bootstrap/dist/js/bootstrap.bundle.js \
	node_modules/typed.js/lib/typed.js \

.PHONY: build
build:
	sass index.scss:index.css
	cp -Rp --parents $(NODE_MODULES_ASSETS) assets/
	./esh -s bash -o index.html esh.index.html


.PHONY: watch
watcg:
	while sleep 5; do make; done


.PHONY: server
server:
	npx -y http-server -c-1

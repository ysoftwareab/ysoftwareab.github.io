NODE_MODULES_ASSETS += \
	node_modules/@fortawesome/fontawesome-free/webfonts \
	node_modules/bootstrap-icons/font/fonts \
	node_modules/lodash/lodash.js \
	node_modules/bootstrap/dist/js/bootstrap.bundle.js \
	node_modules/typed.js/lib/typed.js \

.PHONY: build
build:
	$(MAKE) sass assets esh


.PHONY: sass
sass:
	sass index.scss:index.css


.PHONY: assets
assets:
	cp -Rp --parents $(NODE_MODULES_ASSETS) assets/


.PHONY: esh
esh:
	./esh -s bash -o index.html esh.0.index.html


.PHONY: watch
watch:
	while sleep 5; do make; done


.PHONY: server
server:
	npx -y http-server -c-1

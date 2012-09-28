.PHONY: all

NPM=npm
NPM_OPTS=
NPM_ROOT=.
NPM_MODULES_ROOT=$(NPM_ROOT)/node_modules
NPM_DEPENDS=npm_depends.txt
NPM_MODULES=$(shell cat $(NPM_DEPENDS))
DUMMY_NPM=$(NPM_MODULES_ROOT)/.dummy

all: $(DUMMY_NPM) 

# Downloads all required npm modules for this project
# target: a dummy file in the root npm modules folder used to mark successful download of modules
$(DUMMY_NPM): $(addprefix $(NPM_MODULES_ROOT)/,$(NPM_MODULES))
	echo > $(DUMMY_NPM)

# Downloads an npm module using the npm package manager
# target: an npm module folder (e.g. javascript/node_modules/buster)
$(NPM_MODULES_ROOT)/%:
	cd $(NPM_ROOT); \
		$(NPM) install $(NPM_OPTS) $*

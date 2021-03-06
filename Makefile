.PHONY: all

#
# NPM definitions 
#

NPM=npm
NPM_OPTS=
NPM_ROOT=.
NPM_MODULES_ROOT=$(NPM_ROOT)/node_modules
NPM_DEPENDS=buster buster-amd buster-html-doc requirejs  
NPM_MODULES=$(addprefix $(NPM_MODULES_ROOT)/,$(NPM_DEPENDS)) # e.g. node_modules/buster

#
# JS definitions
#

JS_LIB=scripts/lib
JS_DEPENDS=require.js jquery-1.8.2.js
JS_MODULES=$(addprefix $(JS_LIB)/,$(JS_DEPENDS))

all: $(NPM_MODULES) $(JS_MODULES)

#
# NPM targets 
#

# Downloads an npm module using the npm package manager
# target: an npm module folder (e.g. javascript/node_modules/buster)
$(NPM_MODULES_ROOT)/%:
	cd $(NPM_ROOT); \
		$(NPM) install $(NPM_OPTS) $*

#
# JS targets 
#

# $1 = url
# $2 = file destination
define wget_rule
$(2): 
	$$(shell wget $(1) -O $(2))
endef

# $1 = url to js file
define wget_js_rule
$(call wget_rule,$(1),$(JS_LIB)/$(shell basename $(1)))
endef

$(eval $(call wget_js_rule,http://requirejs.org/docs/release/2.0.6/comments/require.js))
$(eval $(call wget_js_rule,http://code.jquery.com/jquery-1.8.2.js))

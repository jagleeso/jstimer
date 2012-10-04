var require = {
    // By default load any module IDs from 'scripts'
    // baseUrl: 'scripts',
    // NOTE: looks like using a different requirejs baseUrl and busterjs rootPath leads to 
    // "Script Error"'s being thrown from requirejs.
    // Add paths for lib modules (e.g. jquery)
    paths: {
        timer: 'scripts/timer',
        klass: 'scripts/klass',
        jquery: 'scripts/lib/jquery-1.8.2',
    }
};

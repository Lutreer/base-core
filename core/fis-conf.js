fis.config.set('project.exclude',
    [
        'css/base/**',
        'css/iconfont/**',
        'js/library/**',
        'js/tomasky/**',
        'fis*.js',
        'templates/**',
        'dist*/**'
    ]);
fis.config.set('modules.postpackager', 'simple');

//开启autoCombine可以将零散资源进行自动打包
//fis.config.set('settings.postpackager.simple.autoCombine', true);

// 设置静态资源的域名前缀
//fis.config.set('roadmap.domain', 'http://assets.fanqiele.com/core');
#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" "$0" "$@"

var path = require('path');
var shell = require('shelljs');

var distFolder = path.join(__dirname, '..', 'dist');
var environments = {
    prod: { server: 'javabin@javazone.no', dir: '/home/javabin/web/2016/jz-frontend' },
    test: { server: 'javabin@test.javazone.no', dir: '/home/javabin/web/2016/jz-frontend' },
    dev: { server: 'javabin@192.168.111.222', dir: '/home/javabin/web/2016/jz-frontend' },
    prod2: { server: 'javabin@139.162.151.95', dir: '/home/javabin/web/2016/jz-frontend' }
};

function toArray(arrayLike) {
    return Array.prototype.slice.call(arrayLike);
}

function abort(msg) {
    if (msg)
        console.error(msg);

    process.exit();
}

function getEnvironmentArg(args) {
    if (args.length !== 3)
        abort('Wrong number of arguments.\nExample: npm run deploy [env]');

    return args[2];
}

function getEnvironment(environmentArg) {
    if (!(environmentArg in environments))
        abort('Unknown environment. Valid environments: ' + Object.keys(environments).join(', '));

    return environments[environmentArg];
}

function run() {
    var cmd = toArray(arguments).join(' ');
    return shell.exec(cmd, {silent: true});
}

function ssh(server) {
    var args = '\'' + toArray(arguments).slice(1).join(' ') + '\'';
    console.log(server, args);
    return run('ssh', server, args);
}

function main(args) {
    var envArg = getEnvironmentArg(args);
    var environment = getEnvironment(envArg);
    var server = environment.server;
    var root = environment.dir;
    var folder = Date.now().toString();
    var res = ssh(server, 'cd', root, '&&', 'mkdir', '-p', folder);
    if (res.code !== 0)
        abort('Failed trying to create deploy folder');

    res = ssh(server, 'cd', root, '&&', 'test', '-L', 'current');
    if (res.code === 0) {
        res = ssh(server, 'cd', root, '&&', 'cp', '-pr', 'current/', folder);
        if (res.code !== 0)
            abort('Failed trying to copy old version to new folder');
    }

    var remote = server + ':' + path.join(root, folder);
    res = run('rsync', '-a', '--delete', '--no-p', '--no-g', distFolder + '/', '--chmod=Dg+s,ug+rwx,Fug+rw,+X,o+r', '--perms', remote);
    if (res.code !== 0)
        abort('rsyncing failed');

    res = ssh(server, 'cd', root, '&&', 'ln', '-sfn', folder, 'current');
    if (res.code !== 0)
        abort('symlinking failed');

    console.log('Deployment done');
}

main(process.argv);

module.exports = {
    apps: [
        {
            name: "ameva-infra",
            script: "npm",
            args: "start",
            cwd: "/root/ameva-infra",

            env: {
                NODE_ENV: "production",
                PORT: 7004
            }
        }
    ]
};
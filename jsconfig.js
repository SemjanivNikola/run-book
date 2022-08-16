module.exports = {
    "compilerOptions": {
        "module": "commonjs",
        "target": "es6",
        "baseUrl": ".",
        "paths": {
            "@/*": ["./src/*"],
            "@/modules/*": ["./src/store/modules/*"],
        },
    },
    "exclude": ["node_modules", "dist"],
    "include": ["src/**/*"],
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
const _1 = require(".");
const saveDir = process.argv[2] && (0, path_1.resolve)(process.argv[2]);
if (!saveDir) {
    console.error('No save directory specified');
    process.exit(1);
}

const transSaveDir = process.argv[3] && (0, path_1.resolve)(process.argv[3]);
if (!transSaveDir) {
    console.error('No translate save directory specified');
    process.exit(1);
}
const outputDir = (0, path_1.resolve)(saveDir);
console.log('Save to:', outputDir);
const transOutputDir = (0, path_1.resolve)(transSaveDir);
console.log('Translate save to:', transOutputDir);
(0, fs_1.mkdirSync)(outputDir, { recursive: true });
(0, fs_1.mkdirSync)(transOutputDir, { recursive: true });
(async () => {
    const unpacker = new _1.RsnsUnpacker();
    const ver = await unpacker.getLatestVersion();
    console.log('Latest version:', ver);
    const binaryMap = await unpacker.getBinaryConfig();
    Object.entries(binaryMap).forEach(([name, data]) => {
        const file = `${name}.json`;
        console.log('Save', file);
        (0, fs_1.writeFileSync)((0, path_1.resolve)(outputDir, file), JSON.stringify(data, undefined, 2));
    });
    const transMap = await unpacker.getTranslate();
    Object.entries(transMap).forEach(([name, data]) => {
        const file = `${name}.json`;
        console.log('Save', file);
        (0, fs_1.writeFileSync)((0, path_1.resolve)(transOutputDir, file), JSON.stringify(data, undefined, 2));
    });
})();

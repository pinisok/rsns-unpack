"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBinaryConfig = exports.getBinaryConfigList = exports.getLatestVersion = void 0;
const jab_1 = require("./jab");
const TXT_URL = 'https://reso-index.ujoygames.co.kr/index_Release.txt';
const getBinaryConfigUrl = (version) => `http://reso-resource.ujoygames.co.kr/KR/Android/${version}/BinaryConfig/binaryConfig.jab`;
const getTranslateUrl = (version) => `http://reso-resource.ujoygames.co.kr/KR/Android/${version}/Translate/translate.jab`;
const getLatestVersion = async () => {
    const txt = await fetch(TXT_URL).then(r => r.text());
    const androidRows = txt.split(/[\n\r]+/).filter(row => row.match(/^Android,\s*KR,/));
    const lastRow = androidRows[androidRows.length - 1].split(/,\s*/);
    return lastRow[5];
};
exports.getLatestVersion = getLatestVersion;
const getBinaryConfigList = async (version) => {
    const data = await fetch(getBinaryConfigUrl(version)).then(r => r.arrayBuffer());
    const reader = new jab_1.RsnsJabReader(Buffer.from(data));
    return reader.read(0);
};
exports.getBinaryConfigList = getBinaryConfigList;
const getBinaryConfig = async (version) => {
    const list = await (0, exports.getBinaryConfigList)(version);
    return Object.fromEntries(list.map(({ name, data }) => [name, data]));
};
exports.getBinaryConfig = getBinaryConfig;
const getTranslateList = async (version) => {
    const data = await fetch(getTranslateUrl(version)).then(r => r.arrayBuffer());
    const reader = new jab_1.RsnsJabReader(Buffer.from(data));
    return reader.read(1);
};
exports.getTranslateList = getTranslateList;
const getTranslate = async (version) => {
    const list = await (0, exports.getTranslateList)(version);
    return Object.fromEntries(list.map(({ name, data }) => [name, data]));
};
exports.getTranslate = getTranslate;
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RsnsJabReader = void 0;
const buffer_reader_1 = __importDefault(require("buffer-reader"));
const zlib_1 = require("zlib");
const binaryConfig_1 = require("./binaryConfig");
const translate_1 = require("./translate");
class RsnsJabReader {
    dirData;
    data;
    constructor(buffer) {
        const r = new buffer_reader_1.default(buffer);
        r.seek(2);
        this.dirData = r.nextBuffer(r.nextUInt32LE() - 4);
        this.data = r.restAll();
    }
    read(type = 0) {
        const r = new buffer_reader_1.default(this.dirData);
        const length = r.nextUInt32LE();
        this.nextString(r);
        const list = [];
        for (let i = 0, name = ''; i < length; i++) {
            const nameLackSize = r.nextUInt16LE();
            const strLength = r.nextUInt16LE();
            name = `${name.substring(0, nameLackSize)}${r.nextString(strLength)}`;
            const offset = r.nextUInt32LE();
            const size = r.nextUInt32LE();
            const rawSize = r.nextUInt32LE();
            r.move(8);
            if(type == 1){
                if(name == "kr/Config/ConfigLanguage.bin"){
                    list.push({
                        name:"ConfigLanguage.bin",
                        offset,
                        size,
                        rawSize,
                    });
                }
            }
            else{
                list.push({
                    name,
                    offset,
                    size,
                    rawSize,
                });
            }
        }
        return list.map(({ name, offset, size }) => {
            const rawData = (0, zlib_1.inflateRawSync)(this.data.subarray(offset, offset + size));
            let reader;
            if(type == 0){
                reader = new binaryConfig_1.RsnsBinaryConfigReader(rawData);
            }
            else{
                reader = new translate_1.RsnsLanguageConfigReader(rawData);
            }
            return {
                name: name.replace(/\.bin$/, ''),
                ...reader.read(),
            };
        });
    }
    nextString(r) {
        return r.nextString(r.nextUInt16LE());
    }
}
exports.RsnsJabReader = RsnsJabReader;

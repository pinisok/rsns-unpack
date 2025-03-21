"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RsnsLanguageConfigReader = void 0;
const buffer_reader_1 = __importDefault(require("buffer-reader"));
class RsnsLanguageConfigReader {
    version;
    size;
    data = new Map();
    constructor(data) {
        const r = new buffer_reader_1.default(data);
        r.seek(0);
        this.version = r.nextUInt8();
        this.nextUTF(r);
        r.move(8);
        this.size = r.nextInt16LE();
        for(let i = 0; i < this.size; i++){
            let LangPack = {};
            LangPack.name = this.nextUTF(r).toString();
            LangPack.length = r.nextInt32LE();
            LangPack.startOffset = r.offset;
            LangPack.size = r.nextInt32LE();
            LangPack.data = {}
            for(let n = 0; n < LangPack.size; n++){
                let field_name = this.nextUTF(r).toString();
                let field_size = r.nextInt32LE();
                
                LangPack.data[field_name] = {};
                for(let o=0; o < field_size; o++){
                    LangPack.data[field_name][this.nextUTF(r).toString()] = this.nextUTF(r).toString();
                }
            }
            this.data.set(
                LangPack.name, 
                LangPack.data
            );
            r.offset = LangPack.startOffset + LangPack.length;
        }
    }
    nextUTF(r) {
        const ofs = r.offset;
        var size = r.nextUInt16LE();
        if(size == 0xffff){
            r.offset = ofs;
            size = r.nextInt32LE();
        }
        return r.nextBuffer(size);
    }
    read() {
        let data = Object.fromEntries(this.data);
        return { data };
    }
}
exports.RsnsLanguageConfigReader = RsnsLanguageConfigReader;

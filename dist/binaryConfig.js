"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RsnsBinaryConfigReader = void 0;
const buffer_reader_1 = __importDefault(require("buffer-reader"));
class RsnsBinaryConfigReader {
    stringData;
    stringCache = new Map();
    data;
    constructor(data) {
        const r = new buffer_reader_1.default(data);
        r.seek(0x42);
        this.stringData = r.nextBuffer(r.nextUInt32LE());
        this.data = r.nextBuffer(r.nextUInt32LE());
    }
    read() {
        const r = new buffer_reader_1.default(this.data);
        r.move(r.nextUInt32LE());
        r.move(r.nextUInt32LE());
        const data = this.readObjectList(r.nextBuffer(r.nextUInt32LE()));
        return { data };
    }
    readMetaData(data) {
        let p = 0;
        p += this.readCarryString(data, p).size;
        p += 8;
        const { text } = this.readCarryString(data, p);
        return {
            factory: text.replace('factory=', ''),
        };
    }
    readObjectList(data) {
        return this.readList(data, d => this.readObject(d));
    }
    readObject(data) {
        return Object.fromEntries(this.readList(data, d => this.readKeyValuePair(d)));
    }
    readList(data, handler) {
        const r = new buffer_reader_1.default(data);
        const length = r.nextUInt32LE();
        const result = [];
        for (let i = 0; i < length; i++) {
            result.push(handler(r.nextBuffer(r.nextUInt32LE())));
        }
        return result;
    }
    readKeyValuePair(data) {
        const r = new buffer_reader_1.default(data);
        const key = this.getString(r.nextUInt32LE());
        const type = r.nextUInt8();
        try {
            const value = this.getValueByType(type, r.nextBuffer(data.length - 5));
            return [key, value];
        }
        catch (error) {
            console.error('Error', key, type);
            throw error;
        }
    }
    getValueByType(type, value) {
        switch (type) {
            case 0:
                return value.readUint32LE();
            case 1:
                return value.readDoubleLE();
            case 2:
                return Number(value.readBigInt64LE());
            case 3:
                return Boolean(value.at(0));
            case 4:
            case 5:
            case 9:
            case 11:
            case 12:
            case 13:
            case 14:
                return this.getString(value.readUint32LE());
            case 6:
                return value.readInt32LE();
            case 7:
            case 8: {
                const r = new buffer_reader_1.default(value);
                const size = r.nextUInt32LE();
                const itemType = r.nextUInt8();
                const listData = r.nextBuffer(size - 1);
                return this.readList(listData, data => this.getValueByType(itemType, data));
            }
            case 15:
                return Number(value.readBigUInt64LE());
            case 99:
                return this.readObject(value);
            default:
                console.error('Error', type, value);
                throw new Error(`unknown type=${type}`);
        }
    }
    getString(offset) {
        if (this.stringCache.has(offset))
            return this.stringCache.get(offset);
        const { text } = this.readCarryString(this.stringData, offset);
        this.stringCache.set(offset, text);
        return text;
    }
    readCarryString(data, offset) {
        let length = 0;
        let carry = 0;
        while (true) {
            const byte = data.readUInt8(offset + carry);
            length += (byte & 0b01111111) << (carry * 7);
            if (!(byte & 0b10000000))
                break;
            carry++;
        }
        const start = offset + carry + 1;
        const text = data.subarray(start, start + length).toString('utf8');
        return {
            size: carry + 1 + length,
            text,
        };
    }
}
exports.RsnsBinaryConfigReader = RsnsBinaryConfigReader;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RsnsUnpacker = exports.CharacterImageType = void 0;
const unity_js_1 = require("@arkntools/unity-js");
const dev_1 = require("./dev");
const bundleLoadOptions = {
    unityCNKey: '5265736F6E616E63655265626F726E52',
};
const getAssetUrl = (version, path) => `http://reso-resource.ujoygames.co.kr/KR/Android/${version}/Asset/${path}.asset`;
var CharacterImageType;
(function (CharacterImageType) {
    CharacterImageType["FACE"] = "face";
    CharacterImageType["FULL"] = "resUrl";
    CharacterImageType["GACHA"] = "gacha";
    CharacterImageType["HALF"] = "roleListResUrl";
    CharacterImageType["SQUADS_HALF1"] = "squadsHalf1";
    CharacterImageType["SQUADS_HALF2"] = "squadsHalf2";
    CharacterImageType["STATE2_FACE"] = "State2Face";
    CharacterImageType["STATE2_FULL"] = "State2Res";
    CharacterImageType["STATE2_HALF"] = "State2RoleListRes";
})(CharacterImageType || (exports.CharacterImageType = CharacterImageType = {}));
class RsnsUnpacker {
    version;
    binaryConfig;
    translate;
    assetCache = new Map();
    async getLatestVersion() {
        if (!this.version)
            this.version = await (0, dev_1.getLatestVersion)();
        return this.version;
    }
    async getBinaryConfig(name) {
        if (!this.binaryConfig) {
            this.binaryConfig = await (0, dev_1.getBinaryConfig)(await this.getLatestVersion());
        }
        return typeof name === 'string' ? this.binaryConfig[name] : this.binaryConfig;
    }
    async getTranslate(name) {
        if (!this.translate) {
            this.translate = await (0, dev_1.getTranslate)(await this.getLatestVersion());
        }
        return typeof name === 'string' ? this.translate[name] : this.translate;
    }
    async getAsset(path) {
        path = path.toLowerCase();
        const cached = this.assetCache.get(path);
        if (cached)
            return cached;
        const url = getAssetUrl(await this.getLatestVersion(), path);
        const data = await fetch(url).then(r => r.arrayBuffer());
        const asset = await (0, unity_js_1.loadAssetBundle)(Buffer.from(data), bundleLoadOptions);
        this.assetCache.set(path, asset);
        return asset;
    }
    async getAssetSpriteImageJimp(path) {
        const paths = path.split(/[/\\]+/);
        const name = paths.pop();
        const assetPath = paths.join('/');
        const asset = await this.getAsset(assetPath);
        const sprite = asset.objects.find((obj) => obj.type === unity_js_1.AssetType.Sprite && obj.name === name);
        if (!sprite)
            throw new Error(`Sprite not found: ${path}`);
        const image = await sprite.getImageJimp();
        if (!image)
            throw new Error(`Sprite no image: ${path}`);
        return image;
    }
    async getCharacterImage(id, type = CharacterImageType.FACE) {
        const unitViewFactory = await this.getBinaryConfig('UnitViewFactory');
        const unitView = unitViewFactory.find(({ character }) => character === id);
        const path = unitView[type];
        return await this.getAssetSpriteImageJimp(path);
    }
}
exports.RsnsUnpacker = RsnsUnpacker;

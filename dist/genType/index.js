"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bun_1 = require("bun");
const os_1 = require("os");
const path_1 = require("path");
const url_1 = require("url");
const comlink_1 = require("comlink");
const dev_1 = require("../dev");
class WorkerPool {
    url;
    static THREAD_NUM = (0, os_1.cpus)().length;
    pool;
    constructor(url) {
        this.url = url;
        this.pool = new Array(WorkerPool.THREAD_NUM).fill(null).map(() => {
            const worker = new Worker(url);
            return { worker, wrapper: (0, comlink_1.wrap)(worker) };
        });
    }
    async run(taskList, taskFunc) {
        taskList = [...taskList];
        await Promise.all(this.pool.map(async ({ wrapper }) => {
            while (true) {
                const task = taskList.shift();
                if (!task)
                    break;
                try {
                    await taskFunc(wrapper, task);
                }
                catch (error) {
                    console.error(error);
                }
            }
        }));
    }
    destroy() {
        this.pool.forEach(({ worker, wrapper }) => {
            wrapper[comlink_1.releaseProxy]();
            worker.unref();
        });
    }
}
const TYPES_DIR = (0, path_1.resolve)(__dirname, '../types');
(async () => {
    console.time('Total time');
    const workerPool = new WorkerPool((0, url_1.pathToFileURL)((0, path_1.resolve)(__dirname, 'worker.ts')).href);
    const version = await (0, dev_1.getLatestVersion)();
    console.log('Version', version);
    console.time('Download and decode BinaryConfig');
    const task = (await (0, dev_1.getBinaryConfigList)(version)).map(({ name, data }) => ({
        name: name.replace('.json', ''),
        data: JSON.stringify(data).replace(/\\"?/g, ''),
    }));
    console.timeEnd('Download and decode BinaryConfig');
    await workerPool.run(task, async (worker, { name, data }) => {
        console.time(name);
        await (0, bun_1.write)((0, path_1.resolve)(TYPES_DIR, `${name}.d.ts`), await worker.typeofJson(data, name));
        console.timeEnd(name);
    });
    workerPool.destroy();
    console.log('Create index.d.ts');
    (0, bun_1.write)((0, path_1.resolve)(TYPES_DIR, 'index.d.ts'), [
        ...task.map(({ name }) => `import { ${name} } from './${name}';`),
        '',
        'export interface BinaryConfigMap {',
        ...task.map(({ name }) => `  ${name}: ${name};`),
        '}',
    ].join('\n'));
    console.timeEnd('Total time');
})();

import { typeofSjsonc as typeofJson } from 'typeof-sjsonc';
import { type Remote } from 'comlink';
export type WorkerWrapper = Remote<{
    typeofJson: typeof typeofJson;
}>;

import { cloneDeep } from "lodash"


const SwapElemInArray = (arr: any, a: any, b: any) => {
    return arr[a] = arr.splice(b, 1, arr[a])[0];
}

export default SwapElemInArray
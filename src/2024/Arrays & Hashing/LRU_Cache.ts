//https://leetcode.com/problems/lru-cache/
/*
Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

Implement the LRUCache class:

LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
int get(int key) Return the value of the key if the key exists, otherwise return -1.
void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
The functions get and put must each run in O(1) average time complexity.
 */
class LRUCache {
    private max: number;
    private cache: any[];
    private epoch:number

    constructor(capacity: number) {
        this.max = capacity
        this.cache = []
        this.epoch = 0
    }

    get(key: number): number {
        for(let i = 0; i < this.cache.length;i++){
            if(this.cache[i][0] === key){
                this.cache[i][2] = this.epoch
                this.epoch += 1
                console.log(this.cache)
                return this.cache[i][1]
            }
        }
        return -1
    }

    put(key: number, value: number): void {
        if(this.get(key) !== -1){
            for(let i = 0; i < this.cache.length;i++){
                if(this.cache[i][0] === key){
                    this.cache[i][1] = value
                    this.cache[i][2] = this.epoch
                    this.epoch++
                }
            }
        }

        else if (this.cache.length === this.max){
            let oldest = [Infinity,0]
            for(let i = 0; i < this.cache.length;i++){
                if(this.cache[i][2] < oldest[0]){
                    oldest[0] = this.cache[i][2]
                    oldest[1] = i
                    console.log("old " + oldest)
                }
            }
            this.cache[oldest[1]] = [key,value,this.epoch]
        }
        else{
            this.cache.push([key,value,this.epoch])
        }
        console.log(this.cache)
        this.epoch += 1
    }
}

let x = new LRUCache(2)
x.put(1,1)
x.put(2,2)
x.get(1)
x.put(3,3)
x.get(2)
x.put(4,4)
x.get(1)
x.get(3)
x.get(4)
console.log(x.get(2))
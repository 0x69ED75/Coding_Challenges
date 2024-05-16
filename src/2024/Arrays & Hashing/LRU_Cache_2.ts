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
    cache:Map<number,number> = new Map()
    max:number = 0

    constructor(capacity: number) {
        this.max = capacity
    }

    get(key: number): number {
        let val = this.cache.get(key)
        if(val !== undefined){
            this.cache.delete(key)
            this.cache.set(key,val)
            return val
        }
        else{
            return -1
        }
    }

    put(key: number, value: number): void {
        this.cache.delete(key)
        this.cache.set(key,value)
        if(this.cache.size > this.max){
            this.cache.delete(this.cache.keys().next().value)
        }
    }
}

let x = new LRUCache(2)
x.put(2,1)
x.put(1,1)
x.put(2,3)
x.put(4,1)
x.get(1)
x.get(2)
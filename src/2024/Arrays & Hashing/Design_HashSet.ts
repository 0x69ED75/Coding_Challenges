// https://leetcode.com/problems/design-hashset/description/
/*
Design a HashSet without using any built-in hash table libraries.

Implement MyHashSet class:

void add(key) Inserts the value key into the HashSet.
bool contains(key) Returns whether the value key exists in the HashSet or not.
void remove(key) Removes the value key in the HashSet. If key does not exist in the HashSet, do nothing.
 */

// Solution avoids set etc

class MyHashSet {
    hash:number[] = []

    constructor() {

    }

    add(key: number): void {
        if (this.contains(key)) return
        this.hash.push(key)
        console.log(this.hash)
    }

    remove(key: number): void {
        for(let i = 0; i < this.hash.length;i++){
            if(this.hash[i] === key){
                this.hash.splice(i,1)
            }
        }
    }

    contains(key: number): boolean {
        for(let i = 0; i < this.hash.length;i++){
            if(this.hash[i] === key){
                console.log(this.hash)
                return true
            }
        }
        console.log(this.hash)
        return false
    }
}

let x = new MyHashSet
x.add(1)
x.add(3)
x.remove(1)
x.remove(3)
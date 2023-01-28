/*
https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/description/
The school cafeteria offers circular and square sandwiches at lunch break, referred to by numbers 0 and 1 respectively. All students stand in a queue. Each student either prefers square or circular sandwiches.

The number of sandwiches in the cafeteria is equal to the number of students. The sandwiches are placed in a stack. At each step:

If the student at the front of the queue prefers the sandwich on the top of the stack, they will take it and leave the queue.
Otherwise, they will leave it and go to the queue's end.
This continues until none of the queue students want to take the top sandwich and are thus unable to eat.

 */
function countStudents(students: number[], sandwiches: number[]): number {

    let flag:boolean = true
    while(flag){
        console.log(students)
        console.log(sandwiches)
        console.log("---------------")
        flag = false
        for(let i = 0; i < students.length;i++){
            if(students[0] === sandwiches[0]){
                students.shift()
                sandwiches.shift()
                flag = true
            }
            else{
                let studTemp:number = students[0]
                students.shift()
                students.push(studTemp)
            }
        }
    }
    return students.length
};

console.log(countStudents([1,1,1,0,0,1],[1,0,0,0,1,1]))
class MyQueue {
    stack1;
    stack2
    constructor() {
        this.stack1 = []
        this.stack2 = []
    }

    push(x: number): void {
        if (this.stack1.length >= this.stack2){
            this.stack1.unshift(x)
        }
        else{
            this.stack2.unshift(x)
        }      
    }

    pop(): number {
        for (const num of this.stack1){
            this.stack2.unshift(num)
            this.stack1 = []
        }
        const top = this.stack2[0]
        this.stack2.shift()
        for(const num of this.stack2){
            this.stack1.unshift(num)
            this.stack2 = []
        }
        return top
    }

    peek(): number {
        for (const num of this.stack1){
            this.stack2.unshift(num)
            this.stack1 = []
        }
        const top = this.stack2[0]
        for(const num of this.stack2){
            this.stack1.unshift(num)
            this.stack2 = []
        }
        return top
    }

    empty(): boolean {
        if (!this.stack1[0] && !this.stack2[0]){
            return true
        }
        return false
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

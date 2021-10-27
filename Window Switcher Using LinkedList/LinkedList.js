function Linkedlist() {
    function Node(content) {
        this.content = content;
        this.next = this;
        this.prev = this;
    }

    this.head = null;
    this.tail = null;

    this.add = function(content) {
        if (!this.head) {
            this.head = this.tail = new Node(content);
        }
        else {
            this.tail.next = new Node(content);
            this.tail.next.prev = this.tail;
            this.tail = this.tail.next;
            this.tail.next = this.head;
            this.head.prev = this.tail;
        }
    }

    this.move_to_front = function(node) {
        if (node === this.head) {
            return;
        }

        let temp = this.head;
        let isTailNode = false;

        while (temp.next !== node)
            temp = temp.next;

        if (temp.next === this.tail)
            isTailNode = true;

        if(!isTailNode){
            temp.next = node.next;
            node.next.prev = temp;
        }
        else{
            this.tail = this.tail.prev;
        }

        node.next = this.head;
        this.head.prev = node;
        this.head = node;
        this.tail.next = this.head;
        this.head.prev = this.tail;
    }
}
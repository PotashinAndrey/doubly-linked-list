const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    append(data) {
        let newData = new Node(data);

        if (!this.length) {
            this._head = newData;
            this._tail = newData;
            this.length++;
            return this;
        }

        if (this._tail) this._tail.next = newData;
        newData.prev = this._tail;
        this._tail = newData;
        this.length++;

        return this;
    }

    head() {
        if (this._head == null) return null;
        return this._head.data;
    }

    tail() {
        if (this._tail == null) return null;
        return this._tail.data;
    }

    at(index) {
        let temp = this._head;
        for (let i = 0; i < index; i++) {
            temp = temp.next;
        }

        return temp.data;
    }

    insertAt(index, data) {
        let temp = new Node(data);
        let itemLeft = this._head;

        for (let i = 0; i < index-1; i++) {
            itemLeft = itemLeft.next;
        }

        if (!itemLeft) return this;

        let itemRight = itemLeft.next;
        if (itemLeft) itemLeft.next = temp;
        if (!!itemRight) {
            itemRight.prev = temp;
            temp.prev = itemRight;
            temp.next = itemRight;
        }

        return this;
    }

    isEmpty() {
        if (this.length == 0) {
        return true;
        } else {
            return false;
        }
    }

    clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;

        return this;
    }

    deleteAt(index) {
        let temp = this._head;
        for (let i = 0; i < index; i++) {
            temp = temp.next;
        }
        if (!temp) return this;

        let next = temp.next;
        let pre = temp.prev;

        if (next) next.prev = pre;
        if (pre) pre.next = next;

        return this;
    }

    reverse() {
        let temp =  new LinkedList();

        for (let i = this.length - 1; i >= 0; i--) {
            temp.append(this.at(i));
        }

        this._head = temp._head;
        this._tail = temp._tail;

        return this;
    }

    indexOf(data) {
        let temp = this._head;
        for (let i = 0; i < this.length; i++) {
            if (temp.data == data) {
                return i;
            }
            temp = temp.next;
        }

        return -1;
    }
}

module.exports = LinkedList;

class MaxHeap {
  constructor() {
    this.heap = [null];
  }

  insert(node) {
    this.heap.push(node);

    if (this.heap.length > 1) {
      let current = this.heap.length - 1;

      while (
        current > 1 &&
        this.heap[Math.floor(current / 2)] < this.heap[current]
      ) {
        [this.heap[Math.floor(current / 2)], this.heap[current]] = [
          this.heap[current],
          this.heap[Math.floor(current / 2)],
        ];
        current = Math.floor(current / 2);
      }
    }
  }

  remove() {
    let small = this.heap[1];
    let current = this.heap.length - 1;

    // root remove
    if (this.heap.lenght > 2) {
      this.heap[1] = this.heap[current];
      this.heap.splice(current);

      if (this.heap.length === 3) {
        if (this.heap[1] < this.heap[2]) {
          [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
        }
        return small;
      }

      let i = 1;
      let left = 2 * i;
      let right = 2 * i + 1;

      while (
        this.heap[i] <= this.heap[left] ||
        this.heap[i] <= this.heap[right]
      ) {
        if (this.heap[left] > this.heap[right]) {
          [this.heap[i], this.heap[left]] = [this.heap[left], this.heap[i]];
          i = left;
        } else {
          [this.heap[i], this.heap[right]] = [this.heap[right], this.heap[i]];
          i = right;
        }
        left = 2 * i;
        right = 2 * i + 1;
      }
    }
  }
}

const min = new MinHeap();

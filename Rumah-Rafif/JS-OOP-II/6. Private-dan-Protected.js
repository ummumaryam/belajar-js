class Counter {
  #count = 0;
  #increment() {
    return this.#count++;
  }

  getIncrement() {
    this.#increment();
  }

  getCount() {
    return this.#count;
  }
}

let konter = new Counter();
konter.getIncrement();
konter.getIncrement();
konter.count = 1000;
console.log(`count berisi ${konter.getCount()}`);

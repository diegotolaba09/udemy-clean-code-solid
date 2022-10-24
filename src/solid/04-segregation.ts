interface Bird {
  eat(): void;
}

interface FlyingBird {
  fly(): void;
}

interface RunningBird {
  run(): void;
}

interface SwimmerBird {
  swim(): void;
}

class Tucan implements Bird, FlyingBird {
  eat() {}
  fly() {}
}

class Humminbird implements Bird, FlyingBird {
  eat() {}
  fly() {}
}

class Ostrich implements Bird, RunningBird {
  eat() {}
  run() {}
}

class Penguin implements Bird, SwimmerBird {
  eat() {}
  swim() {}
}

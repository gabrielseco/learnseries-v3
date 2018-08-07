declare namespace NodeJS {
  interface Process {
    browser: boolean;
  }

  interface Global {
    fetch: () => void;
  }
}

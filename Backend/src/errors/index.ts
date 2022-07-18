export class DatabaseError extends Error {
  constructor(
    public message: string,
    public error?: any
    ) { 
    super(message);
    this.error = error;

  }
}

export class BadResquestError extends Error {
  constructor(
    public message: string,
    public error?: any
    ) { 
    super(message);
    this.error = error;
  }
}

export class ForbiddenError extends Error {
  constructor(
    public message: string,
    public error?: any
    ) { 
    super(message);
    this.error = error;
  }
}

export class NotFoundError extends Error {
  constructor(
    public message: string,
    public error?: any
    ) { 
    super(message);
    this.error = error;
  }
}

export class UnauthorizedError extends Error {
  constructor(
    public message: string,
    public error?: any
    ) { 
    super(message);
    this.error = error;
  }
}

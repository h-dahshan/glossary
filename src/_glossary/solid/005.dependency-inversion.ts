/**
 * - high-level modules should not depend on low-level modules,
 *      both should depend on abstractions.
 */

// BAD
class _MySQLDatabase {
  save(data: string) {
    console.log(`Saving ${data} to MySQL`);
  }

  // implementation
}
class _AuthService {
  private db = new _MySQLDatabase();

  registerUser(user: string) {
    this.db.save(user);
  }

  // high-level, depends internally on DB implementation
}

// GOOD
interface Database {
  save(data: string): void;

  // abstraction
}
class MySQLDatabase implements Database {
  save(data: string) {
    console.log(`Saving ${data} to MySQL`);
  }

  // implementation
}
class AuthService {
  constructor(private db: Database) {
    // high-level, depends on abstraction Database; implements save
  }

  registerUser(user: string) {
    this.db.save(user);

    // changing a DB implementation won't affect other parts like "here: AuthService"
  }
}

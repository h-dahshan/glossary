/**
 * - a class should have only one reason to change.
 *
 * - each class or module should focus on a single functionality or concern.
 * - this makes your code easier to test, maintain, and extend.
 */

// BAD
class _UserService {
  createUser(user: string) {
    console.log(`User ${user} created`);
  }

  sendEmail(user: string) {
    console.log(`Sending welcome email to ${user}`);
  }
}

// GOOD
class UserService {
  createUser(user: string) {
    console.log(`User ${user} created`);
  }
}
class EmailService {
  sendEmail(user: string) {
    console.log(`Sending welcome email to ${user}`);
  }
}

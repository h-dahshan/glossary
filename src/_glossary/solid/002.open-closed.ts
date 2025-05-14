/**
 * - software entities should be open for extension but closed for modification.
 *
 * - this means you should be able to add new functionality without changing existing code.
 */

// BAD - adding a new discount type requires modifying the calculate method.
class Discount {
  getPrice(price: number, type: string): number | undefined {
    if (type === "regular") return price * 0.9;
    if (type === "vip") return price * 0.8;
  }
}

// GOOD - adding a new discount type doesn't change old implementation
interface DiscountType {
  getPrice(price: number): number;
}
class RegularDiscount implements DiscountType {
  getPrice(price: number): number {
    return price * 0.9;
  }
}
class VipDiscount implements DiscountType {
  getPrice(price: number): number {
    return price * 0.8;
  }
}
// add new class that implements the interface
class ClearanceDiscount implements DiscountType {
  getPrice(price: number): number {
    return price * 0.5;
  }
}

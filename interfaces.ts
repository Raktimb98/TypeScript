interface User {
    id: number;
    name: string;
    email: string;
    // startTrail:()=> string;
    startTrail(): string; // alternative syntax(This one is more logical to me)
    getCoupon(couponName: string): number;
}
const FrostFern: User = {
    id: 1,
    name: "Frost Fern",
    email: "frostfern@xyz.in",
    startTrail() {  // Using method shorthand syntax
        return "Trail started";
    },
    getCoupon(couponName: string) {  // Using method shorthand syntax
        const validCoupons: { [key: string]: number } = {
            'FrostFern50': 50,
            'FrostFern20': 20
        };

        return validCoupons[couponName] ?? 0; // Returns 0 if coupon is invalid
    }
}
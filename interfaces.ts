interface User {
    id: number;
    name: string;
    email: string;
    // startTrail:()=> string;
    startTrail(): string; // alternative syntax(This one is more logical to me)
    getCoupon(couponName: string): number;
}

interface User {
    githubToken?: string; // optional property
}

interface Admin extends User {
    role: 'admin' | 'super-admin';
}

const FrostFern: Admin = {
    id: 1,
    name: "Frost Fern",
    email: "frostfern@xyz.in",
    githubToken: "ghp_1234567890abcdef",
    role: 'admin',


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
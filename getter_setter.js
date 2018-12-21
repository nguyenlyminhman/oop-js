const secret = new WeakMap();
class SecretPerson {
    constructor(name, age) {
        this.name = name
        secret.set(this, { _age : age })
    }
    get age() {
        return secret.get(this)._age
    }

    set age(newAge) {
        secret.get(this)._age = newAge
    }
}


const sp = new SecretPerson('Neko', 123);
console.log("age: " + sp._age) //age: undefined
sp.age = 321
console.log("age: "+ sp.age) // I can get new number => age: 321

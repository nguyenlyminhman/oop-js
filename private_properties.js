class Person {
    constructor(name, age) {
        this.name = name
        this._age = age  //_age is private propertie. I donot want to share.
    }
}

const p = new Person('Neko', 30)
// But '_age' is not a private propertie because we can do this:
console.info("Not private age: " + p._age)
//--------------------------------------------------------------------------------------

const secret = new WeakMap();
class SecretPerson {
    constructor(name, age) {
        this.name = name
        secret.set(this, {_age : age})  //_age is private propertie. I donot want to share.
    }
}

const sp = new SecretPerson("Neko", 123)
console.log("Private age: " + sp._age)
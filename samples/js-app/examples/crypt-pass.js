import { randomBytes, createCipheriv, createDecipheriv } from 'crypto'

class CryptPass {
    constructor(password, key) {
        this.password = password
        this.key = key
    }

    encrypt() {
        const iv = randomBytes(16)
        const cipher = createCipheriv('aes-256-cbc', Buffer.from(this.key, 'hex'), iv)
        let encrypted = cipher.update(this.password, 'utf8', 'hex')
        encrypted += cipher.final('hex')
        return iv.toString('hex') + ':' + encrypted
    }

    static decrypt(encryptedPassword, key) {
        const [ivHex, encrypted] = encryptedPassword.split(':')
        const iv = Buffer.from(ivHex, 'hex')
        const decipher = createDecipheriv('aes-256-cbc', Buffer.from(key, 'hex'), iv)
        let decrypted = decipher.update(encrypted, 'hex', 'utf8')
        decrypted += decipher.final('utf8')
        return decrypted
    }
}

const key = randomBytes(32).toString('hex')
const password = 'mySecretPassword'
const cryptPass = new CryptPass(password, key)

const encryptedPassword = cryptPass.encrypt()
console.log('Зашифрованный пароль:', encryptedPassword)

const decryptedPassword = CryptPass.decrypt(encryptedPassword, key)
console.log('Дешифрованный пароль:', decryptedPassword)

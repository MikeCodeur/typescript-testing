//exo1
function sum(a: number, b: number) {
  return a + b
}

function sumNotNegative(a: number, b: number) {
  const result = a + b
  if (result < 0) {
    return 0
  }
  return a + b
}

class DataBaseConnexion {
  private static instance: DataBaseConnexion
  private hostname: string
  private port: string
  private protocol: string
  private bdd: string[]
  private constructor() {
    this.hostname = process.env.bddhostname ?? 'localhost'
    this.port = process.env.bddport ?? '3301'
    this.protocol = process.env.bddprotocol ?? 'mysql'
    this.bdd = []
    console.log(
      `Connexion à la BDD ${this.protocol} ${this.hostname} ${this.port}`,
    )
  }
  public static getInstance(): DataBaseConnexion {
    if (!DataBaseConnexion.instance) {
      DataBaseConnexion.instance = new DataBaseConnexion()
    }
    return DataBaseConnexion.instance
  }
  public disconnect() {
    console.log(
      `disconnect from ${this.protocol} ${this.hostname} ${this.port}`,
    )
  }
  public execute() {
    console.log(`execute on ${this.protocol} ${this.hostname} ${this.port}`)
  }
  public clearDb() {
    this.bdd = []
  }
  public add(el: string) {
    this.bdd.push(el)
  }
  public addElements(el: string[]) {
    this.bdd = this.bdd.concat(el)
  }
  public getSize() {
    return this.bdd.length
  }
}

export {sum, sumNotNegative, DataBaseConnexion}

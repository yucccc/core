export class Ref {
  constructor(public value: any, public readonly __v_isShallow: boolean) {
    this.value = value
  }
}

const r = new Ref(1, false)
console.log(r)

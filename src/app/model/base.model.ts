export abstract class BaseModel {

  constructor(object?: Object) {
    Object.assign(this, object);
  }
}

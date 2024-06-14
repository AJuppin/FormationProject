export class UserType {
  id!: number;
  type!: string;

  constructor(id?: number, type?: string) {
    if (id) this.id = id;
    if (type) this.type = type;
  }
}

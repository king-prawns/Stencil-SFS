declare global {
  type User = {
    id: number,
    name: string,
    username: string,
    email: string,
    address: Address,
    phone: string,
    website: string,
    company: Company
  }
  type Address = {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: Geo
  }
  type Geo = {
    lat: number,
    lng: number
  }
  type Company = {
    name: string,
    catchPhrase: string,
    bs: string
  }
  type Users = Array<User>
  type Post = {
    body: string
    id: number
    title: string
    userId: number
  }
  type Posts = Array<Post>
  type Todo = any
  type Todos = Array<Todo>
}
export { };

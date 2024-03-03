```plantuml
' Split into 4 pages
page 2x2
skinparam pageMargin 10
skinparam pageExternalColor gray
skinparam pageBorderColor black

package Models <<Folder>>{
    class User{
        - String name
        - String email
        - String password
        - List<Profile> profiles
        + getters()
        + setters()
    }

    class Profile {
        - String name
        - String description
        + getters()
        + setters()
    }

    class Product {
        - String name
        - String description
        - Double price
        - Byte[] image
        - Category category
        + getters()
        + setters()
    }

    class Category {
        - String name
        - String description
        + getters()
        + setters()    
    }

    class Client {
        - String name
        - String email
        - String address
        - Integer phone
        - Calendar birthDate
        - User user
        + getters()
        + setters()
    }

    class Order {
        - Product product
        - Client client
        - Type type
        - Calendar create_at
        - Table table
        + getters()
        + setters()
    }

    class Table {
        - Integer number
        - Boolean isReserved
        + getters()
        + setters()
    } 

}

Order "1..N" *--o "1..N" Product
Order "1..1" *--o "1..N" Client
Order "1..0" o--o "1..N" Table 

User "1..1" *--o "1..N" Profile

Product "1..1" *--* "1..N" Category

Client *--* User

```

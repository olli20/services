import { nanoid} from "nanoid";

const items = [
    {
        id: nanoid(),
        to: "/services",
        text: "Home"
    },
    {
        id: nanoid(),
        to: "/services/phonebook",
        text: "Phonebook"
    },
    {
        id: nanoid(),
        to: "/services/booklist",
        text: "Book list"
    },
    {
        id: nanoid(),
        to: "/services/posts",
        text: "Posts search"
    },
    
]

export default items; 
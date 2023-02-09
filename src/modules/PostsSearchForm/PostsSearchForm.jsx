import {useState} from 'react';

const PostsSearchForm = ({onSubmit}) => {
    const [state, setState] = useState({
        search: ""
    });

    const handleChange = ({target}) => {
        const {name, value} = target;
        setState(prevState => {
           return  {...prevState, [name]: value,}
        })
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({...state});
        setState({
            search: "",
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="search"
                value={state.search}
                onChange={handleChange} 
                placeholder="Searchposts"
            />
            <button type="submit">Search</button>
        </form>
    )
}

export default PostsSearchForm;
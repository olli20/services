import {useState, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';

import {getPostComments} from '../../shared/api/posts';

const SinglePostCommentsPage = () => {
    const [state, setState] = useState({
        items: [],
        loading: false,
        error: null,
    });

    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPosts = async() => {
            setState(prevState => ({
                ...prevState, 
                loading: true,
                error: null,
            }));
            try {
                const result = await getPostComments(id);
                setState(prevState => {
                    return {
                        ...prevState,
                        items: result,
                    }
                });
            }
            catch (error) {
                setState(prevState => ({
                    ...prevState,
                    error,
                }));
            }
            finally {
                setState(prevState => {
                    return {
                        ...prevState, 
                        loading: false }
                });
            }
        }
        fetchPosts();
    }, [id, setState])

    const goBack = () => navigate(-1);

    const {items} = state;
    console.log(items);

    const elements = items.map(({id, name, email, body}) => {
        return (
            <li key={id}><p>Name: {name}. E-mail: {email}</p><p>{body}</p></li>
        )
    })


    return (
        <div className="container">
            <button onClick={goBack} type="button">Go Back</button>
            <h2>Single Post Comments Page</h2> 
            <ul>{elements}</ul>
        </div>
    )
}

export default SinglePostCommentsPage;
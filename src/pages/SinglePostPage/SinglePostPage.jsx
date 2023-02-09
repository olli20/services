import {useState, useEffect} from 'react';
import {Link, useParams, useNavigate} from 'react-router-dom';

import {getSinglePost} from '../../shared/api/posts';

const SinglePostPage = () => {
    const [state, setState] = useState({
        item: {},
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
                const result = await getSinglePost(id);
                setState(prevState => {
                    return {
                        ...prevState,
                        item: result,
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

    const {title, body} = state.item;
    return (
        <div className="container">
            <button onClick={goBack} type="button">Go Back</button>
            <h2>Single Post Page</h2>
            <h3>{title}</h3>
            <p>{body}</p>
            <Link to={`/services/posts/${id}/comments`}>Comments</Link>
        </div>
    )
}

export default SinglePostPage;
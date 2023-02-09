import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const PostsList = ({items}) => {
    const elements = items.map(({title, id}) => <li key={id}><Link to={`/services/posts/${id}`}>{title}</Link></li>);
    return <ol>{elements}</ol>;
}

export default PostsList;

PostsList.defaultProps = {
    items: [],
}

PostsList.propTypes = {
    items: PropTypes.array.isRequired,
}
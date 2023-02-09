import {Routes, Route} from "react-router-dom";

import HomePage from './pages/HomePage/HomePage';
import BookListPage from "./pages/BookListPage/BookListPage";
import PhonebookPage from "./pages/PhonebookPage/PhonebookPage";
import PostsSearchPage from './pages/PostsSearchPage/PostsSearchPage';
import SinglePostPage from './pages/SinglePostPage/SinglePostPage';
import SinglePostCommentsPage from "./pages/SinglePostCommentsPage/SinglePostsCommentsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

const UserRoutes = () => {
    return (
        <Routes>
            <Route path="/services/" element={<HomePage />} />
            <Route path="/services/booklist" element={<BookListPage />} />
            <Route path="/services/phonebook" element={<PhonebookPage />} />
            <Route path="/services/posts" element={<PostsSearchPage />} />
            <Route path="/services/posts/:id" element={<SinglePostPage />} />
            <Route path="/services/posts/:id/comments" element={<SinglePostCommentsPage />} />
            <Route path="/services*" element={<NotFoundPage />} />
        </Routes>
    )
}

export default UserRoutes;
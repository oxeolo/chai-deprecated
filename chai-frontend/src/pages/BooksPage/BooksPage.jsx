import React from 'react';
import './booksPage.css';
import BookView from '../../components/Books/views/BookView'
import PageLogoView from '../../components/UI/views/PageLogoView';

const BooksPage = () => (
    <div className = 'booksPage'>
        <PageLogoView/>
        <BookView/>
    </div>
)

export default BooksPage;
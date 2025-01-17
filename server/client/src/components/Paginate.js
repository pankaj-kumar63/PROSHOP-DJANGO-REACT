import React from 'react';
import { Pagination } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Paginate = ({ pages, page, keyword = '', isAdmin = false }) => {
    // Safely handle keyword
    if (keyword && keyword.includes('?keyword=')) {
        keyword = keyword.split('?keyword=')[1].split('&')[0];
    }

    // Render pagination only if there are more than 1 page
    return (
        pages > 1 && (
            <Pagination>
                {[...Array(pages).keys()].map((x) => (
                    <Pagination.Item
                        key={x + 1}
                        active={x + 1 === page}
                        as={Link}
                        to={
                            !isAdmin
                                ? `/?keyword=${keyword}&page=${x + 1}`
                                : `/admin/productlist/?keyword=${keyword}&page=${x + 1}`
                        }
                    >
                        {x + 1}
                    </Pagination.Item>
                ))}
            </Pagination>
        )
    );
};

export default Paginate;

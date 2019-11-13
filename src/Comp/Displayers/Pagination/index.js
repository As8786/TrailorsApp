import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'

import { handlePagination } from "../../../Actions/actionsCreator"
import './style.css'

const Pagination = ({ collectionLength, currentPage, handlePagination }) => {
    let [pagesNumber, setPagesNumber] = useState(1)
    let [actualPage, setActualPage] = useState(1)

    useEffect(() => {
        let totalPages = collectionLength % 24 === 0 ? collectionLength / 24 : Math.floor((collectionLength / 24) + 1)
        setPagesNumber(totalPages)
    })

    useEffect(() => setActualPage(currentPage))

    const onPaginationClick = (pageToGet, action) => {
        if (action === "Prev" && actualPage > 1) {
            handlePagination(actualPage - 1)
            setActualPage(actualPage - 1)
        }
        else if (action === "Next" && actualPage < pagesNumber) {
            handlePagination(actualPage + 1)
            setActualPage(actualPage + 1)
        }
        else if (action === "First" && actualPage !== 1) {
            handlePagination(1)
            setActualPage(1)
        }
        else if (action === "Last" && actualPage !== pagesNumber) {
            handlePagination(pagesNumber)
            setActualPage(pagesNumber)
        }
        else if (!action && pageToGet !== actualPage) {
            handlePagination(pageToGet)
            setActualPage(pageToGet)
        }
    }

    return <div className="pagination-container">
        <button id="btn-text" onClick={() => onPaginationClick(null, "Prev")}> Prev </button>
        <button id="btn-text" onClick={() => onPaginationClick(null, "First")}> First </button>
        {[...new Array(pagesNumber)].map((el, i) => <button key={i} id="btn-number" className={i + 1 === actualPage ? "active" : ""} onClick={() => onPaginationClick(i + 1)}> {i + 1}</button>)}
        <button id="btn-text" onClick={() => onPaginationClick(null, "Last")}> Last</button>
        <button id="btn-text" onClick={() => onPaginationClick(null, "Next")}> Next </button>
    </div>
}
export default connect(null, { handlePagination })(Pagination)



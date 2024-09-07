import React from 'react'

export const PaginationRick = ({ page, info, handlePrevPage, handleNextPage }) => {
    return (
        <>
            {info && (
                <div className="d-flex justify-content-between align-items-center mt-4">
                    <button 
                        className="btn btn-success" 
                        onClick={handlePrevPage} 
                        disabled={page === 1}
                    >
                        Anterior
                    </button>
                    <span>Página {page} de {info.pages}</span>
                    <button 
                        className="btn btn-success" 
                        onClick={handleNextPage} 
                        disabled={page === info.pages}
                    >
                        Siguiente
                    </button>
                </div>
            )}
        </>
    )
}

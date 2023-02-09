import React from 'react'

const LayoutContent = ({ index, word, content }) => {
    return (
        <div className='layout-content'>
            {/* <h3>Các từ tìm được: </h3> */}
            <div className='content'>
                <p className='content-word'><span>{index}</span>. {word}</p>
                <p className='content-detail'>Score: {content}</p>
            </div>
        </div>
    )
}

export default LayoutContent

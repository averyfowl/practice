

export default function BlogList({title, subTitle, author, date}) {
    
    return (
        <div className = "blogPost">
            <h2>{title}</h2>
            <h6>{subTitle}</h6>
            <p>Posted by {author} on {date}</p>

        </div>

    )

}

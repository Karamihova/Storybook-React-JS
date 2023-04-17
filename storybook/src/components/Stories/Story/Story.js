import {Link} from 'react-router-dom';

export const Story = ({
    _id,
    title,
    author,
    category,
    summary,
    imageUrl 
}) => {
    return (
                    <div className="col-md-6">
                        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="col p-4 d-flex flex-column position-static">
                            <strong className="d-inline-block mb-2 text-primary">{category}</strong>
                            <h3 className="mb-0">{title}</h3>
                            <div className="mb-1 text-body-secondary">{author}</div>
                            <p className="card-text mb-auto">{summary}</p>
                            <Link to={`/stories/${_id}`} className="stretched-link">Continue reading</Link>
                        </div>
                        <div className="col-auto d-none d-lg-block">
                            <img className="bd-placeholder-img" src={imageUrl} width="200" height="300" />
                        </div>
                        </div>
                    </div>
    );
};
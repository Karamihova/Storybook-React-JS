import { Story } from "./Story/Story";

export const Stories = ({
    stories
}) => {
    return (
        <div className="container">
                <h1 className="pb-4 mb-4 fst-italic border-bottom">
                    Our Stories
                </h1>
                {stories.length === 0 && (<h2>There are no stories yet</h2>)}
                <div className="row mb-2">

                {stories.map(x => 
                    <Story key={x._id} {...x}/>
                )}

                </div>
        </div>
    );
};
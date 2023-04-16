import { Story } from "../Stories/Story/Story";

export const Home = () => {
    return(
        <main className="container">
            <div className="p-4 p-md-5 mb-4 rounded text-bg-dark">
                <div className="col-md-6 px-0">
                <h1 className="display-4 fst-italic">Welcome to Storybook!</h1>
                <p className="lead my-3">A free website where you can write, read and review stories.</p>
                <p className="lead mb-0"><a href="#" className="text-white fw-bold">Learn more...</a></p>
                </div>
            </div>

            <div className="container">
                <div className="col-md-8">
                <article className="blog-post">
                <h2 className="blog-post-title mb-1">Who we are</h2>
                <p>This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, lists, tables, images, code, and more are all supported as expected.</p>
                <hr/>
                <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
                </article>
                </div>
            </div>

            {/* Stories Collection */}
            <div className="container">
                <h1 className="pb-4 mb-4 fst-italic border-bottom">
                    Popular Stories
                </h1>
                    <div className="row mb-2">

                    <Story/>
                    <Story/>
                    <Story/>
                    <Story/>
                    
                    </div>
            </div>

      </main>

      
    );
};
import { Story } from "../Story/Story";

export const Stories = () => {
    return (
        <div className="container">
                <h1 className="pb-4 mb-4 fst-italic border-bottom">
                    Our Stories
                </h1>
                    <div className="row mb-2">

                    <Story/>
                    <Story/>
                    <Story/>
                    <Story/>
                    <Story/>
                    <Story/>
                    
                    </div>
            </div>
    );
};
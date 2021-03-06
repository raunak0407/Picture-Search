import React from "react";
import unsplash from '../apis/unsplash'
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {

    state = {images: []};


    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: {
                query: term
            }, 
            
        });

        // console.log(this);
        this.setState({images: response.data.results});
    }

    render(){
        return(
        <div className="ui container" style={{marginTop: '10px'}}>
            <SearchBar onSubmit={this.onSearchSubmit}/> {/* here it can be named anything not necessary onSubmit as its a component by us */}
            <ImageList images={this.state.images}/>
        </div>
        );
    }
};

export default App;
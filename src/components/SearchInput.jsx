import React from "react";
import '../styles/styleSearch.css'

class SearchInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchInput: ''
        }

        this.onChangeInputHandler = this.onChangeInputHandler.bind(this);
    }

    async onChangeInputHandler(event) {
        await this.setState(() => {
            return {
                searchInput: event.target.value
            }
        })

        console.log(this.state.searchInput);
        this.props.searchInput(this.state.searchInput);
    }

    render() {
        return (
            <div>
                <input className='search-input' value={this.state.searchInput} type="text" onChange={this.onChangeInputHandler} placeholder='search note..'/>
            </div>
        )
    }
}

export default SearchInput;
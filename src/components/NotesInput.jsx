import React from "react";

class NotesInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
            charLimit: 50,
            charLimitDisplay: 50
        }

        this.onChangeTitleHandler = this.onChangeTitleHandler.bind(this);
        this.onChangeBodyHandler = this.onChangeBodyHandler.bind(this);
        this.onSubmitNote = this.onSubmitNote.bind(this);
    }

    onChangeTitleHandler(event) {
        if((this.state.charLimit - event.target.value.length) < 0) {
            window.alert('Melebihi Karakter Maksimum!');
        } else {
             this.setState({
                    charLimitDisplay: this.state.charLimit - event.target.value.length
            })
            this.setState(() =>{
                return {
                    title: event.target.value,
                }
            })
        }
    }

    onChangeBodyHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            }
        })
    }

    onSubmitNote(event) {
        event.preventDefault();
        console.log(this.state.body);
        if (this.state.title === '' || this.state.body === '') {
            window.alert('TITLE atau BODY tidak boleh kosong!')
        } else {
            this.props.addNote(this.state);
        }
    }

    render() {
        return(
            <form className='note-input-form' id="input-form" onSubmit={this.onSubmitNote}>
                <textarea id="input-title" type="text" onChange={this.onChangeTitleHandler} value={this.state.title} placeholder='title..'/>
                <textarea id="input-body" type="text" onChange={this.onChangeBodyHandler} value={this.state.body} placeholder='body..'/>
                <button type='submit'>Tambah</button>
                <span>title character remaining: {this.state.charLimitDisplay}</span>
            </form>
        )
    }
}

export default NotesInput;
import React, { Component} from 'react';

class FileUpload extends Component {
    constructor(props) {
        super(props)
    }
    handlefile = (e) => {
        const Filereader = new FileReader()
        Filereader.readAsText(e.target.files[0],"UTF-8")
        Filereader.onload = ev =>{
        this.props.AddData(JSON.parse(ev.target.result))
    }
    }
    render() {
        return (
            <>
                <input type="file" accept='.json,.txt' onChange={(e) => this.handlefile(e)} />
            </>
        )
    }
}
export default FileUpload